import React from 'react'
import { Link } from 'react-router-dom'
import { addItem } from '../../redux/reducers/cartSlice'
import { useDispatch } from 'react-redux'

const CategoryProduct = (props) => {
    const categoryItems = props.items
    const dispatch = useDispatch()
    return (
        <div className=' bg-white shadow-md p-2 md:mx-6 mt-20'>
            <p className='pl-4 py-2 text-2xl bg-white shadow-md font-bold text-slate-500'>
                {props.title}
            </p>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 mt-10 justify-items-center'>
                {categoryItems.length > 0 &&
                    categoryItems.map(item => {
                        return (

                            <div key={item._id} className='my-4 shadow-md sm:px-6 px-2 py-4 relative'>
                                <Link to="/product" state={{ product: item }}>
                                    <img src={item.img} alt='item' />
                                    <p className='absolute top-0 left-0  pl-2 pr-1 text-md font-bold bg-red-400'>
                                        {item.price}
                                    </p>
                                </Link>
                                <div className='mt-4'>
                                    <p className='text-lg text-slate-700 h-14 overflow-hidden'>
                                        {item.name}
                                    </p>
                                        <button 
                                        onClick={() => { dispatch(addItem({ id: item._id })) }} 
                                        className='w-full mt-4 text-md text-slate-800 py-1 border-2 rounded-md px-2 sm:px-6 hover:bg-slate-800 hover:text-white transition ease-in-out delay-150'>
                                        Add to cart
                                        </button >
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default CategoryProduct