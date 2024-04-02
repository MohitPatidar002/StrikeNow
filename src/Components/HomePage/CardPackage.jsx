import React from 'react'

const CardPackage = ({image, text}) => {
  return (
    <div>
      <div className='flex flex-col gap-4 justify-center items-center hover:scale-105 transition-all duration-200'>  
        {/* image */}
        <div className='border-2 p-5 rounded-lg w-[350px] h-[350px] flex items-center justify-center bg-white'>
            <img src={image} loading='lazy' alt="Card Image"/>
        </div>

        {/* text */}
        <div className='text-2xl text-black lg:text-white'>{text}</div>
        

      </div>
    </div>
  )
}

export default CardPackage
