import { createContext, ReactNode, useContext, useState } from "react";

// Definindo a interface para um item do carrinho
interface CartItem {
  id: string;
  name: string;
  description: string;
  price_per_unit: number;
  background_color: string;
  image_url: any; 
  quantity: number;
}

// Interface para o contexto do carrinho
interface CartContextType {
  cartItems: CartItem[];
  addItemToCart: (item: Omit<CartItem, 'quantity'>, quantity: number) => void;
  updateItemQuantity: (id: string, quantity: number) => void;
  removeItemFromCart: (id: string) => void;
}

// Criação do contexto do carrinho
const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

// Provedor do contexto do carrinho
export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Adiciona um item ao carrinho
  const addItemToCart = (item: Omit<CartItem, 'quantity'>, quantity: number) => {
    setCartItems(prevItems => {
      const itemIndex = prevItems.findIndex(existingItem => existingItem.id === item.id);
      if (itemIndex > -1) {
        // Atualiza a quantidade se o item já estiver no carrinho
        const newItems = [...prevItems];
        newItems[itemIndex].quantity += quantity;
        return newItems;
      }
      // Adiciona um novo item ao carrinho
      return [...prevItems, { ...item, quantity }];
    });
  };

  // Atualiza a quantidade de um item no carrinho
  const updateItemQuantity = (id: string, quantity: number) => {
    setCartItems(prevItems => {
      if (quantity <= 0) {
        // Remove o item se a quantidade for zero ou menor
        return prevItems.filter(item => item.id !== id);
      }
      return prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      );
    });
  };

  // Remove um item do carrinho
  const removeItemFromCart = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, updateItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizado para acessar o contexto do carrinho
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
