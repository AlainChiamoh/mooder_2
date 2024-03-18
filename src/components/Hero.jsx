import React from 'react'
import HeroImage from '../assets/images/hero.jpg';
import Search from './Search';
import Button from './Button';
const Hero = () => {
  return (
    <div className='relative'>
        
        <img src={HeroImage} className='w-full h-auto'/>
        <div className='absolute inset-0 flex flex-col'>
            <div className='w-full flex justify-end gap-2 py-2 px-4 md:py-4 md:px-6'>
                <Button className='text-white text-[12px] border-[1px] md:px-6 md:py-3'>Sell With Us</Button>
                <Button className='text-white bg-green-500 text-[12px] py-2 font-bold'>Login</Button>     
            </div>

            {/* Text for image */}
        <div className='pt-8 flex-1  text-[#fff] z-1 flex flex-col xs:pt-8 text-[90%] items-center  justify-start w-full'>
            <div className='pb-4'>
            <h3 className='text-center font-bold'>
                Lorem ipsum dolor sit amet consectetur  
            </h3>
            <p className='text-center font-light'>
                Lorem ipsum dolor sit amet consectetur 
            </p>
            </div>
            <Search/>
        </div>
        </div>
        
        

    </div>
  )
}

export default Hero