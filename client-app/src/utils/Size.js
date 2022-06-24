
import React from 'react';

export let sizeMode;
export let setSizeMode;

export let DesktopDetector = () => {
    [sizeMode, setSizeMode] = React.useState(
      window.innerWidth > 900
        ? "desktop"
        : window.innerWidth > 600
        ? "tablet"
        : "mobile"
    );
    window.onresize = () => {
      setSizeMode(
        window.innerWidth > 900
          ? "desktop"
          : window.innerWidth > 600
          ? "tablet"
          : "mobile"
      );
    };
    return <div />;
};

export let isDesktop = () => {
  return sizeMode === "desktop";
};
export let isTablet = () => {
  return sizeMode === "tablet";
};
export let isMobile = () => {
  return sizeMode === "mobile";
};