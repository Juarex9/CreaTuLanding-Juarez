import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id == product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, cantidad: 1 }];
        });
    };

    const removeFromCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id == product.id);
            if (existingProduct.cantidad === 1) {
                return prevCart.filter(item => item.id !== product.id);
            }
            return prevCart.map((item) => 
                item.id === product.id
                    ? { ...item, cantidad: item.cantidad - 1 }
                    : item
            );
        });
    };

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>{children}</CartContext.Provider>
    );
};