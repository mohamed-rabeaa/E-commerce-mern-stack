import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
        <Link to='/dashboard/newCategory'>
          <button className='text-white bg-blue-700 w-full my-20 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
            Add New Category
          </button>
        </Link>
  )
}

export default Button