import { useState, useCallback } from "react";

export const useInputState = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback((event) => {
    if (!event) {
      setValue("");
      return;
    }

    setValue(event.target.value);
  }, []);

  return [value, handleChange];
};
