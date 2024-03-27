import {flags} from '../constants/flags';
import Flag from './Flag';

const FlagContainer = () => {
  return (
    <div>

      {flags.map((flag)=>(<Flag flag={flag}/>))}

    </div>
  )
}

export default FlagContainer