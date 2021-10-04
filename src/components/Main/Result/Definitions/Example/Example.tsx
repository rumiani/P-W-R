import './Example.css'
import parse from 'html-react-parser';
const Example = (props:any) => {
    return (
        <div className = 'example'> 
            <span className='example_row'>Example</span>
            <span className='example_result'><strong>-</strong> {parse(props.example)}</span>
        </div>
    )
}
export default Example;
