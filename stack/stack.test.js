const { Stack, isBalance } = require('./completed');
//const { Stack, isBalance } = require('./exercise');

describe('Test stack', () => {
  let stack;
  let emptyStack;
  const init = ()=>{
    emptyStack = new Stack();

    stack = new Stack();
    stack.array[0] = 'zero';
    stack.currentIndex = 0;
  };

  describe('test push', () =>{
    beforeAll(init);

    it('should stack add "one" to array', ()=>{
      stack.push('one');
      expect(stack.currentIndex).toEqual(1);
      expect(stack.array[1]).toEqual("one");
    });

    it('should stack add "two" to array', ()=>{
      stack.push('two');
      expect(stack.currentIndex).toEqual(2);
      expect(stack.array[2]).toEqual("two");
    });

    it('should emptyStack add "zero" to array', ()=>{
      emptyStack.push('zero');
      expect(emptyStack.currentIndex).toEqual(0);
      expect(emptyStack.array[0]).toEqual("zero");
    });
  });

  describe('test pop', () =>{
    beforeAll(init);

    it('should stack pop retuns "zero" and current index is -1', () => {
      expect(stack.pop()).toEqual('zero');
      expect(stack.currentIndex).toEqual(-1);
    });

    it('should emptyStack pop retuns null', () => {
      expect(emptyStack.pop()).toBeNull();
      expect(emptyStack.currentIndex).toEqual(-1);
    });
  });

  describe('test peek', () =>{
    beforeAll(init);

    it('should stack peek retuns "zero" but currentIndex is 0', () => {
      expect(stack.peek()).toEqual('zero');
      expect(stack.currentIndex).toEqual(0);
    });

    it('should emptyStack peek retuns null', () => {
      expect(emptyStack.peek()).toBeNull();
      expect(emptyStack.currentIndex).toEqual(-1);
    });
  });

  describe('test isEmpty', () =>{
    beforeAll(init);

    it('should stack returns false', () => {
      expect(stack.isEmpty()).toBeFalsy();
    });

    it('should emptyStack returns true', () => {
      expect(emptyStack.isEmpty()).toBeTruthy();
    });
  });
});

describe('test isBalance', () => {
  it('should throw execpetion for empty string', () => {
    expect(() => {isBalance('')}).toThrowError();
    expect(() => {isBalance(null)}).toThrowError();
    expect(() => {isBalance(undefined)}).toThrowError();
  });

  it('should be true if no bracket at all', ()=>{
    expect(isBalance('wmdlsd,w0ocksd.weodks/')).toBeTruthy();
  });

  it('should be true for balanced parenthese', () => {
    expect(isBalance('()(1 + 2)(0)')).toBeTruthy();
  });

  it('should be true for unbalanced parenthese', () => {
    expect(isBalance(')1 + 2(')).toBeFalsy();
    expect(isBalance('((1 + 2)')).toBeFalsy();
    expect(isBalance('(1 + 2))')).toBeFalsy();
    expect(isBalance('())1 + 2(')).toBeFalsy();
    expect(isBalance('(1 + 2(()')).toBeFalsy();
  });

  it('should be true for balanced curly braces', () => {
    expect(isBalance('{}{1 + 2}{0}')).toBeTruthy();
  });

  it('should be true for unbalanced curly braces', () => {
    expect(isBalance('}1 + 2{')).toBeFalsy();
    expect(isBalance('{{1 + 2}')).toBeFalsy();
    expect(isBalance('{1 + 2}}')).toBeFalsy();
    expect(isBalance('{}}1 + 2{')).toBeFalsy();
    expect(isBalance('{1 + 2{{}')).toBeFalsy();
  });

  it('should be true for balanced square bracket', () => {
    expect(isBalance('[][1 + 2][0]')).toBeTruthy();
  });

  it('should be true for unbalanced square bracket', () => {
    expect(isBalance(']1 + 2[')).toBeFalsy();
    expect(isBalance('[[1 + 2]')).toBeFalsy();
    expect(isBalance('[1 + 2]]')).toBeFalsy();
    expect(isBalance('[]1 + 2[')).toBeFalsy();
    expect(isBalance('[1 + 2[[]')).toBeFalsy();
  });

  it('should be true for balanced anglur braces', () => {
    expect(isBalance('<><1 + 2><0>')).toBeTruthy();
  });

  it('should be true for unbalanced anglur braces', () => {
    expect(isBalance('>1 + 2<')).toBeFalsy();
    expect(isBalance('<<1 + 2>')).toBeFalsy();
    expect(isBalance('<1 + 2>>')).toBeFalsy();
    expect(isBalance('>>1 + 2<')).toBeFalsy();
    expect(isBalance('<1 + 2<<>')).toBeFalsy();
  });

  it('should be true for balanced mixed brackets', () => {
    expect(isBalance('[<>(1 + 2)${0}].{5}["good will"]')).toBeTruthy();
  });

  it('should be false for unbalance parenthese', () => {
    expect(isBalance('[<>(1 + 2)${0}].{5}["good will"]')).toBeTruthy();
  });
});