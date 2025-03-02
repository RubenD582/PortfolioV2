import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const TiltCard = ({ children, className, ...rest }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 5,      // maximum tilt angle
        speed: 1,   // speed of the enter/exit transition
        scale: 1.02,  // slightly scale up on hover
      });
    }
    return () => tiltRef.current && tiltRef.current.vanillaTilt.destroy();
  }, []);

  return (
    <div ref={tiltRef} className={className} {...rest}>
      {children}
    </div>
  );
};

export default TiltCard;
