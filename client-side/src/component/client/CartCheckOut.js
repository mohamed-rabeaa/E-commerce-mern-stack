import React from 'react'
import { useSelector } from 'react-redux';

const CartCheckOut = () => {
  const { cart } = useSelector((state) => ({ ...state.cart }));

  let quantity = 0
  let price = 0

  if (Object.keys(cart).length > 0) {
    cart.cartItems.forEach((item) => {
      quantity += item.quantity
      price += item.product.price * item.quantity
    });
  }

  return (
    <div className='w-full  h-full mx-auto my-8'>
      <div className='bg-white border-2 shadow-md rounded-md overflow-hidden w-3/4 max-w-md mx-auto '>
        <p className='bg-blue-500 text-2xl font-bold text-gray-700 text-center py-2'>Check out</p>

        <div className='mt-14'>
          <p className='text-5xl font-bold text-gray-700 text-center'>{quantity}</p>
          <p className='text-sm font-bold text-gray-400 text-center'>quantity</p>
        </div>

        <div className='mt-14'>
          <p className='text-5xl font-bold text-gray-700 text-center'>{price}</p>
          <p className='text-sm font-bold text-gray-400 text-center'>price</p>
        </div>

        <div className='mt-14'>
          <p className='text-5xl font-bold text-gray-700 text-center'>24 H</p>
          <p className='text-sm font-bold text-gray-400 text-center'>Delvery in</p>
        </div>

        <button className='bg-green-500 text-2xl font-bold text-gray-700 text-center py-2 w-full mt-14'>Check Now</button>

      </div>
    </div>
  )
}
export default CartCheckOut