import { useEffect, useState } from "react";

function getSavedValue(key, initialVal) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue)
    //if value is given directly
    return savedValue;
  if (initialVal instanceof Function)
    //if value is given via anonymous function
    return initialVal();
  return initialVal;
}

export default function useLocalStorage(key, initialVal) {

  //setting value from local storage
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialVal);
  });

  //whenever value is changed, save it to the local storage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
