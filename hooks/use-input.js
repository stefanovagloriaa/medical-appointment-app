import { useState } from "react";

const useInput = (validateValue) => {
  const [value, setValue] = useState("");
  const [valueWasTouched, setValueWasTouched] = useState(false);

  const valueIsValid = validateValue(value);
  const hasError = !valueIsValid && valueWasTouched;

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const valueBlurHandler = () => {
    setValueWasTouched(true);
  };

  const resetValue = () => {
    setValue("");
    setValueWasTouched(false);
  };

  return {
    value,
    hasError,
    changeHandler: valueChangeHandler,
    blurHandler: valueBlurHandler,
    reset: resetValue,
  };
};

export default useInput;
