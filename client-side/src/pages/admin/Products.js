import React from 'react'
import { Link } from 'react-router-dom'
import ProductsTable from '../../component/adminComponent/ProductsTable'

const Products = () => {
  return (
    <>
      <ProductsTable />
      <Link to='/dashboard/newProduct'>
        <button className='text-white bg-blue-700 w-full my-20 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
          Add New Product
        </button>
      </Link>
    </>
  )
}

export default Products