import React from 'react';
import Script from 'next/script';

const AdDisplay = () => {
  const atOptions = {
    'key': 'e00432cd040f5518499410ed4aa7da79',
    'format': 'iframe',
    'height': 600,
    'width': 160,
    'params': {}
  };

  return (
    <>
      <Script
        id="ad-script"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            atOptions = ${JSON.stringify(atOptions)};
            document.write('<scr' + 'ipt type="text/javascript" src="//www.highcpmcreativeformat.com/${atOptions.key}/invoke.js"></scr' + 'ipt>');
          `,
        }}
      />
    </>
  );
};

export default AdDisplay;
