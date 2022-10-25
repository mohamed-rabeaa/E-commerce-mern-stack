import React from 'react'
import { useLocation } from 'react-router-dom'
import { addItem } from '../../redux/reducers/cartSlice'
import { useDispatch } from 'react-redux'

const Product = () => {

    const location = useLocation()
    const { product } = location.state
    const dispatch = useDispatch()

    return (
        <>
            <div className='container max-w-screen-xl mx-auto mt-20  shadow-md rounded-md'>
                <div className='flex p-8 md:space-x-80 mx-2 bg-white'>
                    <div className='flex-1 max-w-sm' >
                        <h2 className='text-2xl font-bold text-gray-500'>
                            {product.name}
                        </h2>
                        <h2 className='text-2xl font-bold text-red-500 mt-6'>
                            ${product.price}
                        </h2>
                        <p className='mt-6 text-black '>
                            {product.desc}
                        </p>
                            <button 
                            onClick={() => { dispatch(addItem({ id: product._id })) }} 
                            className='w-full mt-4 text-md text-slate-800 py-1 border-2 rounded-md px-2 sm:px-6 hover:bg-slate-800 hover:text-white transition ease-in-out delay-150'>
                                Add to cart
                            </button>
                    </div>
                    <div className='flex-1 max-w-xl max-h-xl '>
                        <img src={product.img} alt='item' className=' mx-auto' />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Product