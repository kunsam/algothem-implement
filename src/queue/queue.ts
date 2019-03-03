


export default class Queue{
  public capacity: number; // to create a queue of given capacity

  public front: any; // front item
  public rear: any; // last item
  public array: any[];

  constructor(capacity?: number) {
    this.capacity = capacity || 1000;
    this.array = [];
  }
  public push(item: any) {
    this.Enqueue(item);
  }
  public Enqueue(item: any) {
    this.array.push(item);
    this.front = this.array[0];
    this.rear = this.array[this.array.length - 1];
  }
  public pop() {
    return this.Dequeue();
  }
  public Dequeue() {
    return this.array.shift();
  }
  public isFull() {
    return this.array.length === this.capacity;
  }
  public empty() {
    return this.array.length === 0;
  }
}