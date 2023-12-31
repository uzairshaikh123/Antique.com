import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </MantineProvider>
    </Provider>
);

