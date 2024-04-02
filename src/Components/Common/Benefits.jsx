import React from 'react'
import customDesign from '../../assests/25-Free-Custom-Design.svg'
import turnAround from '../../assests/25-Fast-Turnaround.svg'
import Guarnatee from '../../assests/25-Best-Price-Guaranteed.svg'
import warrenty from '../../assests/25-Lifetime-Warranty.svg'

const Benefits = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto py-4 flex flex-col lg:flex-row justify-evenly lg:items-center text-white">
          <div className='flex gap-2 justify-start items-center '>
            <img src={customDesign} width={35} height={35}/>
            <p className='font-medium text-lg'>Free Custom Design</p>
          </div>

          <div className='flex gap-2 items-center justify-end'>
            <img src={turnAround} width={35} height={35}/>
            <p className='font-medium text-lg'>Fast Turn Around</p>
          </div>

          <div className='flex gap-2 items-center'>
            <img src={Guarnatee} width={35} height={35}/>
            <p className='font-medium text-lg'>Best Price Guaranteed</p>
          </div>

          <div className='flex gap-2 items-center justify-end'>
            <img src={warrenty} width={35} height={35}/>
            <p className='font-medium text-lg'>Lifetime Warrenty</p>
          </div>
      </div>
    </div>
  )
}

export default Benefits
