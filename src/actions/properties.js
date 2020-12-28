import { db } from '../components/firebase/firebase.utils';
import { loadProperties } from '../components/helpers/loadProperties';
import { types } from '../types/types';

export const addNewPropertie = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    console.log(uid);

    const newProperty = {
      type: '',
      street: '',
      neighbor: '',
      value: '',
      date: new Date().getTime(),
    };

    const doc = await db.collection(`${uid}/houses/anuncios`).add(newProperty);
    dispatch(propertyActive(doc.id, newProperty));
  };
};

export const propertyActive = (id, properties) => ({
  type: types.propertyActive,
  payload: {
    id,
    ...properties,
  },
});

export const startLoadingProperties = (uid) => {
  return async (dispatch) => {
    const properties = await loadProperties(uid);
    dispatch(setProperties(properties));
  };
};

export const setProperties = (properties) => ({
  type: types.propertyLoad,
  payload: properties,
});
