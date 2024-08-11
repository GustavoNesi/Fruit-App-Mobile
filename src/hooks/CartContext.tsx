import React, { createContext, useContext, useState, ReactNode } from 'react';

// Defina o tipo para um item no carrinho
interface CartItem {
  id: string;
  name: string;
  price_per_unit: number;
  background_color: string;
  image_url: any; // Tipo adequado para a imagem, você pode ajustar conforme necessário
  quantity: number;
}

// Defina o tipo para o contexto do carrinho
interface CartContextType {
  cartItems: CartItem[];
  addItemToCart: (item: Omit<CartItem, 'quantity'>, quantity: number) => void;
}

// Crie o contexto com um valor inicial vazio
const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItemToCart = (item: Omit<CartItem, 'quantity'>, quantity: number) => {
    setCartItems(prevItems => [...prevItems, { ...item, quantity }]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
