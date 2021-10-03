import './Definitions.css'
import { ResultType } from "../../../../Interfaces/Interfaces";
import Definition from "./Definition/Definitioin";
import Example from "./Example/Example";
import Photo from "./Photo/Photo";
import Type from "./Type/Type";
import Emoji from "./Emoji/Emoji";

const Definitions = (props:any) => {
    return (
        <div >
            {props.result.definitions?.map((vocab : ResultType , index : number)=>{
                
                return  <div className='definitions' key = {index}>
                            <Type type={vocab.type}/>
                            <Definition definition = {vocab.definition}/>                                     
                            {vocab.example &&<Example example = {vocab.example}/>}  
                            {vocab.emoji && <Emoji emoji={vocab.emoji} word = {props.result.word}/>}
                            {vocab.image_url &&<Photo photo= {vocab.image_url} word = {props.result.word}/>}          
                        </div>
            })}
        </div>
    )
}
export default Definitions;