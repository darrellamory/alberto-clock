import React, { createContext, useState, useContext, useEffect } from 'react';
import './index.css'; // Import the main CSS file for styling

// Create the Cart Context
const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Initialize cart from localStorage if available
    try {
      const localCart = localStorage.getItem('cartItems');
      return localCart ? JSON.parse(localCart) : [];
    } catch (error) {
      console.error("Failed to parse cart items from localStorage", error);
      return [];
    }
  });

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save cart items to localStorage", error);
    }
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Cart Component
export const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useContext(CartContext);

  return (
    <div className="cart-page-container">
      <h1 className="cart-title">Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="cart-empty-message">Your cart is empty.</p>
      ) : (
        <div className="cart-items-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-text">{item.text}</p>
                <p className="cart-item-price">${item.price}</p>
                <div className="cart-item-quantity-control">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="cart-item-remove-button">Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <p className="cart-total-price">Total: ${getTotalPrice().toFixed(2)}</p>
            <button className="cart-checkout-button">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};