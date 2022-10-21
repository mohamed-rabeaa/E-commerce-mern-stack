import React, { useEffect } from 'react'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { allProduct, remove } from '../../redux/reducers/productSlice'

const ProductsTable = () => {
    const { products } = useSelector((state) => ({ ...state.product }));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allProduct())
    }, [dispatch])
    return (
        <>
            {(() => {
                if (products.length > 0) {
                    return <div className="col-span-2 overflow-x-auto relative shadow-md sm:rounded-lg mt-14 ">
                        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-4 px-6">
                                        Image
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Name
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
                                {products.map(item => {
                                    return (
                                        <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="p-4 w-32">
                                                <img src={item.img} alt='item' className='w-16 h-16 mx-auto' />
                                            </td>
                                            <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                                <Link to='/dashboard/product'
                                                    state={{ id: item._id }}

                                                >{item.name}</Link>
                                            </td>
                                            <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                                {item.price}
                                            </td>

                                            <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                                {item.createdAt}
                                            </td>
                                            <td className="py-4 px-6">
                                                <button
                                                    onClick={() => { dispatch(remove({ id: item._id })) }}
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline">
                                                    <FontAwesomeIcon icon={faTrashCan} className='w-6 h-6 ml-4' />
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                } else {
                    return <div className='flex justify-center md:p-24 mt-12 mx-auto md:text-4xl xs:text-lg font-bold text-gray-500'>Sorry not found any product</div>
                }
            })()}
        </>
    )
}
export default ProductsTable