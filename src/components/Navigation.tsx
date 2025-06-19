import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Leaf, Menu, X, ShoppingBag, User, Shield } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import CartDrawer from '@/components/cart/CartDrawer';
import { useCart } from '@/components/cart/CartContext';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import clsx from 'clsx';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();
  const { user } = useAuth();
  const { items } = useCart();
  const [showLeafBubble, setShowLeafBubble] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [showJournal, setShowJournal] = useState(false);
  const [journalContent, setJournalContent] = useState(() => localStorage.getItem('secretJournal') || '');
  const journalRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showOracle, setShowOracle] = useState(false);
  const [oracleAnim, setOracleAnim] = useState(false);

  React.useEffect(() => {
    if (user) {
      checkAdminRole();
    }
  }, [user]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setShowJournal(true);
        setTimeout(() => journalRef.current?.focus(), 100);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const checkAdminRole = async () => {
    try {
      const { data } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user?.id)
        .eq('role', 'admin')
        .single();

      setIsAdmin(!!data);
    } catch (error) {
      setIsAdmin(false);
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Whispering Leaves', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // ThemeToggle component
  const ThemeToggle = () => {
    const [theme, setTheme] = React.useState(() =>
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    );

    React.useEffect(() => {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }, [theme]);

    return (
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-full border border-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-xl"
        title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    );
  };

  const handleLeafClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowLeafBubble(true);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    setTimeout(() => {
      setShowLeafBubble(false);
      if (location.pathname !== '/') {
        navigate('/');
      }
    }, 2500);
  };

  const handleSaveJournal = () => {
    localStorage.setItem('secretJournal', journalContent);
    setShowJournal(false);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowOracle(true);
    setTimeout(() => setOracleAnim(true), 10); // trigger animation
    setTimeout(() => {
      setOracleAnim(false);
      setShowOracle(false);
      navigate('/contact');
    }, 2500);
  };

  return (
    <>
      {/* Oracle Orb Animation */}
      {showOracle && (
        <div className={clsx(
          'fixed left-1/2 top-20 z-[9999] flex flex-col items-center pointer-events-none',
          oracleAnim && 'animate-oracle-float'
        )} style={{ transform: 'translateX(-50%)' }}>
          <div className="bg-gradient-to-br from-[#3a185c] via-[#7c3aed] to-[#e0c3fc] rounded-full shadow-2xl border-4 border-white w-64 h-64 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 animate-oracle-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <span className="text-white text-center text-2xl font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] px-8">
              You have reached the Spirit of the Plants. Leave your intentions.
            </span>
          </div>
        </div>
      )}
      <style>{`
        @keyframes oracle-float {
          0% { opacity: 0; transform: translateX(-50%) translateY(0) scale(0.8); }
          10% { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
          80% { opacity: 1; transform: translateX(-50%) translateY(-80px) scale(1.05); }
          100% { opacity: 0; transform: translateX(-50%) translateY(-120px) scale(0.9); }
        }
        .animate-oracle-float {
          animation: oracle-float 2.5s cubic-bezier(.4,0,.2,1) forwards;
        }
        @keyframes oracle-shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        .animate-oracle-shimmer {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(120deg, transparent 0%, #fff8 50%, transparent 100%);
          animation: oracle-shimmer 2s linear infinite;
          mix-blend-mode: lighten;
        }
      `}</style>
      <nav className="bg-white/95 backdrop-blur-sm border-b border-mint sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="relative">
              <button type="button" className="flex items-center space-x-2 group bg-transparent border-none outline-none p-0" onClick={handleLeafClick}>
                <div className="relative">
                  <Leaf className="h-8 w-8 text-primary cursor-pointer" />
                  {showLeafBubble && (
                    <div className="absolute left-1/2 top-10 -translate-x-1/2 bg-white dark:bg-gray-900 border border-mint shadow-lg rounded-xl px-4 py-2 text-base font-bold text-primary whitespace-nowrap animate-bounce z-50">
                      STOP TOUCHING ME I'M PHOTOSYNTHESIZING.
                    </div>
                  )}
                </div>
                <span className="font-serif text-2xl text-primary font-semibold">Rooted</span>
              </button>
              <audio ref={audioRef} src="/plantaudio.mp3" preload="auto" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                item.name === 'Contact' ? (
                  <a
                    key={item.name}
                    href={item.path}
                    onClick={handleContactClick}
                    className={`font-sans text-sm font-medium transition-colors hover:text-primary ${
                      isActive(item.path) ? 'text-primary' : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`font-sans text-sm font-medium transition-colors hover:text-primary ${
                      isActive(item.path) ? 'text-primary' : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>

            {/* Cart & Auth & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-mint relative" onClick={() => setIsCartOpen(true)}>
                <ShoppingBag className="h-5 w-5" />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full text-xs w-5 h-5 flex items-center justify-center border-2 border-white">{items.length}</span>
                )}
              </Button>
              {user ? (
                <div className="flex items-center space-x-2">
                  {isAdmin && (
                    <Link to="/admin">
                      <Button variant="ghost" size="icon" className="hover:bg-mint" title="Admin Portal">
                        <Shield className="h-5 w-5" />
                      </Button>
                    </Link>
                  )}
                  <Link to="/dashboard">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="hover:bg-mint"
                      title="Profile & Dashboard"
                    >
                      <User className="h-5 w-5" />
                    </Button>
                  </Link>
                  {/* Theme toggle right of dashboard */}
                  <ThemeToggle />
                </div>
              ) : (
                <>
                  <Link to="/auth">
                    <Button variant="ghost" size="icon" className="hover:bg-mint">
                      <User className="h-5 w-5" />
                    </Button>
                  </Link>
                  {/* Theme toggle for signed out users */}
                  <ThemeToggle />
                </>
              )}
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-mint">
                {navItems.map((item) => (
                  item.name === 'Contact' ? (
                    <a
                      key={item.name}
                      href={item.path}
                      onClick={(e) => { handleContactClick(e); setIsOpen(false); }}
                      className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                        isActive(item.path) ? 'text-primary bg-mint' : 'text-gray-700'
                      }`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                        isActive(item.path) ? 'text-primary bg-mint' : 'text-gray-700'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
                {user ? (
                  <div className="px-3 py-2 space-y-2">
                    <div className="text-sm text-gray-600">{user.email}</div>
                    <Link
                      to="/dashboard"
                      className="block text-base font-medium text-gray-700 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Dashboard
                    </Link>
                    {isAdmin && (
                      <Link
                        to="/admin"
                        className="block text-base font-medium text-gray-700 hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        Admin Portal
                      </Link>
                    )}
                  </div>
                ) : (
                  <Link
                    to="/auth"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
      <CartDrawer open={isCartOpen} onOpenChange={setIsCartOpen} />
      <Dialog open={showEasterEgg} onOpenChange={setShowEasterEgg}>
        <DialogContent className="flex flex-col items-center justify-center text-center">
          <div className="mb-4 animate-bounce">
            <span role="img" aria-label="dancing plant" style={{ fontSize: 64 }}>🪴</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">You found the secret plant!</h2>
          <p className="text-lg">May your collection grow wild and happy 🌱</p>
        </DialogContent>
      </Dialog>
      <Dialog open={showJournal} onOpenChange={setShowJournal}>
        <DialogContent className="max-w-lg w-full flex flex-col items-center justify-center text-center gap-4">
          <h2 className="text-2xl font-bold mb-2">Secret Journal</h2>
          <textarea
            ref={journalRef}
            className="w-full min-h-[120px] p-3 rounded border border-muted focus:outline-none focus:ring-2 focus:ring-primary text-base"
            value={journalContent}
            onChange={e => setJournalContent(e.target.value)}
            placeholder="Write your secret plant thoughts..."
          />
          <button
            className="bg-primary text-white px-6 py-2 rounded font-semibold hover:bg-primary/90 transition"
            onClick={handleSaveJournal}
          >
            Save
          </button>
          <p className="text-xs text-muted-foreground">(Only you can see this. Saved in your browser.)</p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navigation;
