import { types } from '../types/types';
/* 
  {
    properties: [],
    active: null, if it is null it will appear the message "Ainda nao tem um imovel anunciado"
    active: {
      id: 'kahjsfsjkhfjsahfaf',
      title: '',
      body: '',
      imageUrl: '',
      date: 30102021
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
