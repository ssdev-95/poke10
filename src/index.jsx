import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Pokedex from 'src/pages/Pokedex';
import App from 'src/pages/App';

import { PokemonProvider } from 'src/contexts/Pokemon';
import { ThemeProvider, CssBaseline, theme } from 'src/styles/index.styles';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <PokemonProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/dex" exact component={Pokedex} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </PokemonProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
