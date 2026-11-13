function checkStatus(isActive) {
  if (isActive === true) {
    return true;
  } else if (isActive === false) {
    return false;
  } else {
    return Boolean(isActive);
  }
}