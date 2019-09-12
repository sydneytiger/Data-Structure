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
});


