import { db } from '../components/firebase/firebase.utils';
import { loadAdverts } from '../components/helpers/loadAdverts';
import { types } from '../types/types';

export const startNewAdvert = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    console.log(uid);

    const newAdvert = {
      imageUrl: '',
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
