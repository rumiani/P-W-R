import {ResultObj} from '../../../Interfaces/Interfaces';

const url = 'https://owlbot.info/api/v4/dictionary/'
const Token = "Token b1921c221f0ed059edc2e3af4c2613885e1c80fe"

const LookUp = (props:any)=>{
    if(props.input==='') return document.querySelector('input')!.focus();
    props.setWelcome(false);
    props.setLoading(true);
    props.setGetData(false)
    props.setNoResult(false);
    props.setErr(false);
    //Here I fetch the data from the API /////////////////
      fetch(url+props.input, {
        headers: {
          Authorization: Token
        }
      })
      .then(res =>  res.json()
        )
        .then((result:ResultObj[]):void=> {
        props.setResult(result)        
        props.setGetData(true)
        props.setLoading(false)
        props.setNoResult(false)
      if(result[0]?.message === 'No definition :('){
        props.setGetData(false)
        props.setLoading(false)
        props.setNoResult(true)
      }
    }
    )
    .catch(()=>{
      props.setErr(true)
      props.setGetData(false)
      props.setLoading(false)
      props.setNoResult(false)
      props.setErr(true)
    })
  } 

export default LookUp;