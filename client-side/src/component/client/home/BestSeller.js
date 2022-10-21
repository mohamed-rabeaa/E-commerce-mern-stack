import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { addItem } from '../../../redux/reducers/cartSlice';
import { searchProduct } from "../../../redux/reducers/productSlice";
import ServerMessage from '.././ServerMessage'

const BestSellerProduct = () => {

    const { error, resMsg, bestSellerItems } = useSelector((state) => ({ ...state.product }));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchProduct({ searchKey: 'bestSeller' }))
    }, [])

    return (
        <div className=' bg-white shadow-md p-2 mx-6 mt-20'>
            <ServerMessage resMsg={resMsg} error={error} />
            <p className='pl-4 py-2 text-2xl bg-white shadow-md font-bold text-slate-500'>
                Best Seller
            </p>
            <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4 mt-10 justify-items-center'>
                {bestSellerItems.length > 0 &&
                    bestSellerItems.map(item => {
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
                                    <div className='flex mt-4'>
                                        <button onClick={() => { dispatch(addItem({ id: item._id })) }} className='text-md text-green-500 border-2 rounded-md px-2 sm:px-6'>
                                            Add to cart
                                        </button>
                                        <FontAwesomeIcon icon={faHeart} className='w-6 h-6 ml-4' />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BestSellerProduct