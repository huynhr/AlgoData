class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while(true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else if (currentNode.value < value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return this;
      }
    }
  }

  find(value) {
    if (!this.root) return undefined;
    let current = this.root;
    let found = false;
    while(current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (current.value < value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return current;
  }

  breathSearch() {
    let queue = [this.root];
    let output = [];
    while(queue.length) {
      let currentNode = queue.shift()
      output.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
    return output;
  }

  dfsPreOrder(node, list) {
    if (!node) return list
    list.push(node.value)
    this.dfsPreOrder(node.left, list)
    this.dfsPreOrder(node.right, list)
    return list;
  }

  dfsPostOrder(node, list) {
    if (!node) return list
    this.dfsPostOrder(node.left, list)
    this.dfsPostOrder(node.right, list)
    list.push(node.value)
    return list;
  }

  inOrder(node, list) {
    if (!node) return list
    this.inOrder(node.left, list)
    list.push(node.value)
    this.inOrder(node.right, list)
    return list;
  }
 }

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(20);
tree.insert(1);
tree.insert(7);
tree.insert(3);
/**
 *             10
 *         5        15
 *      1    7          20
 *        3
 * BST [10, 5, 15, 1, 7, 20, 3]
 * DFT PRE [10, 5, 1, 3, 7, 15, 20]
 * DFT POST [3, 1, 7, 5, 20, 15, 10]
 * IN-ORDER [1, 3, 5, 7, 10, 15, 20]
 */
console.log(tree.inOrder(tree.root, []))