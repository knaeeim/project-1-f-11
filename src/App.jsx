import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart'
import Products from './Components/Products'

function App() {

  const [carts, setCarts] = useState([])

  const handleUpdateCart = (product) => {
      setCarts((prev)=> {
        const exists = prev.some((p) => p.id === product.id); 

        if(exists){
          // object er moddho theke cartQunatity ber kore update kore dibo
          return prev.map((elem) => elem.id === product.id ? {...elem, cart_quantity: elem.cart_quantity + 1 } : elem)
        }
        else{
          // notun je object asbe take array er moddhe rekhe dibo
          return [...prev, {...product, cart_quantity : 1}]
        }

      })
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
