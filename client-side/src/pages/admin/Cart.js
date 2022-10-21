import React from 'react'
import CartTabels from '../../component/adminComponent/CartTables'
import UserCart from '../../component/adminComponent/UserCart'

const Cart = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 mt-20 bg-white container max-w-screen-xl mx-auto shadow-md rounded-md'>
      <CartTabels />
      <UserCart />
    </div>
  )
}

export default Cart