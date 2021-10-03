import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
// var Owlbot = require('owlbot-js');
// var client = Owlbot('03bc50f819a9f19c4d4946a3e0813f87179dc74f');
const App = ()=> {
  return ( 
      <div className = 'App'>
        <Header/>
        <Main/>
      </div>
     );
}
export default App;
