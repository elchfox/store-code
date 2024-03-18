import { useState, useEffect } from "react";

const useLocalStorage = (key: string, initialValue: unknown) => {
  const [value, setValue] = useState(initialValue || localStorage.getItem(key));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
