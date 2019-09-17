const LinkedList = require('./completed');

describe('Binary tree', () =>{
  let linkedList;
  let emptyLinkedList;
  beforeEach(() => {
    linkedList = new LinkedList();
    linkedList.addLast(1);
    linkedList.addLast(2);
    linkedList.addLast(3);
    linkedList.addLast(4);
    linkedList.addLast(5);
    linkedList.addFirst(0);

    emptyLinkedList = new LinkedList();
  });

  describe('test toArray', ()=>{
    it('should linkedList return array [0, 1, 2, 3, 4, 5]', () => {
      expect(linkedList.toArray()).toEqual([0, 1, 2, 3, 4, 5]);
    })

    it('should emptyLinkedList return empty array', () => {
      expect(emptyLinkedList.toArray()).toEqual([]);
    })
  });

  describe('test addFirst', ()=>{
    it('should linkedList add value 100 as head', () => {
      linkedList.addFirst(100);
      expect(linkedList.head.value).toEqual(100);
    })

    it('should emptyLinkedList add value 100 as head', () => {
      emptyLinkedList.addFirst(100);
      expect(emptyLinkedList.head.value).toEqual(100);
    })
  });

  describe('test addLast', ()=>{
    it('should linkedList add value 200 at back', () => {
      linkedList.addLast(200);
      let current = linkedList.head;
      let prev = linkedList.head;
      while(current){
        prev = current;
        current = current.next;
      }
      expect(prev.value).toEqual(200);
    })

    it('should emptyLinkedList add value 200 as head', () => {
      emptyLinkedList.addLast(200);
      expect(emptyLinkedList.head.value).toEqual(200);
    })
  });

  describe('test removeFirst', ()=>{});

  describe('test removeLast', ()=>{});

  describe('test contains', ()=>{});

  describe('test size', ()=>{});

  describe('test indexOf', ()=>{});

  describe('test reverse', ()=>{});

  describe('test nodeFromEnd', ()=>{});

  describe('test printMiddle', ()=>{});

  describe('test hasLoop', ()=>{});
});