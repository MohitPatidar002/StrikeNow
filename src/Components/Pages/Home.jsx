import React from 'react'
import LandingPage from '../HomePage/LandingPage'
import sec1_image from '../../assests/Strike-Inflatable-Tent-Furnitures-768x596.webp'
import ImageSlider from '../Common/ImageSlide'
import Benefits from '../Common/Benefits'
import CardPackage from '../HomePage/CardPackage'
import cardImage1 from '../../assests/Preview-1-300x298.webp'
import cardImage2 from '../../assests/SEG_Noise-v2-300x263.webp'
import cardImage3 from '../../assests/Arch-Package-1-300x298.webp'
import { Link } from 'react-router-dom'
import Cards from '../HomePage/Cards'
import Card1 from '../../assests/HomePage-Cards/Custom-Pop-Up-Optimized.jpg.webp'
import Card2 from '../../assests/HomePage-Cards/Custom-Printed-Flags-Optimized.jpg.webp'
import Card3 from '../../assests/HomePage-Cards/Custom-Table-Covers-Optimized.jpg.webp'
import Card4 from '../../assests/HomePage-Cards/Custom-Back-Wall-Optimized.jpg.webp'
import Card5 from '../../assests/HomePage-Cards/Custom-Inflatable-Arches-Optimized.jpg.webp'
import Card6 from '../../assests/HomePage-Cards//Custom-SEG-Lightbox-Displays-Optimized.jpg.webp'
import Card7 from '../../assests/HomePage-Cards/Custom-Inflatable-Furniture-Optimized.jpg.webp'
import Card8 from '../../assests/HomePage-Cards//Custom-Inflatable-Tents-Optimized.jpg.webp'
import OrderCard from '../HomePage/OrderCard'
import QuoteImage from '../../assests/HomePage-OrderImages/Quote-Icon.svg'
import DesignImage from '../../assests/HomePage-OrderImages/Design-Icon.svg'
import ProductionImage from '../../assests/HomePage-OrderImages/Production-Icon.svg'
import DeliveryImage from '../../assests/HomePage-OrderImages/Delivery-Icon.svg'
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import ContactUs from '../Common/ContactUs'
import Footer from '../Common/Footer'
// import ReviewSlider from '../HomePage/ReviewSlider'

