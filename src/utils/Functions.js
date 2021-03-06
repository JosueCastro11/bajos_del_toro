export function isMobile() {
  return (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/BlackBerry/i)
  );
}

export function isLandscape() {
  return window.innerHeight < window.innerWidth;
}

export function checkMobileAndLandscape() {
  return isMobile() && isLandscape();
}
