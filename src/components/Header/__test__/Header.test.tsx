import { render, screen } from "@testing-library/react"
import Button from "../Button/Button";
import Header from "../Header"
import Input from "../Input/Input";

it ('renders the header', ()=>{
    render(<Button/>);
    const btnElement = screen.getByRole("button")
    expect(btnElement).toBeInTheDocument()
})
it ('renders the header', ()=>{
    render(<Input/>);
    const inputElement = screen.getByPlaceholderText("Enter a word ...")
    expect(inputElement).toBeInTheDocument()
})
