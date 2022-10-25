import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { allProduct } from "../.././redux/reducers/productSlice";
import CategoryInf from "../.././component/client/CategoryInf";
import CategoryProduct from "../.././component/client/CategoryProduct";
import { useLocation } from 'react-router-dom'

const Category = () => {

  const location = useLocation()
  const { category } = location.state
  const { products } = useSelector((state) => ({ ...state.product }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length <= 0) {
      dispatch(allProduct())
    }
  }, [])

  let categoryItems = []

  categoryItems = products.filter(item => item.category === category._id)

  return (
    <>
      <CategoryInf data={category} />
      <CategoryProduct items={categoryItems} title={category.name} />
    </>
  )
}
export default Category