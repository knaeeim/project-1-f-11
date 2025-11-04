import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart'
import Products from './Components/Products'
import Swal from 'sweetalert2'

function App() {

  const [carts, setCarts] = useState([])

  const handleRemoveFromCart = (product) => {
    setCarts((prev) => {
      const filteredArray = prev.filter((p) => p.id !== product.id);
      return [...filteredArray];
    })
  }

  const handleUpdateCart = (product) => {
    setCarts((prev) => {
      const exists = prev.some((p) => p.id === product.id);

      if (exists) {
        // object er moddho theke cartQunatity ber kore update kore dibo
        return prev.map((elem) => elem.id === product.id ? { ...elem, cart_quantity: elem.cart_quantity + 1 } : elem)
      }
      else {
        // notun je object asbe take array er moddhe rekhe dibo
        Swal.fire({
          title: `${product.name} is successfully added to the cart!!`,
          icon: "success",
          draggable: true
        });
        return [...prev, { ...product, cart_quantity: 1 }]
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
        <Cart handleRemoveFromCart={handleRemoveFromCart} carts={carts}></Cart>
      </div>
    </div>
  )
}

export default App
