import React from 'react'

const UserCart = () => {
  return (
    <div className='w-full h-full my-8'>
      <div className='bg-white border-2 shadow-md rounded-md overflow-hidden w-3/4 mx-auto '>
        <img src="/assets/imgs/products/appleWatch.jpg" alt='item' className='w-24 h-24 rounded-full mt-14 mx-auto' />

        <div className='mt-8'>
          <p className='text-2xl font-bold text-gray-700 text-center'>mohamed@gmail.com</p>
          <p className='text-sm font-bold text-gray-400 text-center'>Email</p>
        </div>

        <div className='mt-8'>
          <p className='text-2xl font-bold text-gray-700 text-center'>22</p>
          <p className='text-sm font-bold text-gray-400 text-center'>quantity</p>
        </div>

        <div className='mt-8'>
          <p className='text-2xl font-bold text-gray-700 text-center'>$1480</p>
          <p className='text-sm font-bold text-gray-400 text-center'>price</p>
        </div>

        <button className='bg-red-500 text-2xl font-bold text-gray-700 text-center py-2 w-full mt-8'>Delete</button>
      </div>
    </div>
  )
}
export default UserCart