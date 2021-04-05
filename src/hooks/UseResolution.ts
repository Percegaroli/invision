import { useEffect, useState } from 'react';

type Resolution = 'Mobile' | 'Desktop' | 'Tablet'

const UseResolution = () => {
  const [resolution, setResolution] = useState<Resolution>('Mobile');

  useEffect(() => {
    window.addEventListener('resize', calculateResolution);
    calculateResolution();
    return () => window.removeEventListener('resize', calculateResolution);
  }, []);

  const calculateResolution = () => {
    const isDesktop = window.innerWidth >= 992;
    const isTablet = window.innerWidth >= 768;
    let newResolution: Resolution = 'Mobile';
    if (isDesktop) newResolution = 'Desktop';
    if (isTablet) newResolution = 'Tablet';
    setResolution(newResolution);
  };

  return resolution;
};

export default UseResolution;
