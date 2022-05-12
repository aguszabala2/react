import { createContext, useContext } from "react";
import { useState } from "react";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext)

const {Provider} = CartContext;
export function CartContextProvider ({children}) {

    const [cart, setCart] = useState([]);

    const addToCart = (item, quant) => {
        if(isInCart()){
            const newCart = cart.map(cartItem => {
                if (cartItem.id === item.id){
                    const copyItem = {...cartItem};
                    copyItem.quant += quant;
                    return copyItem
                }else return cartItem
            })
            setCart(newCart)
        }else{
            const newItem = {...item, quant};
            setCart ([...cart, newItem])
        }
    }

    const removeFromCart = (id) => {
        const newCart = [...cart];
        const cartFilter = newCart.filter(item => {
            return item.id !== id;
        })
        setCart(cartFilter)
    }

    const isInCart = () => {
        return false;
    }

    const contextFunction = () => console.log('Contexto listo')
    return (
        <Provider value={{contextFunction, cart, addToCart, removeFromCart}}>
            {children}
        </Provider>
        )
    }

export default useCartContext