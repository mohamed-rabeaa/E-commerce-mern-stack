import React from 'react'
import { useSelector } from 'react-redux'
import CartCheckOut from '../../component/client/CartCheckOut'
import CartTabels from '../../component/client/CartTables'
import ServerMessage from '../../component/client/ServerMessage'

const Cart = () => {
  const { userError, userResMsg } = useSelector((state) => ({ ...state.user }));
  return (
    <>
      <ServerMessage resMsg={userResMsg} error={userError} />
      <div className='grid grid-cols-1 lg:grid-cols-3 mt-20 bg-white container max-w-screen-xl mx-auto shadow-md rounded-md'>
        <CartTabels />
        <CartCheckOut />
      </div>
    </>
  )
}
export default Cart