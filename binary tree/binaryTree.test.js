const Tree = require('./index');

describe('Binary tree', () =>{
  let tree;
  let emptyTree;
  let copyTree;
  beforeAll(() => {
    tree = new Tree();
    tree.insert(7);
    tree.insert(4);
    tree.insert(9);
    tree.insert(1);
    tree.insert(6);
    tree.insert(8);
    tree.insert(11);
    tree.insert(2);

    emptyTree = new Tree();
  });

  describe('test contains', () => {
    it('should empty tree not contains value 7', () => {
      expect(emptyTree.contains(7)).toBeFalsy();
    });

    it('should tree contains value 7', () => {
      expect(tree.contains(7)).toBeTruthy();
    });
  
    it('should tree contains value 4', () => {
      expect(tree.contains(4)).toBeTruthy();
    });
  
    it('should tree contains value 9', () => {
      expect(tree.contains(9)).toBeTruthy();
    });
  
    it('should tree contains value 1', () => {
      expect(tree.contains(1)).toBeTruthy();
    });
  
    it('should tree contains value 6', () => {
      expect(tree.contains(6)).toBeTruthy();
    });

    it('should tree contains value 8', () => {
      expect(tree.contains(8)).toBeTruthy();
    });

    it('should tree contains value 11', () => {
      expect(tree.contains(11)).toBeTruthy();
    });

    it('should tree contains value 2', () => {
      expect(tree.contains(2)).toBeTruthy();
    });

    it('should tree not contains value 12', () => {
      expect(tree.contains(12)).toBeFalsy();
    });
  });

  describe('test preorderTraversal', () => {
    it('should return [7, 4, 1, 2, 6, 9, 8, 11]', () => {
      expect(tree.preorderTraversal()).toEqual([7, 4, 1, 2, 6, 9, 8, 11]);
    })

    it('should empty tree result empty array', () => {
      expect(emptyTree.preorderTraversal()).toEqual([]);
    })
  });

  describe('test inorderTraversal', () => {
    it('should return [1, 2, 4, 6, 7, 8, 9, 11]', () => {
      expect(tree.inorderTraversal()).toEqual([1, 2, 4, 6, 7, 8, 9, 11]);
    })

    it('should empty tree result empty array', () => {
      expect(emptyTree.inorderTraversal()).toEqual([]);
    })
  });

  describe('test postorderTraversal', () => {
    it('should return [2, 1, 6, 4, 8, 11, 9, 7]', () => {
      expect(tree.postorderTraversal()).toEqual([2, 1, 6, 4, 8, 11, 9, 7]);
    })

    it('should empty tree result empty array', () => {
      expect(emptyTree.postorderTraversal()).toEqual([]);
    })
  });

  describe('test height', () => {
    it('should tree have heigh of 3', () => {
      expect(tree.height()).toEqual(3);
    })

    it('should empty tree have heigh of -1', () => {
      expect(emptyTree.height()).toEqual(-1);
    })
  });

  describe('test min', () => {
    it('should tree min return 2', () => {
      expect(tree.min()).toEqual(2);
    });

    it('should empty tree min return Number.MAX_VALUE', () => {
      expect(emptyTree.min()).toEqual(Number.MAX_VALUE);
    });
  });

  describe('test max', () => {
    it('should tree max return 11', () => {
      expect(tree.max()).toEqual(11);
    });

    it('should empty tree max return Number.MAX_VALUE', () => {
      expect(emptyTree.max()).toEqual(Number.MIN_VALUE);
    });
  });

  describe('test size', () => {
    it('should tree have size of 8', () => {
      expect(tree.size()).toEqual(8);
    });

    it('should empty tree have size of 0', () => {
      expect(emptyTree.size()).toEqual(0);
    });
  });

  describe('test countLeaf', () =>{
    it('should tree have leaf of 4', () => {
      expect(tree.countLeaf()).toEqual(4);
    });

    it('should empty tree have leaf of 0', () => {
      expect(emptyTree.countLeaf()).toEqual(0);
    });
  });

  describe('test areSibling', () =>{
    it('should tree have sibling of 1, 6', () => {
      expect(tree.areSibling(1, 6)).toBeTruthy();
    });

    it('should tree have sibling of 6, 1', () => {
      expect(tree.areSibling(6, 1)).toBeTruthy();
    });

    it('should tree have sibling of 4, 9', () => {
      expect(tree.areSibling(4, 9)).toBeTruthy();
    });

    it('should tree have sibling of 8, 11', () => {
      expect(tree.areSibling(8, 11)).toBeTruthy();
    });

    it('should tree not have sibling of 8, 6', () => {
      expect(tree.areSibling(8, 6)).toBeFalsy();
    });

    it('should tree not have sibling of 2, 11', () => {
      expect(tree.areSibling(2, 11)).toBeFalsy();
    });

    it('should empty tree not have sibling of 2, 1', () => {
      expect(emptyTree.areSibling(2, 11)).toBeFalsy();
    });
  });

  describe('test getValueAtDistance', () => {
    it('should tree return root value [7] at 0 distance', () => {
      expect(tree.getValueAtDistance(0)).toEqual([7]);
    })

    it('should tree return value [4, 9] at 1 distance', () => {
      expect(tree.getValueAtDistance(1)).toEqual([4, 9]);
    })

    it('should tree return value [1, 6, 8, 11] at 2 distance', () => {
      expect(tree.getValueAtDistance(2)).toEqual([1, 6, 8, 11]);
    })

    it('should tree return value [2] at 3 distance', () => {
      expect(tree.getValueAtDistance(3)).toEqual([2]);
    })

    it('should tree return value empty array at 4 distance', () => {
      expect(tree.getValueAtDistance(4)).toEqual([]);
    })

    it('should empty tree return empty array at any distance', () => {
      expect(emptyTree.getValueAtDistance(0)).toEqual([]);
      expect(emptyTree.getValueAtDistance(1)).toEqual([]);
      expect(emptyTree.getValueAtDistance(2)).toEqual([]);
      expect(emptyTree.getValueAtDistance(3)).toEqual([]);
    })
  });

  describe('test breadthFirstTraversal', () => {
    it('should tree return [7, 4, 9, 1, 6, 8, 11, 2]', () => {
      expect(tree.breadthFirstTraversal()).toEqual([7, 4, 9, 1, 6, 8, 11, 2]);
    })

    it('should empty tree return []', () => {
      expect(emptyTree.breadthFirstTraversal()).toEqual([]);
    })
  })
});


