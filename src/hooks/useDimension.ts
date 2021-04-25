import { useEffect, useState } from "react";

export function useDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0
  });
  
  function getSize() {
    const window = document.querySelector('#__next') as HTMLDivElement;
    return {
      width: window.offsetWidth,
      height: window.offsetHeight
    }
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getSize());
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};
