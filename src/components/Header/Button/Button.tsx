const Button = (props:any) => {
    return(
        <button onClick = {props.LookUp} title='Look it up'>
            <p className='button_text'>Go</p>
        </button>
    )
}
export default Button