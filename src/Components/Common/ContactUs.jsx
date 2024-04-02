import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div>
      <div className='w-11/12 mx-auto flex flex-col gap-10 lg:flex-row justify-between items-center'>
        {/* text */}
        <div className='text-white lg:w-[50%] flex flex-col gap-5'>
            <h2 className='text-3xl font-semibold'>Ready to Create An Unforgettable Event Experience?</h2>

            <p>Fill out our online form, and one of our dedicated product specialists will reach out ASAP.</p>

            <p>Whether you would like to start your ordering process or have questions about our products, pricing, and packages, we’re glad to assist you with any questions you may have. Contact us today!</p>

            <p>For warranty concerns, please visit our warranty page.</p>

            <div className='flex gap-2 items-center text-lg mt-3'>
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

        {/* Form */}
        <div className='bg-white rounded-lg px-5 py-9 w-full lg:w-[50%]'>
            <h2 className='text-4xl font-semibold text-[#3c3c3c] text-center'>Contact Us Today!</h2>

            <form className='mt-8 flex flex-col gap-8'>
                <div className='flex flex-col lg:flex-row gap-6'>
                    <input
                        type='text'
                        value={null}
                        placeholder='First Name *'
                        className='border-b-2 outline-none lg:w-[50%]'
                        required
                    />
                     <input
                        type='text'
                        value={null}
                        placeholder='Last Name *'
                        className='border-b-2 outline-none lg:w-[50%]'
                        required
                    />
                </div>

                <div className='flex flex-col lg:flex-row gap-6'>
                    <input
                        type='email'
                        value={null}
                        placeholder='Email Address *'
                        className='border-b-2 outline-none lg:w-[50%]'
                        required
                    />
                     <input
                        type='text'
                        value={null}
                        placeholder='Company Name '
                        className='border-b-2 outline-none lg:w-[50%]'
                        
                    />
                </div>

                <div className='flex flex-col lg:flex-row gap-6'>
                    <input
                        type='text'
                        value={null}
                        placeholder='Contact Number *'
                        className='border-b-2 outline-none lg:w-[50%]'
                        required
                    />
                    <select className='border-b-2 outline-none lg:w-[50%]' placeholder="Select Industry" required>
                        <option value="" disabled selected>Select an Industry</option>
                        <option>Agriculture</option>
                        <option>Automotive</option>
                        <option>Beer/Brewery</option>
                        <option>Construction</option>
                        <option>Cycling</option>
                        <option>Education</option>
                        <option>Entertainment</option>
                        <option>Food</option>
                        <option>Gaming</option>
                        <option>Running</option>
                        <option>Sports</option>
                        <option>Tech</option>
                        <option>Water Sports</option>
                        <option>Outdoors</option>
                    </select>
                </div>

                <div>
                    <textarea
                        type='text'
                        value={null}
                        placeholder='How Can We Help? *'
                        className='border-b-2 outline-none w-[100%]'
                        rows={1}
                        cols={20}
                        required
                    />
                </div>

                <div >
                    <input
                        type='text'
                        value={null}
                        placeholder='How Did You Hear About Us *'
                        className='border-b-2 outline-none w-[100%]'
                        required
                    />
                </div>

                <button type='submit' className='text-white font-semibold bg-[#c12354] py-2 rounded-md'>
                    Submit
                </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
