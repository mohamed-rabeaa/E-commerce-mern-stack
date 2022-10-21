import React from 'react'
import ProductInfo from '../../component/adminComponent/UserInfo'
import UpdateProduct from '../../component/adminComponent/UpdateUser'

const User = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3'>
      <ProductInfo />
      <UpdateProduct />
    </div>
  )
}

export default User