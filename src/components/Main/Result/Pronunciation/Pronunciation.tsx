import './pronunciation.css'
const Pronunciation = (props:any) => {
    return(
        <div className='pronunciation'>
            <span className='pronunciation_row'>
                Pronunciation
            </span> 
            <span className='pronunciation_result'>
                {props.pronunciation}
            </span>
        </div>
    )
}
export default Pronunciation;