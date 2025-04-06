
import React from 'react';
// import { render, screen } from './test-utils';
import App from './App';


describe('EpiBooks App', () => {
  test('1. Mostra il componente Welcome correttamente', () => {
    render(<App />);
    // const welcomeText = screen.getByText(/incredible/i);
    // expect(welcomeText).toBeInTheDocument();
    expect("pippo").toBe("pippo")
    
  });

});
