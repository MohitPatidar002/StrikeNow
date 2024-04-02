import React from 'react'
import image1 from '../../assests/Footer-Images/Strike-Inc-5000-Award.webp'
import image2 from '../../assests/Footer-Images/Strike-Goldman-Sachs-Award.webp'
import image3 from '../../assests/Footer-Images/Strike-Utah-100-Award.webp'
import image4 from '../../assests/Footer-Images/Strike-EO-Badge.webp'
import Logo from '../../assests/Footer-Images/2022-08-19.jpg'
import google from '../../assests/Footer-Images/powered_by_google_on_white.webp'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='w-11/12 mx-auto flex flex-col lg:flex-row justify-between items-start my-20 gap-6'>

        <div className='w-full lg:w-[50%] flex flex-col gap-6'>
            <p>Strike Visuals is family-owned and operated in Centerville, Utah. Just north of Salt Lake City. Strike was founded to enrich and elevate the lives of the people that work here and the clients we serve. We serve our clients by creating outdoor event marketing and trade show masterpieces.</p>

            <p className='text-2xl'>Unlock Special Promotions and Exclusive Event Marketing Tips! Join Our Newsletter!</p>

            <p>Subscribe today to get exclusive product and event tips and tricks. Also, be the first to know about our special promotions, discounts, and limited-time offers. Don’t miss out on the savings!</p>

            <div className='flex items-center justify-start'>
                <input 
                    type='email'
                    placeholder='Enter Your Email Address'
                    className='border-2 outline-none w-[70%] pl-4 py-2 rounded-md'
                />
                <button className='bg-[#c12354] py-2 px-2 lg:px-4 text-white rounded-md font-semibold'>Notify Me!</button>
            </div>

            <div className='flex flex-col gap-3'>
                <p className='text-lg'>Groups & Associations</p>
                <div className='flex flex-col lg:flex-row gap-3 '>
                    <div className='flex gap-3 w-[100px] h-[100px]'>
                        <img src={image1} />
                        <img src={image2}/>
                    </div>
                    <div className='flex gap-3 w-[100px] h-[100px]'>
                        <img src={image3}/>
                        <img src={image4}/>
                    </div>
                    
                    
                </div>
            </div>
        </div>

        <div className='w-full lg:w-[15%] flex flex-col text-left lg:text-center gap-4'>
            <h2 className='font-semibold text-[#3c3c3c] text-lg'>Helpful Links</h2>
            <div className='flex flex-col gap-3'>
            <Link to="" className='hover:text-[#5e1982] hover:underline transition-all duration-200'>
                <p>About</p>
            </Link>
            <Link to="" className='hover:text-[#5e1982] hover:underline transition-all duration-200'>
                <p>Blog</p>
            </Link>
            <Link to="" className='hover:text-[#5e1982] hover:underline transition-all duration-200'>
                <p>Contact</p>
            </Link>
            <Link to="" className='hover:text-[#5e1982] hover:underline transition-all duration-200'>
                <p>FAQs</p>
            </Link>
            <Link to="" className='hover:text-[#5e1982] hover:underline transition-all duration-200'>
                <p>Resellers</p>
            </Link>
            <Link to="" className='hover:text-[#5e1982] hover:underline transition-all duration-200'>
                <p>Catalog</p>
            </Link>
            <Link to="" className='hover:text-[#5e1982] hover:underline transition-all duration-200'>
                <p>Testimonials</p>
            </Link>
            <Link to="" className='hover:text-[#5e1982] hover:underline transition-all duration-200'>
                <p>Warranty</p>
            </Link>
            <Link to="" className='text-[#d94599] hover:text-[#5e1982] hover:underline transition-all duration-200'>
                <p>Investory Specials</p>
            </Link>
            </div>
        </div>

        <div className='w-full lg:w-[35%] flex flex-col gap-4'>
            <h2 className='font-semibold text-[#3c3c3c] text-lg'>Location</h2>

            <div className='flex flex-col gap-1'>
                <p className='font-semibold text-[#3c3c3c]'>Address:</p>
                <p>1040 N 950 W Suite 500, Centerville, UT 84014, US</p>
                <p><span className='font-semibold text-[#3c3c3c]'>Hours: </span> Mon to Fri 8:00 AM—5:00 PM</p>
                <p><span className='font-semibold text-[#3c3c3c]'>Phone: </span> +1 801-872-4055</p>
                <p><span className='font-semibold text-[#3c3c3c]'>Email: </span> info@strikenow.com</p>
            </div>

            <div className='flex gap-3 mt-5'>
                <div >
                    <img src={Logo} loading='lazy' width={60} height={60} className='rounded-full aspect-square'/>
                </div>
                <div>
                    <p className='font-semibold'>Strike Visuals</p>
                    <p className='flex text-[#fb8e28] gap-1 items-center text-lg'>
                        <p className='font-semibold text-xl pr-1'>4.9</p>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStarHalfAlt/>
                    </p>
                    <p className='text-sm'>Based on 218 reviews</p>
                    <p><img src={google} width={150} height={150}/></p>
                </div>
            </div>
        </div>

      </div>


      <div className='bg-black '>
        <div className='w-11/12 mx-auto flex flex-col-reverse gap-4 lg:flex-row justify-between items-center py-3 text-white'>
            <div>© 2012 - 2024 Strike Visuals LLC | All Rights Reserved.</div>
            <div>Privacy Policy | Terms and Conditions</div>

            <div className='flex justify-center items-center gap-2'>
                <Link to="">
                    <FaFacebookF className='bg-white text-black text-3xl p-2 rounded-full'/>
                </Link>
                <Link to="">
                    <FaTwitter className='bg-white text-black text-3xl p-2 rounded-full'/>
                </Link>
                <Link to="">
                    <FaYoutube className='bg-white text-black text-3xl p-2 rounded-full'/>
                </Link>
                <Link to="">
                    <FaLinkedinIn className='bg-white text-black text-3xl p-2 rounded-full'/>
                </Link>
                <Link to="">
                    <FaInstagram className='bg-white text-black text-3xl p-2 rounded-full'/>
                </Link>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
