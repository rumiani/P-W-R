
const Input = (props:any)=>{
    return (
        <input 
          type = "text"  
          onKeyUp = {(event):void=>event.key === "Enter" && props.LookUp()} //keyCode is Deprecated
          onChange = {()=>props.changeHandle()} placeholder = 'Enter a word ...'
        />
    )
}

export default Input;