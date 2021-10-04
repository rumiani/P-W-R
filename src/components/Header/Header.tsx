import './Header.css';
import { connect } from 'react-redux';
import changeHandle from './ChangeHandle/ChangeHandle';
import Input from './Input/Input';
import Button from './Button/Button';
import LookUp from './LookUp/LookUp';

type Props = {
    getData:boolean;
    input:string;
}
const Header :React.FC <Props>= (props:any)=>{

    return (
        <div className = 'header'>
          <Input 
            changeHandle={()=>changeHandle(props)}
            LookUp={()=>LookUp(props)}
            // input = {props.input}
            />
          <Button 
            LookUp={()=>LookUp(props)}
            />
        </div>
    )

}

const mapStateToProps = (state:any) => {  
    
    return {
        welcome : state.welcome,
        input : state.input,
        getData : state.getData,
        result : state.result,
        loading : state.loading,
        noResult : state.noResult,
        err : state.err,
    }
  }

const mapDispatchProps = (dispatch:any) => {
    return {
        setWelcome : (welcome:string) => dispatch({type:'WELCOME',welcome}),
        setInput : (input:string) => dispatch({type:'INPUT',input}),
        setGetData : (getData:boolean) => dispatch({type:'GET_DATA',getData}),
        setResult : (result:string) =>dispatch({type:'RESULT',result}),
        setLoading : (loading:boolean) => dispatch({type:'LOADING',loading}),
        setNoResult : (noResult:boolean) => dispatch({type:'NO_RESULT',noResult}),
        setErr : (err:boolean) => dispatch({type:'ERR',err})
    }
  }
export default connect(mapStateToProps, mapDispatchProps)(Header);