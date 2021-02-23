import { db } from '../components/firebase/firebase.utils';
import { loadProperties } from '../components/helpers/loadProperties';
import { types } from '../types/types';

export const startNewAdvert = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;

    const newAdvert = {
      type: '',
      street: '',
      neighbour: '',
      price: '',
      date: new Date().getTime(),
    };

    const docRef = await db
      .collection(`${uid}/adverts/properties`)
      .add(newAdvert);
    dispatch(advertActive(docRef.id, newAdvert));

    console.log(docRef);
  };
};

export const advertActive = (id, property) => ({
  type: types.advertActive,
  payload: {
    id,
    ...property,
  },
});

export const startLoadingProperties = (uid) => {
  return async (dispatch) => {
    const properties = await loadProperties(uid);
    dispatch(advertActive(properties));
  };
};

export const setAdvert = (properties) => ({
  type: types.advertLoad,
  payload: properties,
});
