import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('The button should have the intial color', () => {
  //render the vitual DOM
  render (< App/>);

  //Get the color button by the role and the text
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});  

  //assert the color button is red
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});

  //click the button
  fireEvent.click(colorButton);

  //assert the button change to blue
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});

  //assert the button text change to "change to red"
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);

  //check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();

  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('button should be disabled when checkbox checked', () =>{
  render(<App />);

  //check button is enable
  const button = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox');

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});