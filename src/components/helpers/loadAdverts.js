import { db } from '../firebase/firebase.utils';

export const loadAdverts = async (uid) => {
  const advertSnap = await db.collection(`${uid}/adverts/properties`).get();
  const adverts = [];

  advertSnap.forEach((snapHijo) => {
    adverts.push({
      id: snapHijo.id,
      ...snapHijo.data(),
    });
  });

  console.log(adverts);

  return adverts;
};
