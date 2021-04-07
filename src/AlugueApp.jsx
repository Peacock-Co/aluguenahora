// React, Redux
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/Store';

// React Router
import { AppRouter } from './routers/AppRouter';

export default function AlugueApp() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}
