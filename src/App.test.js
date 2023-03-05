import { fireEvent, render, screen , cleanup } from '@testing-library/react';
import App from './App';
import Login from '../src/pages/Login'

// afterEach(()=>{
//   cleanup();
// });

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Landing Page/i);
  expect(linkElement).toBeInTheDocument();
});



test('renders loging component', () => {
  const { getByLabelText, getByRole } = render(<Login />);

  const PasswordElement = getByLabelText(/Password/i);  // Get by lable text of the element
  expect(PasswordElement).toBeInTheDocument();

  const emailElement = document.getElementById('email');  // Get by id of the element
  expect(emailElement).toBeInTheDocument();

  const emailllllElement = getByLabelText(/Email Address/i);  // Get by lable text of the element
  expect(emailllllElement).toBeInTheDocument();

  //const emailGetByRole = getByRole(/Email Address/i);  // Get by lable text of the element
  expect(emailllllElement).toBeInTheDocument();
});


test('check loging email and PW have button not disabled', () => {
  const { getByLabelText, getByRole } = render(<Login />);

  const emailElement = document.getElementById('email');  // Get by id of the element
  fireEvent.change(emailElement, {'target': {'value': ''}})
  //const button = getByRole('Button', {'name': 'submit'})
  
  const button = document.getElementById('submitButton');
  expect(button).toHaveAttribute('disabled');
});

test('check loging button disabled password', () => {
  const { getByLabelText, getByRole , debug} = render(<Login />);

  const emailElement = document.getElementById('email');  // Get by id of the element
  fireEvent.change(emailElement, {'target': {'value': 'ssss'}})

  const PasswordElement = getByLabelText(/Password/i);  // Get by lable text of the element
  fireEvent.change(PasswordElement, {'target': {'value': 'sssss'}});
  
  const button = document.getElementById('submitButton');
  debug(button);
  expect(button).not.toHaveAttribute('disabled');
  debug(button);


  expect(PasswordElement).toHaveAttribute('type' , 'password');
  
});



// test('we can check element type', () => {
//   const { getByLabelText, getByRole } = render(<App />);
//   const PasswordElement =  getByLabelText(/Password/i);;
  
// });