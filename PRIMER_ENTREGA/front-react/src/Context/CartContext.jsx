import React, {useContext, useState, createContext, useEffect} from 'react';
const CartContext = createContext();

//Custom Hooks (esta se importa)
export function UseCart(){
    return useContext(CartContext) //Basicamente hace esto: CartContext.Consumer
}

export const CartProvider = ({children}) => {

    let [cart, setCart] = useState([]);

    const quantity = Object.values(cart).reduce((acc,{cantidad}) => acc + cantidad,0)
    const total = Object.values(cart).reduce((acc, {cantidad, price}) => acc + cantidad * price,0)

    const AddToCart = (obj, cantidad) =>{
        const exist = cart.find((x) => x.id === obj.id);
        if (exist){
            setCart(cart.map(x => x.id === obj.id ? {...exist, cantidad: exist.cantidad + cantidad} : x
            )
          );
        }else{
            setCart([...cart, obj])
        }
    }

    const clearCart = () => {
        setCart([]);
    }
    
    const isInCard = (id) => {
        const newCart = cart.map((productObject) => {
            if (productObject.id === id) {
                return {
                    ...productObject,
                    cantidad: console.log('hola')
                }
            }
            return productObject
        });
        setCart(newCart)
    }

    const removeItem = (id) => {
       const newCart = cart.filter((productObject) => productObject.id !== id)
       setCart(newCart);
    }


    useEffect(() => {
        
        if(localStorage.getItem('cart')){
            // De Json a objeto
            cart = JSON.parse(localStorage.getItem('cart'))
            setCart(cart)
        }
    },[])

    return (
        <div>
            <CartContext.Provider value = {{cart, AddToCart, clearCart, isInCard, removeItem, quantity , total}}>
            {children}
            </CartContext.Provider>
            
        </div>
    )
}


