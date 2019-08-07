class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return; // with void method can return early because not returning a actual thing i.e.: return 'something'
    }

    let tail = this.head; //reference to first node in our chain

    //while head node has a tail property. then advance that tail variable
    while (tail.next) {
      tail = tail.next;
    }

    //add this new node to the next property of the very last node in chain.
    tail.next = node;
  }

  //getter
  get length(): number {
    //if list is empty return 0
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;

    //keep incrementing length variable until we reach end of list, then break out of loop
    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  at(index: number): Node {
    //if linked list is empty and were trying to get some value out of it
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;
    let node: Node | null = this.head; //specify that this.head assignment to variable can either be node or null

    //while we have a node
    while (node) {
      //if we find the node at the index were looking for then return it
      if (counter === index) {
        return node;
      }

      //otherwise continue the while loop
      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    //if we don't have a head element and list is empty
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  //simplified method to swap node values
  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    //if we don't have a head and therefore list is empty
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
