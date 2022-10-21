import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { dicrease, getCart, increase, remove, removeProduct } from '../../redux/reducers/cartSlice'
import { useEffect } from 'react'

const Tabels = () => {
    const { cart } = useSelector((state) => ({ ...state.cart }));
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCart())
    }, [])

    return (

        <div className="col-span-2 overflow-x-auto relative shadow-md sm:rounded-lg p-8">
            {Object.keys(cart).length === 0 ?
                <div>no product in cart</div> :
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                <span >Image</span>
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Quantity
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Price
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.cartItems.map(item => {
                            return (
                                <tr key={item.product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="p-4 w-32">
                                        <img src={item.product.img} alt='item' className='w-16 h-16' />
                                    </td>
                                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                        {item.product.name}
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="flex items-center space-x-3">
                                            {item.quantity > 1 &&
                                                <button onClick={() => { dispatch(dicrease({ id: item.product._id })) }} className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                                    <span className="sr-only">Quantity button</span>
                                                    <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                                </button>
                                            }
                                            <div>
                                                <span className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center">
                                                    {item.quantity}
                                                </span>
                                            </div>
                                            <button onClick={() => { dispatch(increase({ id: item.product._id })) }} className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                                <span className="sr-only">Quantity button</span>
                                                <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                                            </button>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                        {item.product.price}
                                    </td>
                                    <td className="py-4 px-6">
                                        <button onClick={() => { dispatch(removeProduct({ id: item.product._id })) }} className="font-medium text-red-600 dark:text-red-500 hover:underline">
                                            <FontAwesomeIcon icon={faTrashCan} className='w-6 h-6 ml-4' />
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            }
            <button onClick={() => { dispatch(remove()) }} className='w-full px-auto py-2 text-red-600 border-2 rounded-md border-gray-500 font-bold mt-2 hover:bg-slate-500'>Delete Cart</button>
        </div>
    )
}
export default Tabels