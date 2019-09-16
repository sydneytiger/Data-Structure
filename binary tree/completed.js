class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(){
    this.root = null;
  }
  
  insert(value){
    const newNode = new Node(value);
    if(!this.root){
      this.root = newNode;
      return ;
    }

    let current = this.root;
    while(true){
      if(value > current.value){
        if(!current.right){
          current.right = newNode;
          return;
        }
        current = current.right;
      }
      else{
        if(value < current.value){
          if(!current.left){
            current.left = newNode;
            return;
          }
          current = current.left;
        }
      }
    }
  };

  contains(value){
    const search = (node, value) => {
      if(!node) return false;
      return node.value === value 
        || search(node.left, value) 
        || search(node.right, value);
    }

    return search(this.root, value);
  }

  // pre-order traversal: root left right
  preorderTraversal(){
    const result = [];
    const prt = (node, arr) => {
      if(!node) return;
      arr.push(node.value);
      prt(node.left, arr);
      prt(node.right, arr);
    }

    prt(this.root, result);
    return result;
  };

  // in-order traversal: left root right
  inorderTraversal(){
    const result = [];
    const iot = (node, arr) => {
      if(!node) return;

      iot(node.left, arr);
      arr.push(node.value);
      iot(node.right, arr);
    }

    iot(this.root, result);
    return result;
  };

  // post-order traversal: left right root
  postorderTraversal(){
    const result = [];
    const pot = (node, arr) => {
      if(!node) return;

      pot(node.left, arr);
      pot(node.right, arr);
      arr.push(node.value);
    }

    pot(this.root, result);
    return result;
  };

  isLeaf(node){
    return !node.left && !node.right;
  };

  height(){
    const getHeight = node => {
      if(!node) return -1;
      if(this.isLeaf(node)) return 0;
      return 1 + Math.max(getHeight(node.left), getHeight(node.right));
    }

    return getHeight(this.root);
  };

  min(){
    const findMin = node => {
      if(!node) return Number.MAX_VALUE;
      if(this.isLeaf(node)) return node.value;
      return Math.min(findMin(node.left), findMin(node.right));
    }
    return findMin(this.root);
  };

  max(){
    const findMax = node => {
      if(!node) return Number.MIN_VALUE;
      if(this.isLeaf(node)) return node.value;
      return Math.max(findMax(node.left), findMax(node.right));
    }
    return findMax(this.root);
  };

  size(){
    const getSize = (node, total) => {
      if(!node) return;
      total.count++;
      return getSize(node.left, total) + getSize(node.right, total);
    }

    const total = { count: 0};
    getSize(this.root, total);
    return total.count;
  }

  countLeaf(){
    const getLeaf = node => {
      if(!node) return 0;
      if(this.isLeaf(node)) return 1;
      return getLeaf(node.left) + getLeaf(node.right);
    }

    return getLeaf(this.root);
  }

  areSibling(value1, value2){
    const testSibling = (node, value1, value2) => {
      if(!node) return false;
      if(!node.left || !node.right){
        return false;
      }else{
        return (node.left.value === value1 && node.right.value === value2)
          || (node.left.value === value2 && node.right.value === value1)
          || testSibling(node.left, value1, value2)
          || testSibling(node.right, value1, value2);
      }
    }

    return testSibling(this.root, value1, value2)
  }

  getValueAtDistance(k){
    const result = [];
    const getKValue = (node, k, arr) => {
      if(!node || k < 0) return;
      if(k === 0) arr.push(node.value);

      getKValue(node.left, k-1, arr);
      getKValue(node.right, k-1, arr);
    }

    getKValue(this.root, k, result);
    return result;
  }

  breadthFirstTraversal(){
    let result = [];
    for(let i = 0; i <= this.height(this.root); i++){
      const temp = this.getValueAtDistance(i);
      result = [...result, ...temp];
    }
    return result;
  }
}

module.exports = Tree;