import React from 'react'
import { useSelector } from 'react-redux'
import CartCheckOut from '../../component/categories/CartCheckOut'
import CartTabels from '../../component/categories/CartTables'
import ServerMessage from '../../component/client/ServerMessage'

const Cart = () => {
  const { error, resMsg } = useSelector((state) => ({ ...state.user }));
  return (
    <>
      <ServerMessage resMsg={resMsg} error={error} />
      <div className='grid grid-cols-2 lg:grid-cols-3 mt-20 bg-white container max-w-screen-xl mx-auto shadow-md rounded-md'>
        <CartTabels />
        <CartCheckOut />
      </div>
    </>
  )
}
export default Cart