'use client';

import Script from 'next/script';

export default function MetaPixel() {
  return (
    <Script
      src="https://connect.facebook.net/en_US/fbevents.js"
      strategy="afterInteractive"
      onLoad={() => {
        window.fbq('init', '1195688062298723');
        window.fbq('track', 'PageView');
      }}
    />
  );
}