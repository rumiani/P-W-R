import { connect } from 'react-redux'
import './pronunciation.css'
const Pronunciation = (props:any) => {
    return(
        <div className='pronunciation'>
            <span className='pronunciation_row'>
                Pronunciation
            </span> 
            <span className='pronunciation_result'>
                {props.result.pronunciation}
            </span>
        </div>
    )
}
const mapStateToProps = (state:any) => {  
    return {
        result: state.result,
    }
}
 
export default connect(mapStateToProps)(Pronunciation);