const {LinkedList, Node} = require('./completed');

describe('Binary tree', () =>{
  let linkedList;
  let emptyLinkedList;
  let oneNodeList;
  beforeEach(() => {
    const node0 = new Node(0);
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);
    node0.next = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    linkedList = new LinkedList();
    linkedList.head = node0;

    emptyLinkedList = new LinkedList();
    oneNodeList = new LinkedList();
    oneNodeList.head = new Node(0);
  });

  const getLinkedListWithCompleteLoop =() => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    node5.next = node1;

    const loop = new LinkedList();
    loop.head = node1;
    return loop;
  };

  const getLinkedListWithPatialLoop =() => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node2;

    const loop = new LinkedList();
    loop.head = node1;
    return loop;
  };

  const getLastNode = head => {
    let current = head;
    let prev = head;
    while(current){
      prev = current;
      current = current.next;
    }

    return prev;
  }

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
      const lastNode = getLastNode(linkedList.head);
      expect(lastNode.value).toEqual(200);
    })

    it('should emptyLinkedList add value 200 as head', () => {
      emptyLinkedList.addLast(200);
      expect(emptyLinkedList.head.value).toEqual(200);
    })
  });

  describe('test removeFirst', ()=>{
    it('should linkedList remove the first node of 0', ()=>{
      expect(linkedList.head.value).toEqual(0);
      linkedList.removeFirst();
      expect(linkedList.head.value).toEqual(1);
    })

    it('should oneNodeList remove first node of 0', ()=>{
      expect(oneNodeList.head.value).toEqual(0);
      oneNodeList.removeFirst();
      expect(oneNodeList.head).toBeNull();
    })

    it('should emptyLinkedList remove first null', ()=>{
      linkedList.removeFirst();
      expect(emptyLinkedList.head).toBeNull();
    })
  });

  describe('test removeLast', ()=>{
    it('should linkedList remove the last node of 5', ()=>{
      let lastNode = getLastNode(linkedList.head);
      expect(lastNode.value).toEqual(5);
      linkedList.removeLast();
      lastNode = getLastNode(linkedList.head);
      expect(lastNode.value).toEqual(4);
    })

    it('should oneNodeList remove last node of 0', ()=>{
      expect(oneNodeList.head.value).toEqual(0);
      oneNodeList.removeLast();
      expect(oneNodeList.head).toBeNull();
    })

    it('should emptyLinkedList remove last null', ()=>{
      linkedList.removeLast();
      expect(emptyLinkedList.head).toBeNull();
    })
  });

  describe('test contains', ()=>{
    it('should linkedList contain 0~5', ()=>{
      expect(linkedList.contains(0)).toBeTruesy;
      expect(linkedList.contains(1)).toBeTruesy;
      expect(linkedList.contains(2)).toBeTruesy;
      expect(linkedList.contains(3)).toBeTruesy;
      expect(linkedList.contains(4)).toBeTruesy;
      expect(linkedList.contains(5)).toBeTruesy;
    })

    it('should linkedList NOT contain 6', ()=>{
      expect(linkedList.contains(6)).toBeFalsy;
    })

    it('should oneNodeList contain 0', ()=>{
      expect(oneNodeList.contains(0)).toBeFalsy;
    })

    it('should oneNodeList NOT contain 1', ()=>{
      expect(oneNodeList.contains(1)).toBeFalsy;
    })

    it('should emptyLinkedList NOT contain 0', ()=>{
      expect(emptyLinkedList.contains(0)).toBeFalsy;
    })

  });

  describe('test size', ()=>{
    it('should linkedList have size of 6', () => {
      expect(linkedList.size()).toEqual(6);
    })

    it('should oneNodeList have size of 1', () => {
      expect(oneNodeList.size()).toEqual(1);
    })

    it('should emptyLinkedList have size of 0', () => {
      expect(emptyLinkedList.size()).toEqual(0);
    })
  });

  describe('test indexOf', ()=>{
    it('should linkedList have 0~5 at index of 0~5', ()=>{
      expect(linkedList.indexOf(0)).toEqual(0);
      expect(linkedList.indexOf(1)).toEqual(1);
      expect(linkedList.indexOf(2)).toEqual(2);
      expect(linkedList.indexOf(3)).toEqual(3);
      expect(linkedList.indexOf(4)).toEqual(4);
      expect(linkedList.indexOf(5)).toEqual(5);
    })

    it('should linkedList have 6 at index of -1', ()=>{
      expect(linkedList.indexOf(6)).toEqual(-1);
    })

    it('should oneNodeList have 0 at index of 0', ()=>{
      expect(oneNodeList.indexOf(0)).toEqual(0);
    })

    it('should oneNodeList have 1 at index of -1', ()=>{
      expect(oneNodeList.indexOf(1)).toEqual(-1);
    })

    it('should emptyLinkedList have 1 at index of -1', ()=>{
      expect(emptyLinkedList.indexOf(1)).toEqual(-1);
    })
  });

  describe('test reverse', ()=>{
    it('should linkedList reverse to be [5, 4, 3, 2, 1, 0]', () =>{
      linkedList.reverse()
      expect(linkedList.toArray()).toEqual([5, 4, 3, 2, 1, 0]);
    })

    it('should oneNodeList reverse to be [0]', () =>{
      oneNodeList.reverse()
      expect(oneNodeList.toArray()).toEqual([0]);
    })

    it('should emptyLinkedList reverse to be []', () =>{
      emptyLinkedList.reverse()
      expect(emptyLinkedList.toArray()).toEqual([]);
    })
  });

  describe('test valueFromEnd', ()=>{
    it('should linkedList have value of 5~0 at 0~5 from end', ()=>{
      expect(linkedList.valueFromEnd(0)).toEqual(5);
      expect(linkedList.valueFromEnd(1)).toEqual(4);
      expect(linkedList.valueFromEnd(2)).toEqual(3);
      expect(linkedList.valueFromEnd(3)).toEqual(2);
      expect(linkedList.valueFromEnd(4)).toEqual(1);
      expect(linkedList.valueFromEnd(5)).toEqual(0);
    })

    it('should linkedList have null at -1 from end', () => {
      expect(linkedList.valueFromEnd(-1)).toBeNull();
    })

    it('should linkedList have null at 6 from end', () => {
      expect(linkedList.valueFromEnd(6)).toBeNull();
    })

    it('should oneNodeList have 0 at 0 from end', () => {
      expect(oneNodeList.valueFromEnd(0)).toEqual(0);
    })

    it('should oneNodeList have null at 1 from end', () => {
      expect(oneNodeList.valueFromEnd(1)).toBeNull();
    })

    it('should emptyLinkedList have null at 0 from end', () => {
      expect(emptyLinkedList.valueFromEnd(0)).toBeNull();
    })

  });

  describe('test printMiddle', ()=>{});

  describe('test hasLoop1', ()=>{
    it('should linkedList have no loop', () => {
      expect(linkedList.hasLoop1()).toBeFalsy;
    })

    it('should emptyLinkedList have no loop', () => {
      expect(emptyLinkedList.hasLoop1()).toBeFalsy;
    })

    it('should completedLoop have loop', () => {
      const loop = getLinkedListWithCompleteLoop();
      expect(loop.hasLoop1()).toBeTruesy;
    })

    it('should partialLoop have loop', () => {
      const loop = getLinkedListWithPatialLoop();
      expect(loop.hasLoop1()).toBeTruesy;
    })
  });

  describe('test hasLoop2', ()=>{
    it('should linkedList have no loop', () => {
      expect(linkedList.hasLoop2()).toBeFalsy;
    })

    it('should emptyLinkedList have no loop', () => {
      expect(emptyLinkedList.hasLoop2()).toBeFalsy;
    })

    it('should completedLoop have loop', () => {
      const loop = getLinkedListWithCompleteLoop();
      expect(loop.hasLoop2()).toBeTruesy;
    })

    it('should partialLoop have loop', () => {
      const loop = getLinkedListWithPatialLoop();
      expect(loop.hasLoop2()).toBeTruesy;
    })
  });
});