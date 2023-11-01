import { useEffect, useState } from "react";

export const useLocalStorage = (key: string, initValue: Array<string>) => {
  /**
   * getting the stored values from the localStorage
   */
  const [value, setValue] = useState(() => {
    try {
      const localValue = window.localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : initValue;
    } catch (error) {
      console.log(error);
      return initValue;
    }
  });

  /**
   * storing the values in the localStorage
   */
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
