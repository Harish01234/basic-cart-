import React from 'react'

import { products } from '../products/product'

import { useCartStore } from '../store/cartStore'

const Store = () => {

        const {cart,addtoCart,increaseCount}=useCartStore()

        const add = (product) => {
            // Check if the product is already in the cart
            const cartProduct = cart.find((item) => item.id === product.id);
            
            if (cartProduct) {
              // If the product is already in the cart, increase the counter
              increaseCount(product.id);
            } else {
              // If the product is not in the cart, add it to the cart and then increase the counter
              addtoCart({ ...product, counter: 1 }); // Start with counter = 1
            }
          };

  return (
    <div>
       <h1>products</h1>
        {
            products.map((product)=>(
                <div key={product.id}>
                 <div>{product.productName}</div>
                 <div>{product.description}</div>   
                 <button onClick={()=>add(product)}>add</button>

                </div>
           
            ))
        }

        
    </div>
  )
}

export default Store