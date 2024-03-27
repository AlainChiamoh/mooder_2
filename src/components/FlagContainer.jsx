import flags from '../constants/flags';
import Flag from './Flag';

const FlagContainer = () => {
  return (
    <div className='flex gap-4 py-1 overflow-x-scroll w-full'>

      {flags.map((flag)=>(<Flag flag={flag}/>))}

    </div>
  )
}

export default FlagContainer