import { db } from '../firebase/firebase.utils';

export const loadProperties = async (uid) => {
  const propertySnap = await db.collection(`${uid}/houses/anuncios`).get();
  const properties = [];

  propertySnap.forEach((snapHijo) => {
    properties.push({
      id: snapHijo.id,
      ...snapHijo.data(),
    });
  });

  console.log(properties);

  return properties;
};
