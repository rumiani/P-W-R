import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


describe('App', () => {
  beforeEach(() => console.log('each test is runing'))
  // test('should be able to type in the input', () => {
  //   render(<App />);
  //   const inputElement = screen.getByPlaceholderText(/Enter a word .../i);
  //   fireEvent.change(inputElement,{target:{value:'water'}});
  //   expect(inputElement.value).toBe('water'); 
  // });
//   test('when click the add button the input value should be nothing',async () => {
//     render(<App />);
//     const inputElement = screen.getByPlaceholderText(/Enter a word .../i);
//     fireEvent.change(inputElement,{target:{value:'water'}});
//     const btnElement = screen.getByRole('button',{name:/Go/i});
//     fireEvent.click(btnElement);
//     expect(inputElement.value).toBe('');
// });
  // test('when click the add button we should see the loading',async () => {
  //   render(<App />);
  //   const inputElement = screen.getByPlaceholderText(/Enter a word .../i);
  //   fireEvent.change(inputElement,{target:{value:'wall'}});
  //   const btnElement = screen.getByRole('button',{name:/Go/i});
  //   fireEvent.click(btnElement);
  //   const loadingElement = await screen.findByText('Loading...')
  //   expect(loadingElement).toBeInTheDocument()
  // });
  test('After the loading we should see the result',async () => {
    // render(<App />);
    // const inputElement = screen.getByPlaceholderText(/Enter a word .../i);
    // fireEvent.change(inputElement,{target:{value:'wall'}});
    // const btnElement = screen.getByRole('button',{name:/Go/i});
    // fireEvent.click(btnElement);
    // console.log(btnElement);
    
    // const loadingElement = await screen.findAllByText('wall')
    // expect(loadingElement.length>0).toBeTruthy()
    // const wordDefinition =await screen.findByTestId('result')
    // const wordDefinition =await screen.findByTestId('result')
    // fireEvent.click(btnElement);
        // expect(loadingElement).toBeInTheDocument()
});

})
