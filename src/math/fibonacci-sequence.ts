


export default function fibonacci(digit: number) {
  const index = 15;

  const f0 = 1;
  const f1 = 1;
  const sequence = [f0, f1];

  for (let i = 2; i < digit; i++) {
    sequence.push(0);
  }

  for (let i = 2; i < index; i++) {
    sequence[i] = sequence[i - 2] + sequence[i - 1];
  }
  return sequence;
}