import './Result.css'
import {ResultObj} from '../../../Interfaces/Interfaces'
import Definitions from './Definitions/Definitions';
import Pronunciation from './Pronunciation/Pronunciation';
type Props = {
    result:ResultObj;
}
const Result : React.FC <Props> = (props) => {
    return ( 
            <div className = 'result' data-testid="result">
                {props.result.pronunciation &&<Pronunciation pronunciation= {props.result.pronunciation}/>}     
                <Definitions result = {props.result}/>
            </div>
     );
}

  
  export default Result;
  
