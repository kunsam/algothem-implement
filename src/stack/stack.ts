


export default class Stack{
  public capacity: number; // to create a queue of given capacity

  public front: any; // front item
  public rear: any; // last item
  public array: any[];

  constructor(capacity?: number) {
    this.capacity = capacity || 1000;
    this.array = [];
  }
  public push(item: any) {
    this.array.push(item);
  }
  public pop() {
    return this.array.pop();
  }
  public isFull() {
    return this.array.length === this.capacity;
  }
  public empty() {
    return this.array.length === 0;
  }
  public clear() {
    this.array = [];
  }
}