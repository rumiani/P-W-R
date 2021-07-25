import './Spinner.css'
// import {ResultObj} from '../Interfaces/Interfaces'
type Props = {
    loading: boolean;
    getData: boolean;
    noResult: boolean;
    input: string;
}  
// instead of props as a parameter  we can write : {loading, getData, input}
const Spinner : React.FC <Props> = (props) => {
    return ( 
        <div className='loading'>
            {props.loading?
                <div className="loader">Loading...</div>:null}
        {props.noResult?
            <div className='noResult'>
                Opps! <br />
                Sorry we couln't find any results for the word: "{props.input}". <br />
                <a href={`https://www.ldoceonline.com/dictionary/${props.input}`} target='_blank'>
                    You may look it up here </a>
            </div>
        :null
        }
        </div>
     );
}
 
export default Spinner;