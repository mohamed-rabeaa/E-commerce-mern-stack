import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../../redux/reducers/categorySlice'

const CategoryInf = (props) => {
    const { data } = props
    const dispatch = useDispatch();

    return (
        <div className='col-span-2 mx-auto mt-20 bg-white shadow-md rounded-md'>
            <div className='flex p-8 md:space-x-80'>
                <div className='flex-1 max-w-sm' >
                    <h2 className='text-2xl font-bold text-gray-500'>
                        {data.name}
                    </h2>
                    <p className='mt-6 text-black '>
                        {data.desc}
                    </p>
                    
                    <h2 className='text-2xl font-bold text-gray-500'>
                        {data.createdAt}
                    </h2>
                    <div className='flex mt-6'>
                        <button onClick={() => { dispatch(remove({ id: data._id })) }} className='text-xl text-green-500 border-2 rounded-md px-2 sm:px-6'>
                            Delete
                            <FontAwesomeIcon icon={faTrashCan} className='w-6 h-6 ml-4' />
                        </button>
                    </div>
                </div>
                <div className='flex-1 max-w-xl max-h-xl '>
                    <img src={data.img} alt='item' className=' mx-auto' />
                </div>
            </div>
        </div>
    )
}
export default CategoryInf