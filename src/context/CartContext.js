import { createContext } from "react";

const CartContext = createContext();
const {Provider} = CartContext;
export function CartContextProvider ({children}) {

    const context = () => console.log
    return (
        <Provider value={{context}}>
            {children}
        </Provider>
        )
    }