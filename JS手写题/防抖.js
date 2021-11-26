function debounce(fn, delay) {
  let t = null;

  return function () {
    let context = this;
    let args = arguments;
    if (t) {
      clearTimeout(t);
      t = null;
    }

    t = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

