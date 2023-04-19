import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import store from './app/states/store';
import { Provider } from 'react-redux';

import router from './app/rotes/appRouter';
import { UIProvider } from './app/states/context/UIProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HelmetProvider>
    <UIProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </UIProvider>
  </HelmetProvider>
);
