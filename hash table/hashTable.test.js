//const { HashTable, Bucket, Entry } = require('./exercise');
const { HashTable, Bucket, Entry } = require('./completed');

describe('test HashTable', () => {
  let hashTable;
  let emptyHashTable;

  beforeEach(() => {
    emptyHashTable = new HashTable();

    hashTable = new HashTable();
    const bucket0 = new Bucket();
    bucket0.head = new Entry(0, 'value 0');
    bucket0.head.next = new Entry(8, 'value 8');
    hashTable.buckets[0] = bucket0;

    const bucket1 = new Bucket();
    bucket1.head = new Entry(1, 'value 1');
    bucket1.head.next = new Entry(9, 'value 9');
    hashTable.buckets[1] = bucket1;

  });

  describe('test get', () => {
    it('should hashTable return value 0 for key 0', () => {
      expect(hashTable.get(0)).toEqual('value 0');
    })

    it('should hashTable return value 1 for key 1', () => {
      expect(hashTable.get(1)).toEqual('value 1');
    })

    it('should hashTable return value 9 for key 9', () => {
      expect(hashTable.get(9)).toEqual('value 9');
    })

    it('should hashTable return null for key 2', () => {
      expect(hashTable.get(2)).toBeNull();
    })

    it('should emptyHashTable return null for key 0', () => {
      expect(emptyHashTable.get(0)).toBeNull();
    })
  });


  describe('test put', () => {
    it('should hashTable add key 2 to an new bucket', () => {
      expect(hashTable.buckets.length).toEqual(2);
      hashTable.put(2, 'value 2');
      expect(hashTable.buckets.length).toEqual(3);
      expect(hashTable.buckets[2].head.value).toEqual('value 2');
    })

    it('should hashTable overwrite key 2 to an new value of value 22', () => {
      hashTable.put(2, 'value 22');
      expect(hashTable.buckets[2].head.value).toEqual('value 22');
    })

    it('should hashTable add new value 16 to key 16', () => {
      hashTable.put(16, 'value 16');
      expect(hashTable.buckets.length).toEqual(2);
      expect(hashTable.buckets[0].head.value).toEqual('value 16');
    })

    it('should emptyHashTable add new value of 6 with value 6', ()=>{
      emptyHashTable.put(6, 'value 6');
      expect(emptyHashTable.buckets[6].head.value).toEqual('value 6');
    })
  });

  
  describe('test remove', () => {
    it('should emptyHashTable remove key 0', ()=>{
      emptyHashTable.remove(0);
      expect(emptyHashTable.buckets[0]).toBeUndefined();
    })

    it('should hashTable remove key 0', ()=>{
      hashTable.remove(0);
      expect(hashTable.buckets[0].head.value).toEqual('value 8');
      expect(hashTable.buckets[0].head.next).toBeNull();
    });

    it('should hashTable remove key 8', ()=>{
      hashTable.remove(8);
      expect(hashTable.buckets[0].head.value).toEqual('value 0');
      expect(hashTable.buckets[0].head.next).toBeNull();
    });
  });
});