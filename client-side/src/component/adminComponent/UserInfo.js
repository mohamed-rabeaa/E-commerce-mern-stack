import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const UserInfo = () => {
    return (
        <div className='col-span-2 mx-auto mt-20 bg-white shadow-md rounded-md'>
            <div className='flex p-8 md:space-x-80'>
                <div className='flex-1 max-w-sm' >
                    <h2 className='text-2xl font-bold text-gray-500'>
                        mohamed rabeaa
                    </h2>
                    <h2 className='text-2xl font-bold text-gray-500'>
                        mohamed@gmail.com
                    </h2>
                    <p className='mt-6 text-black '>
                        sslksd skljdkls kdwlwl dlkdlw wlkekdw wlkdlkds wlkeldwsm welkdwkd wlekwd,s
                        wleklds,sw welkwl wlkwls, wlks,s welkslws wlkwskls wlksmls wlksdmdw kldw
                    </p>
                    <h2 className='text-2xl font-bold text-gray-500'>
                        Apple
                    </h2>
                    <h2 className='text-2xl font-bold text-gray-500'>
                        9/9/2020
                    </h2>
                    <div className='flex mt-6'>
                        <p className='text-xl text-green-500 border-2 rounded-md px-2 sm:px-6'>
                            Delete
                            <FontAwesomeIcon icon={faTrashCan} className='w-6 h-6 ml-4' />
                        </p>
                    </div>
                </div>
                <div className='flex-1 max-w-xl max-h-xl '>
                    <img src="/assets/imgs/products/appleWatch.jpg" alt='item' className=' mx-auto' />
                </div>
            </div>
        </div>
    )
}
export default UserInfo