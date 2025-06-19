import React from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerClose
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { useCart } from './CartContext';
import { X } from 'lucide-react';

// INR formatter
const formatINR = (amount: number) => {
  return amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
};

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ open, onOpenChange }) => {
  const { items, removeFromCart, updateQuantity, clearCart } = useCart();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-w-md ml-auto">
        <DrawerHeader className="flex flex-row items-center justify-between">
          <DrawerTitle>Cart</DrawerTitle>
          <DrawerClose asChild>
            <Button variant="ghost" size="icon">
              <X className="h-5 w-5" />
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <div className="p-4 flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="text-center text-muted-foreground py-12">Your cart is empty.</div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.id + JSON.stringify(item.customization)} className="flex items-center gap-4 border-b pb-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <div className="font-semibold text-primary">{item.name}</div>
                    {item.customization && (
                      <div className="text-xs text-muted-foreground">
                        {Object.entries(item.customization).map(([k, v]) => `${k}: ${v}`).join(', ')}
                      </div>
                    )}
                    <div className="flex items-center gap-2 mt-2">
                      <Button size="icon" variant="outline" onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</Button>
                      <span className="px-2">{item.quantity}</span>
                      <Button size="icon" variant="outline" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="font-bold text-lg">{formatINR(item.price * item.quantity)}</div>
                    <Button size="icon" variant="ghost" onClick={() => removeFromCart(item.id)} title="Remove">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <DrawerFooter>
          <div className="flex justify-between items-center font-semibold text-lg">
            <span>Total</span>
            <span>{formatINR(total)}</span>
          </div>
          <Button className="w-full" disabled={items.length === 0}>Checkout</Button>
          {items.length > 0 && (
            <Button variant="outline" className="w-full" onClick={clearCart}>Clear Cart</Button>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer; 