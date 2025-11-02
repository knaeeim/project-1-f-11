import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart'
import Products from './Components/Products'

function App() {

  const [carts, setCarts] = useState([])

  const handleUpdateCart = (product) => {
      setCarts((prev)=> [...prev, product])
  }

  console.log(carts);

  return (
    <div className='flex justify-center gap-10 p-10'>
      <div className='w-[70%]'>
        <Products handleUpdateCart={handleUpdateCart} />
      </div>
      <div className='w-[30%]'>
        <Cart carts={carts}></Cart>
      </div>
    </div>
  )
}

export default App
