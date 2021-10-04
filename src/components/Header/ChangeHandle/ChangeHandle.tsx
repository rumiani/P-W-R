const changeHandle = (props:any):void=>{
    props.setInput(document.querySelector('input')?.value)
    props.setNoResult(false);  
} 
export default changeHandle;