const Home = () => {
  return (
    <div>
      <div >

       {/* Section1 - Landing Page */}
        <div className='w-11/12 mx-auto pt-[130px] lg:pt-[85px]'>
            <LandingPage 
              text="High-Quality " 
              HighlightText = "Custom Trade Show Displays"
              paragraph = "With lifetime warranty"
              image={sec1_image}/>
        </div>

        {/* Slider */}
        <div className='w-11/12 mx-auto'>
          <ImageSlider/>
        </div>

      {/* Benefits */}
        <div className='bg-black'>
          <Benefits/>
        </div>

        {/* Section2 */}
        <div className='relative border-b lg:border-b-0'>
          <div className='w-11/12 mx-auto flex flex-col text-center justify-center items-center gap-6 my-16'>
            <div>
              <h2 className='text-4xl font-bold text-[#3c3c3c]'>Custom Trade Show Event Packages</h2>
            </div>

            <div >
              <p className='lg:w-[70%] mx-auto'>Combat the embarrassment of a bland booth, persevere through every unexpected rainstorm, and electrify your trade show presence with a durable, vibrant display. Whether you’re preparing for your first event, or you’re a seasoned expo veteran looking for a way to spice up your exhibit display, Strike has you covered.
              Literally.</p>
            </div>

            {/* Cards */}
            <div className='flex flex-col gap-10 md:flex-row justify-between items-center w-[100%] mt-10'>
              <Link to="" >
                <CardPackage image={cardImage1} text="Outdoor Event Packages" />
              </Link>

              <Link to="" >
                <CardPackage image={cardImage2} text="Branded Indoor Packages" />
              </Link>

              <Link to="" >
                <CardPackage image={cardImage3} text="Race Event Packages" />
              </Link>
            </div>
          </div>

          {/* bg-blue */}
          <div className='hidden lg:inline absolute bg-[#421f78] h-64 -bottom-4 -z-10 w-[100%]'></div>
        </div>

        {/* Section3 - Cards */}
        <div>
          <div className='w-11/12 mx-auto flex flex-col text-center justify-center items-center gap-6 my-20'>
            <div>
              <h2 className='text-4xl font-bold text-[#3c3c3c]'>Find The Right Solution To Fit Your Needs</h2>
            </div>

            <div>
              <p className='font-semibold text-[#7a7a7a]'>FROM ONE OF A MILLION TO ONE IN A MILLION</p>
              <p className='md:w-[60%] mx-auto text-gray-500'>Choose from a variety of trade show display packages, or mix and match for a more personalized experience, so your brand can stand out and captivate the crowd at your next event.</p>
            </div>

            {/* Cards */}
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 '>
              <Link to=""><Cards image={Card1} text="Custom Pop Up Tents"/></Link>
              <Link to=""><Cards image={Card2} text="Custom Printed Flags"/></Link>
              <Link to=""><Cards image={Card3} text="Custom Table Covers"/></Link>
              <Link to=""><Cards image={Card4} text="Custom Back Wall Displays"/></Link>
              <Link to=""><Cards image={Card5} text="Custom Inflatable Arches"/></Link>
              <Link to=""><Cards image={Card6} text="Custom SEG Lightbox Displays"/></Link>
              <Link to=""><Cards image={Card7} text="Custom Inflatable Furniture"/></Link>
              <Link to=""><Cards image={Card8} text="Custom Inflatable Tents"/></Link>
              
            </div>
          </div>
        </div>

        {/* Section4 - Information */}
        <div className='bg-[#5e1982] py-12'>
          <div className='w-11/12 mx-auto flex flex-col gap-5 justify-center items-center'>
            <h2 className='text-white text-4xl text-center font-semibold'>How Strike Will Help You Stand Out!</h2>

            <div className='flex flex-col lg:flex-row justify-between items-center gap-5 mt-5'>
              <div className='bg-white p-5 rounded-lg flex flex-col gap-3'>
                <h2 className='font-semibold text-lg text-[#3c3c3c]'>Free Design</h2>
                <p>Customize your trade show display for no extra charge, down to the smallest detail, with our dedicated designers.</p>
              </div>

              <div className='bg-white p-5 rounded-lg flex flex-col gap-3'>
                <h2 className='font-semibold text-lg text-[#3c3c3c]'>Quick Turnaround</h2>
                <p>We value your time and guarantee a quick turnaround time for your custom products, from the warehouse to your door.</p>
              </div>

              <div className='bg-white p-5 rounded-lg flex flex-col gap-3'>
                <h2 className='font-semibold text-lg text-[#3c3c3c]'>Best Price</h2>
                <p>We guarantee the best price available, with free custom design, so you can cut costs without sacrificing quality.</p>
              </div>

              <div className='bg-white p-5 rounded-lg flex flex-col gap-3'>
                <h2 className='font-semibold text-lg text-[#3c3c3c]'>Lifetime Warranty</h2>
                <p>All products come with our famous lifetime warranty, so you can focus on meaningful connections instead of hardware issues.</p>
              </div>

              <div className='bg-white p-5 rounded-lg flex flex-col gap-3'>
                <h2 className='font-semibold text-lg text-[#3c3c3c]'>Real Experience</h2>
                <p>Trade shows? Been there, done that. We have the know how to share, so you are set up for success at every exhibition.</p>
              </div>

            </div>
          </div>
        </div>

        {/* Section5 - Benefits of Outdoor Packages */}
        <div className='py-16'>
          <div className='w-11/12 mx-auto flex flex-col md:flex-row gap-10 justify-between items-center'>
            {/* left part */}
            <div className='lg:w-[50%] flex flex-col gap-5'>
              <h2 className='text-4xl font-bold text-[#3c3c3c]'>Benefits Of Outdoor Packages</h2>

              <ul className='flex flex-col gap-3 list-disc ml-3'>
                <li>A high quality, custom trade show display looks professional and instills trust in your customers</li>
                <li>Custom exhibition displays increase visibility and attract more visitors to your booth with eye-catching designs</li>
                <li>Versatile products allow you to arrange your setups to best suit your business needs</li>
                <li>Unique displays create a memorable experience for your customer and keep you fresh in their mind</li>
              </ul>
            </div>

            {/* right part */}
            <div>
            <iframe className='w-full lg:w-[560px] lg:h-[315px]' src="https://www.youtube.com/embed/daQqHA-75c0?si=YvUH7RuL5_bcOI0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>

        {/* Section6 - Steps to Orders */}
        <div className='bg-[#f9fafa] py-16'>
          <div className='w-11/12 mx-auto flex flex-col text-center gap-10'>
            <h2 className='text-4xl font-semibold'><span className='font-bold text-[#d94599] italic '>4-Easy Steps </span> To Order</h2>

            {/* Order cards */}
            <div className='flex flex-col lg:flex-row justify-between items-center gap-3'>
              <OrderCard
                borderColor="#25256d"
                image={QuoteImage}
                heading = "Quote"
                description="One of our outstanding product specialists will assist in answering any questions you may have, calculate costs, and process payment."
              />
              <FaArrowCircleRight className='text-3xl hidden lg:block'/>
              <FaArrowCircleDown className='text-3xl lg:hidden'/>

              <OrderCard
                borderColor="#5e1982"
                image={DesignImage}
                heading = "Design"
                description="Work directly with our design specialists to create your custom design and personalize each product to your brand, free of charge."
              />
              <FaArrowCircleRight className='text-3xl hidden lg:block'/>
              <FaArrowCircleDown className='text-3xl lg:hidden'/>

              <OrderCard
                borderColor="#d94599"
                image={ProductionImage}
                heading = "Production"
                description="Your custom products are then printed, quality checked, packaged, and shipped to you within three business days."
              />
              <FaArrowCircleRight className='text-3xl hidden lg:block'/>
              <FaArrowCircleDown className='text-3xl lg:hidden'/>

              <OrderCard
                borderColor="#c12354"
                image={DeliveryImage}
                heading = "Delivery"
                description="With standard shipping, products arrive at your door within 16 business days, or within 10 business days using rush shipping."
              />
              
            </div>
          </div>
        </div>

        {/* Review Slider */}
        <div>
          <div className='w-11/12 mx-auto flex flex-col justify-center items-center text-center my-20 gap-5'>
            <h2 className='text-4xl font-bold'>What People Say?</h2>
            <p>Don’t take our words for it, read what our customer says about us.</p>
            <div className='text-4xl text-[#f0ad4e] flex gap-1'>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>

            {/* Slider */}
            <div>
              {/* <ReviewSlider/> */}
            </div>
          </div>
        </div>

        {/* Contact Us Form */}
        <div className='bg-[#c12354] py-20'>
          <ContactUs/>
        </div>

        {/* Footer */}
        <div>
          <Footer/>
        </div>

      </div>
    </div>
  )
}

export default Home
