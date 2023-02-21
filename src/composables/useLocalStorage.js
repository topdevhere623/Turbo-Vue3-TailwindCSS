import { shallowRef } from 'vue';

function getStoredValue(key, initialValue) {
  const savedValue = localStorage.getItem(key);
  if (savedValue) {
    try {
      return JSON.parse(savedValue);
    } catch (e) {
      localStorage.removeItem(key)
      return null
    }
  }
  return typeof initialValue === 'function' ? initialValue() : initialValue;
}

export default function useLocalStorage(key, defaultVal) {
  const value = shallowRef(getStoredValue(key, defaultVal));

  const setValue = (v) => {
    localStorage.setItem(key, JSON.stringify(v));
    value.value = v;
  };

  return [value, setValue];
}
