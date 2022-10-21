import React from 'react'

const CategoryInf = (props) => {

    const category = props.data

    return (
        <div className='col-span-2 mx-auto mt-20 bg-white shadow-md rounded-md'>
            <div className='flex p-8 md:space-x-80'>

                <div className='flex-1 max-w-sm' >
                    <h2 className='text-2xl font-bold text-gray-500'>
                        {category.name}
                    </h2>

                    <p className='mt-6 text-black '>
                        {category.desc}
                    </p>

                    <h2 className='text-2xl font-bold text-gray-500'>
                        {category.createdAt}
                    </h2>

                </div>
                <div className='flex-1 max-w-xl max-h-xl '>
                    <img src={category.img} alt='item' className=' mx-auto' />
                </div>
            </div>
        </div>
    )
}
export default CategoryInf