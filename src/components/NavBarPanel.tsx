import { Link } from "react-router-dom";

export default function NavBar() {
    const menu: any = document.querySelector(".mobile-menu");

    function eventListener() {
        menu.classNameList.toggle("hidden");
    }
  return (
    <div>
        <nav className="bg-white shadow-lg">
			<div className="max-w-6xl mx-auto">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<div className="flex items-center py-4 px-2">
							<span className="font-bold  text-2xl">Redux Toolkit</span>
						</div>
						{/* <!-- Primary Navbar items --> */}
						<div className="hidden md:flex items-center space-x-1">
							<Link className="py-4 px-2 text-gray-500 font-semibold" to="/">Products</Link>
						</div>
                        <div className="hidden md:flex items-center space-x-1 flex justify-end">
							<Link className="py-4 px-2 text-gray-500 font-semibold" to="/">Products</Link>
						</div>
					</div>
					{/* <!-- Mobile menu button --> */}
					<div className="md:hidden flex items-center">
						<button className="outline-none mobile-menu-button" onClick={() => eventListener()}>
						<svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
							x-show="!showMenu"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			{/* <!-- mobile menu --> */}
			<div className="hidden mobile-menu">
				<ul className="">
					<li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
					<li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
					<li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
					<li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
				</ul>
			</div>
		</nav>
		{/* <h1 className="text-green-500 text-2xl md:text-3xl lg:text-4xl font-bold p-4">Tailwind Navigation Toolbar</h1> */}
    </div>
  )
}
