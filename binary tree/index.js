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
  
  insert(value){};

  find(value){};

  // pre-order traversal: root left right
  preorderTravesal(node, arr){};

  // in-order traversal: left root right
  inorderTravesal(node, arr){};

  // post-order traversal: left right root
  postorderTravesal(node, arr){};

  isLeaf(node){};

  height(){};

  min(){
      return 1;
  };

  max(){
      return 2;
  };
}

module.exports = Tree;