"use client";

import "./globals.css";
import FloatingContactWidget from "@/components/FloatingContactWidget";
import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Fire Pixel PageView when route changes with proper loading check
  useEffect(() => {
    const trackPageView = () => {
      if (typeof window !== 'undefined' && window.fbq && typeof window.fbq === 'function') {
        console.log('Tracking PageView for:', pathname); // Debug log
        window.fbq("track", "PageView");
      } else {
        console.warn('Facebook Pixel not loaded yet'); // Debug log
      }
    };

    // Add small delay to ensure pixel is loaded on route changes
    const timer = setTimeout(trackPageView, 200);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Facebook Pixel Base Code - Load early */}
        <Script
          id="facebook-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              
              fbq('init', '1195688062298723');
              fbq('track', 'PageView');
              
              // Debug: Log when pixel is initialized
              console.log('Facebook Pixel initialized');
            `,
          }}
        />
        
        {/* Alternative: Load pixel script directly */}
        <Script 
          src="https://connect.facebook.net/en_US/fbevents.js"
          strategy="beforeInteractive"
          onLoad={() => {
            console.log('Facebook Pixel script loaded');
            if (window.fbq) {
              window.fbq('init', '1195688062298723');
              window.fbq('track', 'PageView');
            }
          }}
        />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1195688062298723&ev=PageView&noscript=1"
          />
        </noscript>
      </head>

      <body className="font-poppins min-h-screen flex flex-col bg-gradient-to-r from-[#000000] via-[#0a0a0a] to-[#000000]">
        <main className="flex-grow">
          <FloatingContactWidget />
          {children}
        </main>
      </body>
    </html>
  );
}