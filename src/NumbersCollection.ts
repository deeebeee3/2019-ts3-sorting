import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  //data: number[];
  // constructor(data: number[]){
  //   this.data = data;
  // }

  constructor(public data: number[]) {
    //reference to constructor of Sorter (parent class) - running constructor of parent class
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}

// const collection = new NumbersCollection([1, 2, 3, 4]);
// collection.length;
