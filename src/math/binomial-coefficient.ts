


export function binomialCoefficient(n: number, k: number) {
  let res = 1;
  if (k > n - k) k = n - k;
  for (let i = 0; i < k; ++i) { 
      res *= (n - i); 
      res /= (i + 1); 
  }
  return res;
}

binomialCoefficient(4, 1);
for (let i = 0; i < 3; ++i) { 
  console.log(i, 'iiiii')
}
for (let i = 0; i < 3; i++) { 
  console.log(i, 'iiiii22')
}