// lib/fpixel.js
export const FB_PIXEL_ID = "1195688062298723";

// Standard fbq wrapper
export const pageview = () => {
  window.fbq("track", "PageView");
};

// Custom event tracker
export const event = (name, options = {}) => {
  window.fbq("track", name, options);
};
