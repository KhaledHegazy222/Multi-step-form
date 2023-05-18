import React, { forwardRef } from "react";

const InputField = forwardRef(({ placeholder, isValid, errorMessage }, ref) => {
  return <input ref={ref} placeholder={placeholder} />;
});

export default InputField;
