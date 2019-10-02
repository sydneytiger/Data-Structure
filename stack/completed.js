class Stack {
  constructor(){
    this.array = [];
    this.currentIndex = -1;
  }

  push(value){
    this.currentIndex += 1;
    this.array[this.currentIndex] = value;
  }

  pop(){
    if(this.currentIndex === -1) return null;
    const value = this.array[this.currentIndex];
    this.currentIndex -= 1;
    return value;
  }

  peek(){
    if(this.currentIndex === -1) return null;
    return this.array[this.currentIndex];
  }

  isEmpty(){
    return this.currentIndex === -1;
  }
};

const isBalance = str => {
  if(!str) throw 'str cannot be empty';
  
  const leftBracket = ['(', '[', '{', '<'];
  const rightBracket = [')', ']', '}','>'];
  const stack = new Stack();

  for(let char of str){
    const leftIndex = leftBracket.indexOf(char);
    if(leftIndex > -1){
      stack.push(leftIndex);
    }

    const rightIndex = rightBracket.indexOf(char);
    if(rightIndex > -1){
      if(stack.isEmpty() || rightIndex !== stack.pop()) return false;
    }
  }

  return stack.isEmpty();
}

module.exports.Stack = Stack;
module.exports.isBalance = isBalance;