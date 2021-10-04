import './Tooltip.css';
const Tooltip = (props:any) => {
    return (
        <a id='tooltip' onClick={props.LookUp} title='Look it up in the dictionary'>
            Go
        </a>
    )
}
export default Tooltip;