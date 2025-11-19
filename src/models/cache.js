class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key) {
        if (!this.cache.has(key)) return null;
        const node = this.cache.get(key);
        this.remove(node);
        this.insert(node);
        return node.value;
    }

    set(key, value) {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }
        const node = new Node(key, value);
        if (this.cache.size >= this.capacity) {
            this.cache.delete(this.tail.prev.key);
            this.remove(this.tail.prev);
        }
        this.insert(node);
        this.cache.set(key, node);
    }

    remove(node) {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    insert(node) {
        const headNext = this.head.next;
        this.head.next = node;
        node.prev = this.head;
        node.next = headNext;
        headNext.prev = node;
    }
}

module.exports = LRUCache;
