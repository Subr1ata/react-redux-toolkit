// import { Link } from "react-router-dom";

import { useState } from "react";

// import YourSvg from '../../redux.svg';
export default function NavBar() {
  let links = [
	{name: "HOME", link:"/"},
	{name: "SERVICE", link:"/"},
	{name: "ABOUT", link:"/"},
	{name: "BLOG'S", link:"/"},
	{name: "CONTACT", link:"/"},
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-[9999999]">
		<div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
			<div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
				<span className="text-3xl text-indigo-600 mr-1 pt-1">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
					<path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
					</svg>
				</span>
				Redux Toolkit
			</div>
			<div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
				{!open ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
			<path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
			</svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
			<path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
			</svg>
			}
			
			</div>
			<ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-10 opacity-100' : 'top-[-490px]'}        md:opacity-100 opacity-0`}>
				{
					links.map((link: any) => (
						<li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
							<a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500">{link.name}</a>
						</li>
					))
				}
				<button className="bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500">
					GET STARTED
				</button>
			</ul>
		</div>
	</div>
  )
}
