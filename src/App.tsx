import React, { useState } from 'react';
import {ResultObj} from './components/Interfaces/Interfaces'
import './App.css';
import {Result} from './components/Result/Result';
import Spinner from './components/Spinner/Spinner';
// var Owlbot = require('owlbot-js');
// var client = Owlbot('03bc50f819a9f19c4d4946a3e0813f87179dc74f');
const App = ()=> {
  const[input,setInput] = useState<string>('');
  const[result,setResult] = useState<ResultObj[]>([]);
  const[getData,setGetData] = useState<boolean>(false);
  const[loading,setLoading] = useState<boolean>(false);
  const[noResult,setNoResult] = useState<boolean>(false);
  const[warnInput,setWarnInput] = useState<boolean>(false);

  const changeHandle = (e: React.ChangeEvent<HTMLInputElement>):void=>{
    setInput(e.target.value);
    setWarnInput(false);     
  } 
  const lookUp = ():void=>{
    if(input==='') return setWarnInput(true);
    setLoading(true);
    setGetData(false);
    setNoResult(false);
    fetch(`https://owlbot.info/api/v4/dictionary/${input}`, {
      headers: {
        Authorization: "Token b1921c221f0ed059edc2e3af4c2613885e1c80fe"
      }
      })
      .then(res => {          
          return res.json();
        } 
      )
      .then((result:ResultObj[]):void=> { //:(ResultObj[]|Result404[])
        console.log(result);
        setInput('') 
        setResult(result)
        setGetData(true)
        setLoading(false)
        setNoResult(false)
      if(result.length === 1){
        setInput('') 
        setGetData(false)
        setLoading(false)
        setNoResult(true)
      }
      }
      )
  } 
    return ( 
      <div className = 'App'>
        <div className = 'header'>
          <input 
          type = "text" value = {input} 
          onKeyUp = {(event):void=>{if(event.keyCode === 13){lookUp()}}} 
          onChange = {changeHandle} placeholder = 'Enter a word ...'/>
          <button onClick = {lookUp}>Go</button>
          {warnInput?<p className = 'warnInput'> *Please enter a word.</p>:null}
        </div>
        <Spinner 
          loading = {loading}
          getData = {getData}
          input = {input}
          noResult = {noResult}
        />
        <Result
          getData = {getData}
          result = {result}
        />
      </div>
     );
}
export default App;
