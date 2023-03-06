import React from 'react';

export function useWindowSize() {
  const [state, dispatch] = React.useState({
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    function handleResize() {
      dispatch((prevstate) => ({ ...prevstate, width: window.innerWidth, height: window.innerHeight }));
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return state;
}
