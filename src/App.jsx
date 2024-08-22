import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Cart } from './components/Cart'
import Store from './components/Store'
import { useCartStore } from './store/cartStore'
function App() {
  const{clearCart}=useCartStore()

  return (
    <>
     <div>
      <Store/>
    <Cart/>
      <button onClick={()=>clearCart()}>clear Cart</button>
     </div>
    </>
  )
}

export default App
