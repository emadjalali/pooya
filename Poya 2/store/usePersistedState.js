import { useState, useEffect } from 'react';

// custom hook:
export const usePersistedState = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    let persistedState = initialValue;
    try {
      if (typeof window !== 'undefined') {
        const cache = JSON.parse(localStorage.getItem(key));
        if (cache != null) persistedState = cache;
      }
    } catch (e) {
      // console.error('cannot parse persisted state Lesson', e);
    }
    return persistedState;
  });

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (e) {
      // console.error('cannot persist state Lesson', value);
    }
  }, [value]);

  return [value, setValue];
};
