import './Result.css'
import parse from 'html-react-parser';
import {ResultType} from '../Interfaces/Interfaces'
type Props = {
    getData:boolean;
    result:any;
}
export const Result : React.FC <Props> = (props) => {
    const picUrl:string = `https://www.google.com/search?q=${props.result.word}&tbm=isch&sxsrf=ALeKk037CG3UAeAPXBwJ5-Vpq_tnYvVj6A%3A1626383806124&source=hp&biw=1366&bih=625&ei=vqXwYNrFBMPQ-gTEspSgBw&oq=lamp&gs_lcp=CgNpbWcQAzIECCMQJzIFCAAQsQMyBQgAELEDMgUIABCxAzIFCAAQsQMyBQgAELEDMgIIADICCAAyBQgAELEDMgUIABCxAzoICAAQsQMQgwFQ_B9YwyZgsytoAHAAeACAAbwCiAHFCZIBBTItMS4zmAEAoAEBqgELZ3dzLXdpei1pbWc&sclient=img&ved=0ahUKEwjanJ7o_-XxAhVDqJ4KHUQZBXQQ4dUDCAc&uact=5`;
    return ( <div> 
                {props.getData?
                    <div className = 'result'>
                        <div className = 'word'>
                            <strong>{props.result.word}</strong>
                        </div>
                        {props.result.pronunciation !== null?
                            <div className='pronunciation'>
                                <span>Pronunciation</span> 
                                <span>{props.result.pronunciation}</span>
                            </div>
                        :null}     
                        {props.result.definitions?.map((value : ResultType , index : number)=>{
                        return  <div className = 'row' key = {index}>
                                    <div className = 'type'> 
                                        <span >Type</span>
                                        <span>{value.type}</span>
                                    </div>
                                    <div className='definition'>
                                        <span > definition</span>
                                        <span><strong>-</strong> {parse(value.definition)} </span>
                                    </div>                                      
                                    {value.emoji !== null?
                                        <div className = 'emoji'>
                                            <span >Emoji</span>
                                            <span>
                                                <a href = {picUrl} target = '_blank' > 
                                                    {value.emoji}
                                                </a>
                                                <p>* Click on the emoji to see more emojies related to <strong>{props.result.word}</strong></p>
                                            </span>
                                                    
                                        </div>
                                    :null}
                                    {value.example !== null?
                                        <div className = 'example'> 
                                            <span >Example</span>
                                            <span>{parse(value.example)}</span>
                                        </div>
                                    :null }  

                                    {value.image_url !== null?
                                    <div className = 'image'>
                                        <span>Image</span>
                                        <span>
                                            
                                            <a href = {picUrl} target = '_blank' > 
                                                <img  src={value.image_url} alt = {'A ' + props.result.word + ' pic'} />
                                            </a>
                                            <br /> <p>* Click on the picture to see more pictures related to <strong>{props.result.word}</strong></p>
                                        </span>
                                            
                                    </div>
                                    :null}          
                                    
                                </div>
                        })}
                        
                    </div>
                :null}
            </div>
     );
}
 
export default Result;