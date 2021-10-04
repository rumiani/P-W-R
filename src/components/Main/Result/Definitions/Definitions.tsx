import './Definitions.css'
import { ResultType } from "../../../../Interfaces/Interfaces";
import Definition from "./Definition/Definitioin";
import Example from "./Example/Example";
import Photo from "./Photo/Photo";
import Type from "./Type/Type";
import Emoji from "./Emoji/Emoji";
import { connect } from 'react-redux';

const Definitions = (props:any) => {
    return (
        <div >
            {props.result.definitions?.map((vocab : ResultType , index : number)=>{
                return  <div className='definitions' key = {index} >
                            <Type type={vocab.type}/>
                            <Definition definition={vocab.definition}/>                                     
                            {vocab.example &&<Example example={vocab.example}/>}  
                            {vocab.emoji && <Emoji emoji={vocab.emoji} word={props.result.word}/>}
                            {vocab.image_url &&<Photo url={vocab.image_url} alt={props.result.word}/>}          
                        </div>
            })}
        </div>
    )
}
const mapStateToProps = (state:any) => {  
    return {
        result: state.result,
    }
  }
export default connect(mapStateToProps)(Definitions);
  

