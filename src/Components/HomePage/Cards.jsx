import React from 'react'

const Cards = ({image, text}) => {
  return (
    <div>
      <div className='flex flex-col gap-3 justify-center items-center  hover:scale-105 transition-all duration-200'>
        <div className='w-[250px] h-[250px] border-2 rounded-md p-1  flex justify-center items-center'>
            <img src={image} loading='lazy'/>
        </div>
        <div className='text-[#7a7a7a] font-semibold'>{text}</div>
      </div>
    </div>
  )
}

export default Cards
