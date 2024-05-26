import { createContext } from "react";

export const CartContext = createContext();

export const cartProvider = ({children})=>{
    return(
        <CartContext.Provider>{children}</CartContext.Provider>
    )
}