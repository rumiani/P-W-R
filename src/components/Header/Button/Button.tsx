const Button = (props:any) => {
    return(
        <button className='goBtn' onClick = {props.LookUp} title='Look it up'>
            <p className='goBtn_text'>Go</p>
        </button>
    )
}
export default Button