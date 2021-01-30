import { db } from '../components/firebase/firebase.utils';
import { loadProperties } from '../components/helpers/loadProperties';
import { types } from '../types/types';

export const announceNewPropertie = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    console.log(uid);

    const newAnnoucedProperty = {
      title: '',
      body: '',
      date: new Date().getTime(),
    };

    const docRef = await db
      .collection(`${uid}/adverts/properties`)
      .add(newAnnoucedProperty);
    dispatch(propertyActive(docRef.id, newAnnoucedProperty));

    console.log(docRef);
  };
};

export const propertyActive = (id, property) => ({
  type: types.propertyActive,
  payload: {
    id,
    ...property,
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
