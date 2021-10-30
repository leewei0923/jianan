let QueueEs6 = (function() {
    const items = new WeakMap();

    class QueueEs6 {
        constructor() {
            items.set(this,[]);
        }

        enqueue(element) {
            let q = items.get(this);
            q.push(element);
        }

        dequeue() {
            let q = items.get(this);
            let r = q.shift();
            return r;
        }

        front() {
            let q = items.get(this);
            return  q[0];
        }

        isEmpty() {
            let q = items.get(this);
            return q.length === 0;
        }

        size() {
            let q = items.get(this);
            return q.length;
        }

        print() {
            let q = items.get(this);
            return q.toString();
        }
    }

    return QueueEs6
})();

module.exports = QueueEs6