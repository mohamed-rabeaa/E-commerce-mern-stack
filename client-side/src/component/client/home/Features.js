import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast, faClock, faArrowsRotate } from '@fortawesome/free-solid-svg-icons'


const Features = () => {
    return (
        <div className='container box-border my-14 px-2 lg:px-8 justify-items-center mx-auto'>
            <p className='text-2xl w-80 mx-auto font-bold text-slate-500 text-center px-8 py-4 border-2 rounded-full hover:bg-gray-300'>
                Our features
            </p>
            <div className='justify-items-center mx-auto grid sm:grid-cols-3 xs:grid-cols-1 gap-12 mt-10'>
                <div className='flex items-center'>
                    <div className='pr-5'>
                        <FontAwesomeIcon icon={faTruckFast} className="text-green-500 w-24 h-24" aria-hidden="true" />
                    </div>
                    <div className=''>
                        <p className='text-lg font-medium text-gray-400 text-center'>
                            delevery in 24 hour in any place
                        </p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='pr-5'>
                        <FontAwesomeIcon icon={faArrowsRotate} className="text-green-500 w-24 h-24" aria-hidden="true" />
                    </div>
                    <div className=''>
                        <p className='text-lg font-medium text-gray-400 text-center'>
                            retrieval in 14 day in all product
                        </p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='pr-5'>
                        <FontAwesomeIcon icon={faClock} className="text-green-500 w-24 h-24" aria-hidden="true" />
                    </div>
                    <div className=''>
                        <p className='text-lg font-medium text-gray-400 text-center'>
                            open 24 hours in 7 day
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Features