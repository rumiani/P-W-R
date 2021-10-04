import { connect } from "react-redux"

const Input = (props:any)=>{
  
    return (
        <input 
          type = "text"  
          onKeyUp = {(event):void=>event.key === "Enter" && props.LookUp()} //keyCode is Deprecated
          onChange = {()=>props.changeHandle()} placeholder = 'Enter a word ...'
          // value={props.input}
        />
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
export default connect(mapStateToProps, mapDispatchProps)(Input);
