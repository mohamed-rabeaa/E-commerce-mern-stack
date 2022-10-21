import React from 'react'

function Container({ children }) {
    return (
        <div className='max-w-screen-xl justify-items-center mx-auto'>
            {children}
        </div>
    )
}

export default Container