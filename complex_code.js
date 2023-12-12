/* 
 * filename: complex_code.js
 * This code is an example of a complex JavaScript program.
 * It demonstrates a custom implementation of a linked list, with various advanced operations.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  prepend(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  append(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  deleteFirst() {
    if (!this.isEmpty()) {
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
    }
  }

  deleteLast() {
    if (!this.isEmpty()) {
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        let current = this.head;
        while (current.next !== this.tail) {
          current = current.next;
        }
        current.next = null;
        this.tail = current;
      }
    }
  }

  search(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  insertAfter(after, data) {
    const newNode = new Node(data);
    let current = this.head;
    while (current !== null) {
      if (current.data === after) {
        newNode.next = current.next;
        current.next = newNode;
        if (current === this.tail) {
          this.tail = newNode;
        }
        return;
      }
      current = current.next;
    }
  }

  remove(data) {
    if (!this.isEmpty()) {
      if (this.head.data === data) {
        this.deleteFirst();
        return;
      }
      let current = this.head;
      while (current.next !== null) {
        if (current.next.data === data) {
          current.next = current.next.next;
          if (current.next === null) {
            this.tail = current;
          }
          return;
        }
        current = current.next;
      }
    }
  }
}

// Usage example

const linkedList = new LinkedList();

linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.prepend(5);
linkedList.insertAfter(20, 25);
linkedList.remove(10);

console.log(linkedList.search(10));
console.log(linkedList.search(20));

console.log(linkedList);
console.log(linkedList.head.data);
console.log(linkedList.tail.data);