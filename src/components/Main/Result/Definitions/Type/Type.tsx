import './Type.css'
const Type = (props:any) => {
    return (
        <div className = 'type'> 
            <span className='type_row'>Type</span>
            <span className='type_result'>{props.type}</span>
        </div>
    )
}
export default Type;