import './Spinner.css'
// import {ResultObj} from '../Interfaces/Interfaces'
// type Props = {
//     loading: boolean;
//     getData: boolean;
//     noResult: boolean;
//     input: string;
//     err:boolean;
// }  
// instead of props as a parameter  we can write : {loading, getData, input}
const Spinner : React.FC = () => {
    return ( 
          <div className="loader">
            Loading...
          </div>         
    );
}

export default Spinner;
