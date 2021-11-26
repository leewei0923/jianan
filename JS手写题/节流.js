function throttle(fn, delay) {
    let preTime = Date.now();

    return function() {
        let content = this;
        let args = arguments;

        let currTime = Date.now();

        if(currTime - preTime >= delay) {
            preTime = data.now();

           return fn.apply(content, args);
        }
    }
}