import { useState } from "react";

const useLocalStorage = (
  keyName: string,
  defaultValue: string | boolean | object | null
) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);

      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (newValue: string) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {
      console.log(err);
    }
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};

const removeItemStorage = (keyName: string) => {
  try {
    window.localStorage.removeItem(keyName);
  } catch (err) {
    console.log(err);
  }
};

const clearStorage = () => {
  try {
    window.localStorage.clear();
  } catch (err) {
    console.log(err);
  }
};

export { clearStorage, removeItemStorage, useLocalStorage };
