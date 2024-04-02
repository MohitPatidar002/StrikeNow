import React, { useRef, useState } from 'react'
import { Link, matchPath, useLocation} from 'react-router-dom'
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import UseClickOutside from '../Components/hook/UseClickOutside';

const SubNavbar = () => {

    const [open, setOpen] = useState(false);
    const ref = useRef(null)

    UseClickOutside(ref, () => setOpen(false))

    const location = useLocation();
    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname)
    }


  return (
    <div className='w-[100vw] h-[35px]  bg-black flex items-center justify-center fixed z-20'>
      <div className='w-11/12 mx-auto relative flex justify-between items-center'>
        {/* Left part */}
        <div ref={ref} className={`${open ? 'absolute top-[100%] p-5 transition-all duration-200 -left-[6%] flex flex-col gap-3  bg-black text-white' : "hidden lg:flex text-white gap-3 text-sm"}`}>
            <Link to="/about" className='hover:text-[#5e1982] transition-all duration-200'>
                <p className={`${matchRoute("/about") ? "text-yellow-400" : "text-white"}`}>About</p>
            </Link>
            <Link to="/blog" className='hover:text-[#5e1982] transition-all duration-200'>
                <p className={`${matchRoute("/blog") ? "text-yellow-400" : "text-white"}`}>Blog</p>
            </Link>
            <Link to="/contact" className='hover:text-[#5e1982] transition-all duration-200'>
                <p className={`${matchRoute("/contact") ? "text-yellow-400" : "text-white"}`}>Contact</p>
            </Link>
            <Link to="faq" className='hover:text-[#5e1982] transition-all duration-200'>
                <p className={`${matchRoute("/faq") ? "text-yellow-400" : "text-white"}`}>FAQs</p>
            </Link>
            <Link to="/resellers" className='hover:text-[#5e1982] transition-all duration-200'>
                <p className={`${matchRoute("/resellers") ? "text-yellow-400" : "text-white"}`}>Resellers</p>
            </Link>
            <Link to="/catalog" className='hover:text-[#5e1982] transition-all duration-200'>
                <p className={`${matchRoute("/catalog") ? "text-yellow-400" : "text-white"}`}>Catalog</p>
            </Link>
            <Link to="/testimonial" className='hover:text-[#5e1982] transition-all duration-200'>
                <p className={`${matchRoute("/testimonial") ? "text-yellow-400" : "text-white"}`}>Testimonials</p>
            </Link>
            <Link to="/warrenty" className='hover:text-[#5e1982] transition-all duration-200'>
                <p className={`${matchRoute("/warrenty") ? "text-yellow-400" : "text-white"}`}>Warranty</p>
            </Link>
            <Link to="/investory-specials" className='text-[#d94599] hover:text-[#5e1982] transition-all duration-200'>
                <p className={`${matchRoute("/investory-specials") ? "text-yellow-400" : "text-white"}`}>Investory Specials</p>
            </Link>
        </div>

        <div onClick={() => setOpen(!open)} className='flex flex-col gap-1 lg:hidden'>
            <div className='w-8 h-[2px]  bg-white'></div>
            <div className='w-8 h-[2px]  bg-white'></div>
            <div className='w-8 h-[2px]  bg-white'></div>
        </div>

        {/* right part */}
        <div className='flex gap-2 text-white items-center text-sm'>
            <div className='flex gap-2 items-center cursor-pointer hover:text-[#5e1982] transition-all duration-200'>
                <FaPhone/>
                (801) 872-4055
            </div>
            <div>|</div>
            <div className='flex gap-2 items-center cursor-pointer hover:text-[#5e1982] transition-all duration-200'>
                <MdOutlineEmail/>
                info@strikenow.com
            </div>
        </div>
      </div>
    </div>
  )
}

export default SubNavbar



