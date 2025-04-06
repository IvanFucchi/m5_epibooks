// test-utils.js
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ThemeContext from './ThemeContext';

// Facciamo una funzione `customRender` che wrappa tutto
const customRender = (ui, { providerProps, ...options } = {}) => {
  const defaultValue = providerProps || {
    theme: 'light',
    setTheme: () => {},
  };

  return render(
    <ThemeContext.Provider value={defaultValue}>
      <BrowserRouter>{ui}</BrowserRouter>
    </ThemeContext.Provider>,
    options
  );
};

export * from '@testing-library/react';
export { customRender as render };
