class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if(this.root === null){
      this.root = new Node(val);
      return this;
    }

    var currNode = this.root;
    while(true){
      if(val < currNode.val){
        if(currNode.left === null){
          currNode.left = new Node(val);
          return this;
        }
        else{
          currNode = currNode.left;
        }
      }
      else if(val > currNode.val){
        if(currNode.right === null){
          currNode.right = new Node(val);
          return this;
        }
        else{
          currNode = currNode.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currNode = this.root){
    if(this.root === null){
      this.root = new Node(val);
      return this;
    }
    if(val < currNode.val){
      if(currNode.left === null){
        currNode.left = new Node(val);
        return this;
      }
      else{
        return this.insertRecursively(val, currNode.left);
      }
    }
    else if(val > currNode.val){
      if(currNode.right === null){
        currNode.right = new Node(val);
        return this;
      }
      else{
        return this.insertRecursively(val, currNode.right);
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currNode = this.root;
    while(true){
      if(val === currNode.val){
        return currNode;
      }
      else if(val < currNode.val){
        if(currNode.left === null){
          return undefined;
        }
        else{
          currNode = currNode.left;
        }
      }
      else if(val > currNode.val){
        if(currNode.right === null){
          return undefined;
        }
        else{
          currNode = currNode.right;
        }
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, root = this.root) {
    const findHelper = function(currNode = root){
      if(val === currNode.val){
        console.log(currNode);
        return currNode;
      }
      else if(val < currNode.val){
        if(currNode.left === null){
          return undefined;
        }
        else{
          return findHelper(currNode.left);
        }
      }
      else if(val > currNode.val){
        if(currNode.right === null){
          return undefined;
        }
        else{
          return findHelper(currNode.right);
        }
      }
    }
    return findHelper();
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(root = this.root) {
    let resultArr = [];
    const preHelper = function(currNode = root){
      if(!resultArr.includes(currNode.val)){
        resultArr.push(currNode.val);
      }
      if(currNode.left !== null){
        preHelper(currNode.left);
      }
      if(currNode.right !== null){
        preHelper(currNode.right);
      }
      return;
    }
    preHelper();
    console.log(resultArr);
    return resultArr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(root = this.root) {
    let resultArr = [];
    const inHelper = function(currNode = root){
      if(currNode.left !== null){
        inHelper(currNode.left);
      }
      if(!resultArr.includes(currNode.val)){
        resultArr.push(currNode.val);
      }
      if(currNode.right !== null){
        inHelper(currNode.right);
      }
      return;
    }
    inHelper();
    console.log(resultArr);
    return resultArr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(root = this.root) {
    let resultArr = [];
    const postHelper = function(currNode = root){
      if(currNode.left !== null){
        postHelper(currNode.left);
      }
      if(currNode.right !== null){
        postHelper(currNode.right);
      }
      if(!resultArr.includes(currNode.val)){
        resultArr.push(currNode.val);
      }
      return;
    }
    postHelper();
    console.log(resultArr);
    return resultArr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let currNode = this.root;
    let queue = [];
    let resultArr = [];

    queue.push(currNode);

    while(queue.length){
      currNode = queue.shift();
      resultArr.push(currNode.val);
      if(currNode.left !== null){
        queue.push(currNode.left);
      }
      if(currNode.right !== null){
        queue.push(currNode.right);
      }
    }

    return resultArr;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
