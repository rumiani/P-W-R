import './Result.css'
import Definitions from './Definitions/Definitions';
import Pronunciation from './Pronunciation/Pronunciation';
import Tooltip from './Tooltip/Tooltip';
import cliclLookub from './CliclLookub/CliclLookub';
import { connect } from 'react-redux';
import LookUp from '../../Header/LookUp/LookUp';

const Result : React.FC = (props:any) => {
    return ( 
            <div className = 'result' data-testid="result" onMouseUp={(event)=>cliclLookub(props,event)}>
                <Tooltip  LookUp={()=>LookUp(props)}/>
                {props.result.pronunciation &&<Pronunciation/>}
                <Definitions/>
            </div>
     );
}
const mapStateToProps = (state:any) => {  
    return {
        result: state.result,
        welcome: state.welcome,
        input : state.input,
        loading:state.loading,
        getData : state.getData,
        noResult:state.noResult,
        err:state.err,
    }
  }
  const mapDispatchProps = (dispatch:any) => {
    return {
      setWelcome : (welcome:boolean) => dispatch({type:'WELCOME',welcome}),
      setGetData : (getData:boolean) => dispatch({type:'GET_DATA',getData}),
      setInput : (input:string) => dispatch({type:'INPUT',input}),
      setResult : (result:string) =>dispatch({type:'RESULT',result}),
      setLoading : (loading:boolean) => dispatch({type:'LOADING',loading}),
      setNoResult : (noResult:boolean) => dispatch({type:'NO_RESULT',noResult}),
      setErr : (err:boolean) => dispatch({type:'ERR',err})
    }
  }
export default connect(mapStateToProps, mapDispatchProps)(Result);
  
