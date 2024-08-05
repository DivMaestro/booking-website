export class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    getNode(index) {
        let currentNode = this.head;
        let count = 0;
        while (currentNode) {
            if (count === index) {
                return currentNode;
            }
            count++;
            currentNode = currentNode.next;
        }
        return null;
    }

    getLength() {
        let currentNode = this.head;
        let count = 0;
        while (currentNode) {
            count++;
            currentNode = currentNode.next;
        }
        return count;
    }
}