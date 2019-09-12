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

  find(value){};

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
  preorderTravesal(node, arr){};

  // in-order traversal: left root right
  inorderTravesal(node, arr){};

  // post-order traversal: left right root
  postorderTravesal(node, arr){};

  isLeaf(node){
    return !node.left && !node.right;
  };

  height(){};

  min(){
    const findMin = node => {
      if(!node) return Number.MAX_VALUE;
      if(this.isLeaf(node)) return node.value;
      return Math.min(findMin(node.left), findMin(node.right));
    }
    return findMin(this.root);
  };

  max(node){
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
}

module.exports = Tree;