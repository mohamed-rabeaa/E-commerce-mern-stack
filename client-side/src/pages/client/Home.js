import React from 'react';
import Testimonial from '../../component/wideget/Testimonial';
import Features from '../../component/client/home/Features';
import RecentAdd from '../../component/client/home/RecentAdd';
import BestSeller from '../../component/client/home/BestSeller';
import HomeCategory from '../../component/client/home/HomeCategory';
import Header from '../../component/client/home/Header';
import CategoryProduct from '../../component/client/home/CategoryProduct';

export default function Home() {

	return (
		<>
			<Header />
			
			{/* some feature*/}
			<Features />

			{/* added recent */}
			<RecentAdd />

			{/* best seller */}
			<BestSeller />

			{/* Categories */}
			<HomeCategory />

			{/* phones product */}

			<CategoryProduct categoryName='mens clothes' title='mens clothes' />

			<CategoryProduct categoryName='Bedding device' title='Bedding device' />

			<CategoryProduct categoryName='Phones' title='Phones Product' />

			<CategoryProduct categoryName='Accesories' title='Accesories' />

			<CategoryProduct categoryName='Perfumes' title='Perfumes' />

			<CategoryProduct categoryName='Camera' title='Camera' />

			<CategoryProduct categoryName='Controle device' title='Controle device' />

			<Testimonial />

		</>
	)
}