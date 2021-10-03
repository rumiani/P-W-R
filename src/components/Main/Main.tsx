import { connect } from "react-redux";
import Error from "./Error/Error";
import No_Result from "./No_Result/No_Result";
import Result from "./Result/Result";
import Spinner from "./Spinner/Spinner";
import './Main.css'
import Welcome from "./Welcome/Welcome";
const Main = (props:any) => {
    return (
            <div className='main'>
                {props.welcome && <Welcome/>}
                {props.getData && <Result result={props.result}/>}
                {props.loading && <Spinner/>}
                {props.noResult && <No_Result input={props.input}/>}
                {props.err && <Error/>}
            </div>
    )
}
const mapStateToProps = (state:any) => {  
    return {
        welcome: state.welcome,
        result: state.result,
        loading:state.loading,
        getData : state.getData,
        input : state.input,
        noResult:state.noResult,
        err:state.err,
    }
  }
  const mapDispatchProps = (dispatch:any) => {
    return {
      setWelcome : (welcome:boolean) => dispatch({type:'WELCOME',welcome}),
      setGetData : (getData:boolean) => dispatch({type:'GET_DATA',getData}),
      setInput : (input:string) => dispatch({type:'INPUT',input}),
      setLoading : (loading:boolean) => dispatch({type:'LOADING',loading}),
      setNoResult : (noResult:boolean) => dispatch({type:'NO_RESULT',noResult}),
      setErr : (err:boolean) => dispatch({type:'ERR',err})
    }
  }
export default connect(mapStateToProps, mapDispatchProps)(Main);