import React from 'react'
import { useCartStore } from '../store/cartStore'

export const Cart = () => {
    const {cart,removefromCart}=useCartStore()

    const remove=(productId)=>{
        removefromCart(productId)
    }

    console.log(cart);
    
    return (
    <>
    <h1>cart items</h1>
    {
        cart.map(product=>(<div key={product.id}>
            <div>{product.productName}</div>
            <div>{product.description}</div> 
            <div>{product.counter}</div>  
            <button onClick={()=>remove(product.id)}>remove</button>

           </div>))
    }
    </>
  )
}
