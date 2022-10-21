import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const UserInfo = () => {
  const userData = JSON.parse(localStorage.getItem('profile')) || null
  return (
    <div className='px-16'>
      <div className='mx-auto mt-20 bg-white shadow-md rounded-md text-center'>
        {userData &&
          <div className='flex p-8 md:space-x-80'>
            <div className='flex-1 max-w-sm' >
              <h2 className='text-2xl font-bold text-gray-500'>
                {userData.firstName} {userData.lastName}
              </h2>
              <h2 className='text-xl mt-12 font-bold text-gray-500'>
                {userData.email}
              </h2>

              <p className='text-xl mt-12 font-bold text-gray-500'>
                {userData.createdAt}
              </p>

              <div className='flex mt-6'>
                <button className='text-xl text-green-500 border-2 rounded-md px-2 sm:px-6 mx-auto'>
                  Delete
                  <FontAwesomeIcon icon={faTrashCan} className='w-6 h-6 ml-4' />
                </button>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
export default UserInfo