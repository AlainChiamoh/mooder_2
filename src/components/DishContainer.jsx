
import dishes from '../constants/dishes'
import Button from './Button'
import Dish from './Dish'

const DishContainer = () => {
  return (
    <section className='mt-5 px-2 md:px-6'> 
        <div className='flex justify-between'>
            <div className='font-semibold'>What's on your mind</div>
            <Button className='text-[#dfdf23] border-[2px] border-[#dfdf23] rounded-md'>see more</Button>
        </div>
        <div className='flex gap-4 py-1 overflow-x-scroll w-full md:py-2 no-scrollbar'>
        {dishes.map((elt)=>(<Dish dish={elt}/>))}
        
        </div>
         
         
    </section>
  )
}

export default DishContainer