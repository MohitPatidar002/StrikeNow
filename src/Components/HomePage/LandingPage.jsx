import React from 'react'

const LandingPage = ({text, HighlightText, paragraph, image}) => {
  return (
    <div>
      <div className='flex flex-col gap-10 lg:gap-0 md:flex-row items-center justify-between text-black'>
        {/* Text */}
        <div className='md:w-[30%] flex flex-col gap-6'>
            <div className='text-4xl lg:text-5xl tracking-wider leading-16'>
                <div>{text}</div>
                <div className='italic text-[#25256d] font-bold'>{HighlightText}</div>
            </div>
            <div className='text-lg'>{paragraph}</div>
            <div>
                <button className='border-[#25256d] border rounded-md px-7 py-2 
                text-[#25256d] text-lg'>Get a free quote</button>
            </div>
            
        </div>

        {/* Image */}
        <div>
            <img src={image} height={680} width={650}/>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
