import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { allCategory } from "../.././redux/reducers/categorySlice";
import ServerMessage from '.././client/ServerMessage'

const CateSection = () => {
    const { categoryError, categoryResMsg, allCategories } = useSelector((state) => ({ ...state.category }));
    const dispatch = useDispatch();

    useEffect(() => {
        if (allCategories.length <= 0) {
            dispatch(allCategory())
        }
    }, [])

    let subCategory = [];

    if (allCategories.length > 0) {
        subCategory = allCategories.filter(cate => cate.parentId !== "")
    }
    return (

        <div className=' bg-white shadow-md p-2 mx-6 mt-20'>
            <ServerMessage resMsg={categoryResMsg} error={categoryError} />
            <p className='pl-4 py-2 text-2xl bg-white shadow-md font-bold text-slate-500'>
                All Categories
            </p>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-10 justify-items-center'>
                {subCategory.length > 0 &&
                    subCategory.map(cate => {
                        return (
                            <div key={cate._id} className='my-4 mx-2 shadow-md sm:px-6 px-2 py-4 w-5/6'>
                                <Link to="/category" state={{ category: cate }}>

                                    <img src={cate.img} alt='item' className='max-h-32 mx-auto' />

                                    <div className='mt-4 text-center'>
                                        <p className='text-lg text-slate-700 h-14 overflow-hidden'>
                                            {cate.name}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default CateSection