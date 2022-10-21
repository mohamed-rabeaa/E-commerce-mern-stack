import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import ProductInf from '../../component/adminComponent/ProductInfo'
import UpdateProduct from '../../component/adminComponent/UpdateProduct'
import { getProduct } from '../../redux/reducers/productSlice'

const Product = () => {
  
  const { product } = useSelector((state) => ({ ...state.product }));
  const location = useLocation()
  const { id } = location.state
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct({ id }))
  }, [dispatch, id])

  let PageContent;

  if (Object.keys(product).length > 0) {
    PageContent = <div className='grid grid-cols-1 md:grid-cols-3'>
      <ProductInf data={product} />
      <UpdateProduct data={product} />
    </div>

  } else {
    PageContent = <h1>sorry no product found</h1>
  }
  
  return (
    <>
      {PageContent}
    </>
  )
}
export default Product