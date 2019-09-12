const Tree = require('./index');

describe('Binary tree', () =>{
    let tree;
    beforeEach(() => {
        tree = new Tree();
    });

    it('should return min', () => {
        expect(tree.min()).toEqual(1);
    });
});


