import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = (newFormState = initialState) => {
    setValues(newFormState);
  };

  const handleInputChange = ({ target }) => {
    const name = target.name;
    setValues({
      ...values,
      [name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};
