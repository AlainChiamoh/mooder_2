import React from 'react'

const Flag = ({flag}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-1'>
      <div className='w-5 h-5 rounded-full overflow-hidden'>
      <img src={flag?.image} width={30} height={30} className=' object-cover w-full h-full'/>
      </div>
      <p className='text-[10px] font-bold'>
        {flag?.country}
      </p>
    </div>
  )
}

export default Flag