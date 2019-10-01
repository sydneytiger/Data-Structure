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
}

class HashTable{
  constructor(){
    this.bucketSize = 8;
    this.buckets = [];
  }
  
  hash(key){ return key%this.bucketSize; }
  
  put(key, value){
    const index = this.hash(key);
    const newEntry = new Entry(key, value);
    
    if(!this.buckets[index]) {
      const bucket = new Bucket();
      bucket.add(newEntry);
      this.buckets[index] = bucket;
    }
    else{
      this.buckets[index].add(newEntry);
    }
  }
  
  get(key){
    const index = this.hash(key);
    const bucket = this.buckets[index];
    if(!bucket) return null;
    return bucket.findByKey(key).value;
  }
  
  remove(key){
    const index = this.hash(key);
    const bucket = this.buckets[index];
    if(!bucket) return null;
    bucket.remove(key);
  }
}

module.exports.HashTable = HashTable;
module.exports.Bucket = Bucket;
module.exports.Entry = Entry;