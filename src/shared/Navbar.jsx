import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { NavLogo } from "@/components/svgContainer/SvgContainer";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setOpen] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`py-2 sm:py-3 z-[999] fixed w-full ${scrolled ? "bg-black border-b border-[#D19A6E] md:top-0" : "bg-[linear-gradient(180deg,rgba(0,0,0,0.88)_-191.48%,rgba(50,50,50,0)_119.27%)] lg:top-16"}`}>
            <div className="container md:px-7 lg:px-10 xl:px-16 2xl:px-0 flex justify-between items-center">
                {/* Nav Logo */}
                <div>
                    <Link to="/">
                        <NavLogo />
                    </Link>
                </div>
                {/* Nav Links */}
                <ul className="gap-12 items-center text-white hidden lg:flex">
                    <li><NavLink to='/'>About Us</NavLink></li>
                    <li><NavLink to='/'>Home Search</NavLink></li>
                    <li><NavLink to='/'>Sell Properties</NavLink></li>
                    <li><NavLink to='/'>Our Agents</NavLink></li>
                    <li><NavLink to='/'>Join Texas Skyline</NavLink></li>
                    <li><NavLink to='/'>Contact</NavLink></li>
                </ul>

                {/* For mobile devices */}

                {/* Hamburger menu */}
                <button onClick={() => setOpen(!isOpen)} className="lg:hidden w-10 h-9 sm:w-11 sm:h-10 bg-[#B7783F] text-white grid place-items-center rounded">
                    <FaBars className="text-2xl" />
                </button>
                {/* Side Navbar */}
                <div className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden max-h-screen min-h-screen fixed top-0 left-0 px-10 py-12 bg-black/95 duration-500 transition-transform w-[280px] z-[999]`}>
                    <div className="mb-12">
                        <Link to="/">
                            <NavLogo />
                        </Link>
                    </div>
                    <ul className="text-gray-200 flex gap-7 flex-col">
                        <li onClick={() => setOpen(false)}><NavLink to='/'>About Us</NavLink></li>
                        <li onClick={() => setOpen(false)}><NavLink to='/'>Home Search</NavLink></li>
                        <li onClick={() => setOpen(false)}><NavLink to='/'>Sell Properties</NavLink></li>
                        <li onClick={() => setOpen(false)}><NavLink to='/'>Our Agents</NavLink></li>
                        <li onClick={() => setOpen(false)}><NavLink to='/'>Join Texas Skyline</NavLink></li>
                        <li onClick={() => setOpen(false)}><NavLink to='/'>Contact</NavLink></li>
                    </ul>
                    {/* Close Menu */}
                    <button onClick={() => setOpen(false)} className="absolute top-5 right-5 text-2xl text-white">
                        <RxCross2 />
                    </button>
                </div>
                {/* Blur Overlay */}
                <div onClick={() => setOpen(false)} className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden z-50 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
