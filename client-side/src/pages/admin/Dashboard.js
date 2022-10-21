import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "../../component/adminComponent/Navbar"
import Footer from "../../component/wideget/Footer"

export default function Dashboard() {

	return (
		<>
			<Navbar />
			<div className=' bg-gainsboro '>
				<div className='container max-w-screen-xl mx-auto'>
					<Outlet />
				</div>
			</div>
			<Footer />
		</>
	)
} 