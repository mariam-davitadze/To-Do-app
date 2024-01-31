import { useCallback, useRef } from "react";

const useDebouncedCallback = (callback: (...args: any[]) => void, ms = 500) => {
  let timeout: { current: any } = useRef();

  return useCallback(
    (...args: any[]) => {
      const debouncedCallback = () => {
        clearTimeout(timeout.current);
        callback(...args);
      };

      clearTimeout(timeout.current);
      timeout.current = setTimeout(debouncedCallback, ms);
    },
    [callback, ms]
  );
};

export default useDebouncedCallback;
