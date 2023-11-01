import React, { useEffect } from 'react';

const AdComponent = () => {
  useEffect(() => {
    const adOptions = {
      key: '56a87b423aa75e73fbee3d61e1e8af46',
      format: 'iframe',
      height: 90,
      width: 728,
      params: {}
    };

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = '//www.highcpmcreativeformat.com/56a87b423aa75e73fbee3d61e1e8af46/invoke.js';
    document.body.appendChild(script);
  }, []);

  return null; // No need to render anything for the ad
};

export default AdComponent;
