import './Emoji.css'
const Emoji = (props:any) => {
    const picUrl:string = `https://www.google.com/search?q=${props.word}+emoji&tbm=isch&ved=2ahUKEwiSvamVxKrzAhUTjxoKHT5WDDYQ2-cCegQIABAA&oq=umbrella+imoj&gs_lcp=CgNpbWcQARgAMgYIABAKEBg6BAgAEEM6BQgAEIAEOgQIABAYUMsPWKskYPcvaABwAHgAgAHSA4gB6guSAQcyLTQuMC4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=FrBXYZLaOpOear6ssbAD&bih=625&biw=1366`
    return (
        <div className = 'emoji'>
            <span className='emoji_row'>Emoji</span>
            <span className='emoji_result' title={`See more pictures of ${props.word}`}>
                <a  href = {picUrl} target = '_blank' rel="noreferrer"> 
                    {props.emoji}
                </a>
            </span>
        </div>
    )
}

export default Emoji;