import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('should change message on input change', () => {
    // mount the component
    const component = render(<App />)
    // get reference to the input element
    const input = component.getByLabelText('message-input')
    // change input value
    fireEvent.change(input, { target: { value: 'new message' } })
    // verify that p element binding has changed
    expect(component.getByText('Your message: new message')).toBeDefined();
  });
})


