import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const clear = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(clear);
  }, [value]);
  return debounceValue;
};
