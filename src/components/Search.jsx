import React from 'react';
import Button from './Button';
import {MagnifyingGlassCircleIcon,MapPinIcon} from "@heroicons/react/24/outline";
const Search = () => {
  return (
    <div className='bg-white p-1 flex gap-2 max-sm:gap-1 rounded-sm '>
        <div className='flex items-center gap-2 border-gray-400 border-[1px] px-1 md:px-2 xl:px-4 rounded-sm'>
            <input placeholder='Enter your full address' className='outline-none placeholder:text-xs text-black flex items-center'/>
            <MapPinIcon className='h-3.5 max-sm:h-2 text-gray-600'/>
            
        </div>

        <Button className="bg-green-700 font-semibold text-xs  px-1 md:px-2 xl:px-4 rounded-sm hover:bg-green-400 duration-200">Search</Button>
        
    </div>
    
  )
}

export default Search