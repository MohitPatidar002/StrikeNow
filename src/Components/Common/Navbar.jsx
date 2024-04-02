import React, { useRef, useState } from 'react'
import logo from '../../assests/Strike-Visuals-Logo-Black.svg'
import { NavLink, matchPath, useLocation } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import UseClickOutside from '../hook/UseClickOutside';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null)

    UseClickOutside(ref, () => setOpen(false))

    const location = useLocation();
    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname)
    }

  return (
    <div className='w-[100vw] h-[65px] flex items-center justify-center shadow-md fixed mt-[35px] bg-white z-10'>
      <div className='w-11/12 mx-auto flex justify-between items-center relative'>
      {/* log */}
        <div >
            <img src={logo} height={100} width={180}/>
        </div>

        {/* Navbar Links */}
        <div >
            <ul ref={ref} className={`${open ? 'absolute top-[100%] p-5 transition-all duration-200 -right-[6%] flex flex-col gap-3  bg-black text-white' : 'hidden lg:flex space-x-4'}`}>
                <NavLink to="/home" className='hover:text-[#5e1982] transition-all duration-200'>
                    <li className={`${matchRoute("/home") ? "text-[#5e1982]" : ""}`}>Home</li>
                </NavLink>

                <NavLink to="/tent" className='hover:text-[#5e1982] transition-all duration-200'>
                    <li className={`${matchRoute("/tent") ? "text-[#5e1982]" : ""}`}>Tents</li>
                </NavLink>

                <NavLink to="/flag" className='hover:text-[#5e1982] transition-all duration-200'>
                    <li className={`${matchRoute("/flag") ? "text-[#5e1982]" : ""}`}>Flags</li>
                </NavLink>

                <NavLink to="/table-cover" className='hover:text-[#5e1982] transition-all duration-200'>
                    <li className={`${matchRoute("/table-cover") ? "text-[#5e1982]" : ""}`}>Table Covers</li>
                </NavLink>

                <NavLink to="/back-drops" className='hover:text-[#5e1982] transition-all duration-200'>
                    <li className={`${matchRoute("/back-drops") ? "text-[#5e1982]" : ""}`}>Backdrops</li>
                </NavLink>

                <NavLink to="/arches" className='hover:text-[#5e1982] transition-all duration-200'>
                    <li className={`${matchRoute("/arches") ? "text-[#5e1982]" : ""}`}>Arches</li>
                </NavLink>

                <div className='hover:text-[#5e1982] transition-all duration-200 flex gap-2 items-center relative group'>
                    <li>More Products</li>
                    <div >
                        <IoIosArrowDown className='font-sumibold'/>
                    </div>

                    <div className='invisible opacity-0 lg:w-[250px] rounded-md bg-richblack-5 flex flex-col group-hover:visible group-hover:opacity-100 absolute mt-[18rem] transition-all duration-200 right-[50%] translate-x-[50%] z-20 bg-white'>

                        <div className='flex flex-col p-6 gap-3 text-black shadow-lg'>
                            <NavLink to="/banner" className="hover:text-[#5e1982]">Banner</NavLink>
                            <NavLink to="/discount-booth"  className="hover:text-[#5e1982]">Discount Booths</NavLink>
                            <NavLink to="/furniture" className="hover:text-[#5e1982]">Inflatable Furniture</NavLink>
                            <NavLink to="/litebox" className="hover:text-[#5e1982]">Litebox</NavLink>
                            <NavLink to="/outdoor-event-packages" className="hover:text-[#5e1982]">Outdoor Event Packages</NavLink>
                            <NavLink to="/race-event-packages" className="hover:text-[#5e1982]">Race Event Packages</NavLink>
                        </div>
                    </div>
                </div>

                <div className='hover:text-[#5e1982] transition-all duration-200 flex gap-2 items-center relative group'>
                    <li>Resources</li>
                    <div >
                        <IoIosArrowDown className='font-sumibold'/>
                    </div>

                    <div className='invisible opacity-0 lg:w-[250px] rounded-md bg-richblack-5 flex flex-col group-hover:visible group-hover:opacity-100 absolute mt-[13rem] transition-all duration-200 right-[50%] translate-x-[50%] bg-white'>

                        <div className='flex flex-col p-6 gap-3 text-black shadow-lg'>
                            <NavLink to="/artwork-design" className="hover:text-[#5e1982]">Artwork & Design</NavLink>
                            <NavLink to="/product-tutorial" className="hover:text-[#5e1982]">Product Tutorial videos</NavLink>
                            <NavLink to="/strike-product-catalog" className="hover:text-[#5e1982]">Strike Product Catalog</NavLink>
                            <NavLink to="/templates" className="hover:text-[#5e1982]">Templates</NavLink>
                        
                        </div>
                    </div>
                </div>
            </ul>
        </div>
        

        {/* button */}
        <div>
            <button className='bg-[#5e1982] border-[[#5e1982] hidden md:inline px-4 lg:px-7 py-2 font-semibold rounded-lg text-white text-xl hover:bg-white hover:text-black hover:border transition-all duration-200'>Get a free quote today!</button>
        </div>

        <div onClick={() => setOpen(!open)} className='flex flex-col gap-1 lg:hidden'>
            <div className='w-8 h-[2px]  bg-black'></div>
            <div className='w-8 h-[2px]  bg-black'></div>
            <div className='w-8 h-[2px]  bg-black'></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar


