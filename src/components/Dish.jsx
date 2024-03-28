import React from 'react'

const Dish = ({dish}) => {
  /*return (
    <div>{dish.name}</div>
*/

    return (
        <div className='flex flex-col justify-center items-center gap-1'>
          <div className='w-5 h-5 rounded-full overflow-hidden md:w-10 md:h-10'>
          <img src={dish?.dishes} className=' object-cover w-full h-full'/>
          </div>
          <p className='text-[10px] font-bold'>
            {dish.name}
          </p>
        </div>
      )
  
}

export default Dish