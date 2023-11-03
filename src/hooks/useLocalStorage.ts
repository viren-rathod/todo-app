import { useEffect, useState } from "react";
import { Task } from "../interfaces/Task";

export const useLocalStorage = (
  key: string,
  initValue: Array<string>
): [value: Task[], setValue: React.Dispatch<React.SetStateAction<Task[]>>] => {
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
