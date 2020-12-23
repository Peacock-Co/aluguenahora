/* 
  {
    properties: [],
    active: null,
    active: {
      id: 'kahjsfsjkhfjsahfaf',
      imageUrl: '',
      type: '',
      street: '',
      neighborhood: '',
      squaremeters: number,
      rooms: number,
      parking: number,
      renting: number
    }
  }
*/

const initialState = {
  properties: [],
  active: null,
};

export const propertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
