class Entry{
  constructor(key, value){
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class Bucket{
  constructor(){
    this.head = null;
  }
  
  findByKey(key){
    let current = this.head;
    while(current){
      if(current.key === key) return current;
      current = current.next;
    }
    
    return null;
  }
  
  add(entry){
    if(!this.head) {
      this.head = entry;
    }
    else{
      const findEntry = this.findByKey(entry.key);
      if(findEntry){
        findEntry.value = entry.value;
      }else{
        entry.next = this.head;
        this.head = entry;
      }

    }
  }
  
  remove(key){
    if(!this.head) return;
    
    if(this.head.key === key) { 
      this.head = this.head.next;
      return
    }
    
    let current = this.head.next;
    let prev = this.head;
    while(current){
      if(current.key === key){
        prev.next = current.next;
        current.next = null;
        current = prev.next;
      }
      else{
        prev = current;
        current = current.next;
      }
    }
  }

  print(){
    let result = [];
    let current = this.head;
    if(current){
      result.push(`key: ${current.key}, value: ${current.value}`);
      current = current.next;
    }

    return result.join('=>');
  }

}

class HashTable{
  constructor(){
    //TODO: implementation here
  }
  
  hash(key){ return key%this.bucketSize; }
  
  put(key, value){
    //TODO: implementation here
  }
  
  get(key){
    //TODO: implementation here
  }
  
  remove(key){
    //TODO: implementation here
  }
}

module.exports.HashTable = HashTable;
module.exports.Bucket = Bucket;
module.exports.Entry = Entry;