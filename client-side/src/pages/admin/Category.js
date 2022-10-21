import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import CategoryInf from '../../component/adminComponent/CategoryInf'
import UpdateCategory from '../../component/adminComponent/UpdateCategory'
import { getCategory } from '../../redux/reducers/categorySlice'

const Category = () => {

  const { oneCategory } = useSelector((state) => ({ ...state.category }));

  const location = useLocation()
  const { id } = location.state

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory({ id }))
  }, [dispatch, id])
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
      <CategoryInf data={oneCategory} />
      <UpdateCategory data={oneCategory} />
    </div>
  )
}

export default Category