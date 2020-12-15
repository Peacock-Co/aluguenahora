import { types } from '../types/types';

export const setErrorAction = (err) => ({
  type: types.uiSetError,
  payload: err,
});

export const unsetErrorAction = () => ({
  type: types.uiUnSetError,
});

export const startLoading = () => ({
  type: types.uiStartLoading,
});

export const finishLoading = () => ({
  type: types.uiFinishLoading,
});
