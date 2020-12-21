// React, Redux
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

// React Router
import { AppRouter } from './routers/AppRouter';

export const AlugueApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
