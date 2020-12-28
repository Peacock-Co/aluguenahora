import { types } from '../types/types';
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
    case types.propertyActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };
    case types.propertyLoad:
      return {
        ...state,
        properties: [...action.payload],
      };

    default:
      return state;
  }
};
