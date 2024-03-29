class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }
  
  toArray(){
    const arr = [];
    let current = this.head;
    while(current){
      arr.push(current.value);
      current = current.next;
    }
    
    return arr;
  }
  
  addFirst(value){
    const newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
    }else{
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  
  addLast(value){
    const newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
    }else{
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = newNode;
    }
  }
  
  removeFirst(){
    if(!this.head) return;
    
    let current = this.head;
    this.head = this.head.next;
    current.next =  null
  }
  
  removeLast(){
    if(!this.head) return;
    
    let current = this.head;
    let back = this.head;
    
    while(current.next){
      back = current;
      current = current.next;
    }
    
    back.next = null;
    if(this.head === back) this.head = null;
  }
  
  contains(value){
    let current = this.head;
    while(current){
      if(current.value === value) return true;
      current = current.next;
    }
    
    return false
  }
  
  size(){
    let count = 0;
    let current = this.head;
    while(current){
      count++;
      current = current.next;
    }
    return count;
  }
  
  indexOf(value){
    if(!this.head) return -1;
    let index = 0;
    let current = this.head;
    while(current){
      if(current.value === value) return index;
      index++;
      current = current.next;
    }
    
    return -1;
  }
  
  reverse(){
    let back = null;
    let front = null;
    let current = this.head;
    while(current){
      front = current.next;
      current.next = back;
      
      back = current;
      current = front;
    }
    
    this.head = back;
  }
  
  valueFromEnd(k) {
    if(!this.head) return null;
    if(k < 0) return null;
    let total = this.size();
    if(k + 1 > total) return null;
    
    return this.indexOf(total - k - 1);
  }

  // using two pointers
  hasLoop1() {
    let slow = this.head;
    let fast = this.head;
    while(slow && fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) return true;
    }
    
    return false;
  }

  // using Set
  hasLoop2() {
    let current = this.head;
    const nodeSet = new Set();
    while(current){
      if(nodeSet.has(current)) return true;
      nodeSet.add(current);
      current = current.next;
    }

    return false;
  }

}

module.exports.LinkedList = LinkedList;
module.exports.Node = Node;