import { render, screen } from "@testing-library/react"
import Input from "../Input";

it ('renders the header', ()=>{
    render(<Input/>);
    const inputElement = screen.getByPlaceholderText("Enter a word ...")
    expect(inputElement).toBeInTheDocument()

    
})
