import React from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation } from 'react-router-dom'
import { addItem } from '../../redux/reducers/cartSlice'
import { useDispatch } from 'react-redux'

const Product = () => {

    const location = useLocation()
    const { product } = location.state
    const dispatch = useDispatch()

    return (
        <>
            <div className='container max-w-screen-xl mx-auto mt-20 bg-white shadow-md rounded-md'>
                <div className='flex p-8 md:space-x-80'>
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
                        <div className='flex mt-6'>
                            <button onClick={() => { dispatch(addItem({ id: product._id })) }} className='text-xl text-green-500 border-2 rounded-md px-2 sm:px-6'>
                                Add to cart
                            </button>
                            <FontAwesomeIcon icon={faHeart} className='w-6 h-6 ml-4' />
                        </div>
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