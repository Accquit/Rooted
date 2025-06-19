import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Quiz from "./pages/Quiz";
import { CartProvider } from './components/cart/CartContext';

const queryClient = new QueryClient();

const splashDuration = 1800;
const animationDuration = 900;

const SplashScreen = ({ animateOut }: { animateOut: boolean }) => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "#23211A",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      transition: `transform ${animationDuration}ms cubic-bezier(.4,0,.2,1)`,
      transform: animateOut ? "translateY(-100vh)" : "translateY(0)",
    }}
  >
    <img
      src="/logo1.png"
      alt="Rooted Logo"
      style={{ maxWidth: 300, width: "60vw", height: "auto" }}
    />
  </div>
);

const AnimatedApp = ({ animateIn, children }: { animateIn: boolean; children: React.ReactNode }) => (
  <div
    style={{
      minHeight: "100vh",
      width: "100vw",
      transition: `transform ${animationDuration}ms cubic-bezier(.4,0,.2,1)`,
      transform: animateIn ? "translateY(0)" : "translateY(100vh)",
    }}
  >
    {children}
  </div>
);

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [splashAnimateOut, setSplashAnimateOut] = useState(false);
  const [appAnimateIn, setAppAnimateIn] = useState(false);

  useEffect(() => {
    const splashTimer = setTimeout(() => setSplashAnimateOut(true), splashDuration);
    const appTimer = setTimeout(() => setAppAnimateIn(true), splashDuration);
    const hideSplashTimer = setTimeout(() => setShowSplash(false), splashDuration + animationDuration);
    return () => {
      clearTimeout(splashTimer);
      clearTimeout(appTimer);
      clearTimeout(hideSplashTimer);
    };
  }, []);

  return (
    <CartProvider>
      {showSplash && <SplashScreen animateOut={splashAnimateOut} />}
      <AnimatedApp animateIn={appAnimateIn}>
        {!showSplash && (
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/auth" element={<Auth />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/quiz" element={<Quiz />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </QueryClientProvider>
        )}
      </AnimatedApp>
    </CartProvider>
  );
};

export default App;
