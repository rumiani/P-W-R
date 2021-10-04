import './Definition.css'
import parse from 'html-react-parser';

const Definition = (props:any) => {
    return (
        <div className='definition'>
            <span className='definition_row'> definition</span>
            <span className='definition_result'><strong>-</strong> {parse(props.definition)} </span>
        </div> 
    )
}
export default Definition;