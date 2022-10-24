import React from 'react'

const Header = () => {
	console.log('header running ....')

	return (
		<header >
			<div>
				<img src="/assets/imgs/banner.jpg" alt='banner' className="bg-cover w-full" />
			</div>
		</header>
	)
}

export default Header