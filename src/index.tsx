import React from 'react';
import ReactDOM from 'react-dom';

import App from 'src/pages/App';
import { PokemonProvider } from 'src/contexts/Pokemon';
import { ThemeProvider, CssBaseline, theme } from 'src/styles/index.styles';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PokemonProvider>
        <App />
      </PokemonProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
