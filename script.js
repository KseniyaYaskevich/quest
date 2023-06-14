let arr = ['12', '77', '123', '89', '444', '389', '215'];
console.log();

for (let i = 0; i < arr.length; i++) {
  if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
    console.log(arr[i]);
  }
}

for (let i = 2; i <= 100; i++) {
  let primeNum = true;

  for (let j = 2; j < i; j++) {

    if (i % j == 0) {
      primeNum = false;
      break;
    }
  }

  if (primeNum) {
    console.log(i, `Делители этого числа: 1 и ${i}`);
  }
}