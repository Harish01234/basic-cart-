import { create } from "zustand";

export const useCartStore=create((set)=>({
    cart:[],
    addtoCart:(product)=>set((state)=>({cart:[...state.cart,product]})),
    removefromCart:(productId)=>set((state)=>({cart:state.cart.filter(product=>product.id!==productId)})),
    clearCart:()=>set({cart:[]}),
    increaseCount:(productId)=>set((state)=>({cart:state.cart.map((product)=>(
        product.id===productId ? { ...product, counter: product.counter + 1 }:product
    ))}))
}))