export function isBrowser() {
  try {
    if (window) return true;
  } catch (e) {
    return false;
  }
};

export function isNode() {
  try {
    if (global) return true;
  } catch (e) {
    return false;
  }
};
