function mystery1(arr) {
    let i = 0;
    while (i < arr.length) {
      if (arr[i] % 2 === 0) {
        return true;
      }
    }
    return false;
  }

  // the issue is that we are checking if an array contains at least one even number
  // but we are not incrementing the loop. It will check the same number forever