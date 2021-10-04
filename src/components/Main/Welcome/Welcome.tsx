import './Welcome.css'
const Welcome = () =>{
    return (
        <div className='welcome'>
            <h4>Welcome to Rumiani Dictionary</h4>
            <br/>
            This is an English to English Dictionary 
            using <strong>owlbot</strong> API. built with 
            React & Redux, TypeScript and Jest. 
            <ul>
                <li>
                Enter a word in the input box then hit the enter or Go button.
                </li>
                <li>
                Click on each emoji or picture in the result to see more imojis or pictures in a new tab.
                </li>
                <li>
                    In the result, highlight a word to see a go button which by hitting it you will be looking up in the dictionary.
                    Don't worry about non-alphabetic characters at the end or begenning of a word. We will get rid of them for you.
                </li>
            </ul>
        </div>
    )
}

export default Welcome;