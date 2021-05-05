import { db } from '../components/firebase/firebase.utils';
import { loadAdverts } from '../components/helpers/loadAdverts';
import { types } from '../types/types';

export const createNewAdvert = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    console.log(uid);

    const newAdvert = {
      type: '',
      city: '',
      street: '',
      region: '',
      room: '',
      squareMeters: '',
      rentPrice: '',
    };

    const docRef = await db
      .collection(`${uid}/adverts/properties`)
      .add(newAdvert);
    dispatch(advertActive(docRef.id, newAdvert));
  };
};

export const advertActive = (id, advert) => ({
  type: types.advertActive,
  payload: {
    id,
    ...advert,
  },
});

export const startLoadingAdverts = (uid) => {
  return async (dispatch) => {
    const adverts = await loadAdverts(uid);
    dispatch(setAdverts(adverts));
  };
};

export const setAdverts = (adverts) => ({
  type: types.advertLoad,
  payload: adverts,
});

export const startSaveAdvert = (adverts) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const advertToFirestore = { ...adverts };
    delete advertToFirestore.id;
    await db
      .doc(`${uid}/adverts/properties/${adverts.id}`)
      .update(advertToFirestore);
  };
};
