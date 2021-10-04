import { connect } from 'react-redux';
import './Photo.css'
const Photo = (props:any) => {    
    const picUrl:string = `https://www.google.com/search?q=${props.word}&tbm=isch&sxsrf=ALeKk037CG3UAeAPXBwJ5-Vpq_tnYvVj6A%3A1626383806124&source=hp&biw=1366&bih=625&ei=vqXwYNrFBMPQ-gTEspSgBw&oq=lamp&gs_lcp=CgNpbWcQAzIECCMQJzIFCAAQsQMyBQgAELEDMgUIABCxAzIFCAAQsQMyBQgAELEDMgIIADICCAAyBQgAELEDMgUIABCxAzoICAAQsQMQgwFQ_B9YwyZgsytoAHAAeACAAbwCiAHFCZIBBTItMS4zmAEAoAEBqgELZ3dzLXdpei1pbWc&sclient=img&ved=0ahUKEwjanJ7o_-XxAhVDqJ4KHUQZBXQQ4dUDCAc&uact=5`;
 
    return (
        <div className = 'photo'>
            <span className='photo_row'>Image</span>
            <span className='photo_result' title={`See more pictures of ${props.word}`}>
                <a href = {picUrl} target = '_blank' rel="noreferrer" > 
                    <img className='photo'  src={props.url} alt = {'A ' + props.word + ' pic'} />
                </a>
            </span>
        </div>
    )
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
export default connect(mapStateToProps, mapDispatchProps)(Photo);
