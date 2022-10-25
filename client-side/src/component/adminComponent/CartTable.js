import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const CartTable = () => {
    return (
        <div className="col-span-2 overflow-x-auto relative shadow-md sm:rounded-lg p-8">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Image
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Email
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Price
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Date
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="p-4 w-32">
                            <img src="/assets/imgs/products/appleWatch.jpg" alt='item' className='w-16 h-16' />
                        </td>
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            <Link to='/dashboard/cart'>mohamed@gmail.com</Link>
                        </td>
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            $400
                        </td>
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            7/10/2022
                        </td>
                        <td className="py-4 px-6">
                            <Link className="font-medium text-red-600 dark:text-red-500 hover:underline">
                                <FontAwesomeIcon icon={faTrashCan} className='w-6 h-6 ml-4' />
                            </Link>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="p-4 w-32">
                            <img src="/assets/imgs/products/appleWatch.jpg" alt='item' className='w-16 h-16' />
                        </td>
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            <Link to='/dashboard/product'>mohamed@gmail.com</Link>
                        </td>
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            $400
                        </td>
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            7/10/2022
                        </td>
                        <td className="py-4 px-6">
                            <Link className="font-medium text-red-600 dark:text-red-500 hover:underline">
                                <FontAwesomeIcon icon={faTrashCan} className='w-6 h-6 ml-4' />
                            </Link>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="p-4 w-32">
                            <img src="/assets/imgs/products/appleWatch.jpg" alt='item' className='w-16 h-16' />
                        </td>
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            <Link to='/dashboard/product'>mohamed@gmail.com</Link>
                        </td>
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            $400
                        </td>
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            7/10/2022
                        </td>
                        <td className="py-4 px-6">
                            <Link className="font-medium text-red-600 dark:text-red-500 hover:underline">
                                <FontAwesomeIcon icon={faTrashCan} className='w-6 h-6 ml-4' />
                            </Link>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="p-4 w-32">
                            <img src="/assets/imgs/products/appleWatch.jpg" alt='item' className='w-16 h-16' />
                        </td>
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            <Link to='/dashboard/product'>mohamed@gmail.com</Link>
                        </td>
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            $400
                        </td>
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            7/10/2022
                        </td>
                        <td className="py-4 px-6">
                            <Link className="font-medium text-red-600 dark:text-red-500 hover:underline">
                                <FontAwesomeIcon icon={faTrashCan} className='w-6 h-6 ml-4' />
                            </Link>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="p-4 w-32">
                            <img src="/assets/imgs/products/appleWatch.jpg" alt='item' className='w-16 h-16' />
                        </td>
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            <Link to='/dashboard/product'>mohamed@gmail.com</Link>
                        </td>
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            $400
                        </td>
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                            7/10/2022
                        </td>
                        <td className="py-4 px-6">
                            <Link  className="font-medium text-red-600 dark:text-red-500 hover:underline">
                                <FontAwesomeIcon icon={faTrashCan} className='w-6 h-6 ml-4' />
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default CartTable