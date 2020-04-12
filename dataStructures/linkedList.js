class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.length++;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let link = this.head;
    let preTail = link;

    while (link.next !== null) {
      preTail = link;
      link = link.next;
    }

    preTail.next = null;
    let currentTail = this.tail;
    this.tail = preTail;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentTail;
  }

  shift() {
    let currentHead = this.head;

    if (!currentHead) return undefined;

    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    currentHead.next = null;

    return currentHead;
  }

  unShift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this.this;
  }

  get(index) {  
    if (index >= this.length || index < 0) return null;
    let counter = 0;
    let link = this.head;
    while (counter < index) {
      link = link.next;
      counter++;
    }
    return link;
  }

  set(index, val) {
    let node = this.get(index);
    if (node === null) return false;
    node.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unShift(val);
    
    var preInsertNode = this.get(index - 1);
    var newNextNode = preInsertNode.next;

    var newNode = new Node(val);
    preInsertNode.next = newNode;
    newNode.next = newNextNode;

    this.length++;

    return true
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let prevNode = this.get(index - 1);
    let currentNode = prevNode.next;
    let newNextNode = currentNode.next;

    prevNode.next = newNextNode;
    return currentNode;
  }

  reverse() {
    // input nothing
    // output is the LinkedList in reverse where the head becomes the tail
    // start at the head and make it the tail
    // [5] => [7] => [9];
    // [5] <= [7] <= [9];
    // create a current node variable
    // save the reference to the next node
    // set the current node to the tail if it's the head
    // if it's the tail set the it to the prev node
    let prevNode;
    let currentNode = this.head;
    let nextNode = this.head.next;
    while(currentNode.next !== null ) {
      if (currentNode.val === this.head.val) {
        currentNode.next = null;
      }
      prevNode = currentNode;
      currentNode = nextNode;
      var newNextNode = currentNode.next;
      nextNode.next = prevNode;
      nextNode = nextNode.next;
    }
    
  }
}

var link = new LinkedList();
link.push(5);
link.push(7);
link.push(9);
link.remove(2);
console.log(link);

