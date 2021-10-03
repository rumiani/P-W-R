import './Photo.css'
const Photo = (props:any) => {
    const picUrl:string = `https://www.google.com/search?q=${props.word}&tbm=isch&sxsrf=ALeKk037CG3UAeAPXBwJ5-Vpq_tnYvVj6A%3A1626383806124&source=hp&biw=1366&bih=625&ei=vqXwYNrFBMPQ-gTEspSgBw&oq=lamp&gs_lcp=CgNpbWcQAzIECCMQJzIFCAAQsQMyBQgAELEDMgUIABCxAzIFCAAQsQMyBQgAELEDMgIIADICCAAyBQgAELEDMgUIABCxAzoICAAQsQMQgwFQ_B9YwyZgsytoAHAAeACAAbwCiAHFCZIBBTItMS4zmAEAoAEBqgELZ3dzLXdpei1pbWc&sclient=img&ved=0ahUKEwjanJ7o_-XxAhVDqJ4KHUQZBXQQ4dUDCAc&uact=5`;

 
    return (
        <div className = 'photo'>
            <span className='photo_row'>Image</span>
            <span className='photo_result' title={`See more pictures of ${props.word}`}>
                <a href = {picUrl} target = '_blank' rel="noreferrer" > 
                    <img className='photo'  src={props.photo} alt = {'A ' + props.word + ' pic'} />
                </a>
            </span>
        </div>
    )
}

export default Photo;