import './Main.css'
import { connect } from "react-redux";
import Error from "./Error/Error";
import NoResult from "./NoResult/NoResult";
import Result from "./Result/Result";
import Spinner from "./Spinner/Spinner";
import Welcome from "./Welcome/Welcome";

const Main = (props:any) => {
    return (
            <div className='main' >
                {props.welcome && <Welcome/>}
                {props.getData && <Result/>}
                {props.loading && <Spinner/>}
                {props.noResult && <NoResult/>}
                {props.err && <Error/>}
            </div>
    )
}
const mapStateToProps = (state:any) => {  
    return {
        welcome: state.welcome,
        loading:state.loading,
        getData : state.getData,
        noResult:state.noResult,
        err:state.err
    }
  }
export default connect(mapStateToProps)(Main);