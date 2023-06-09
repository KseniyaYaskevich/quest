const num = 266219;
let total = 1;

const arrayOfNumbers = num.toString().split('').map(Number);

arrayOfNumbers.forEach((elem) => {
  total *= elem;
});

console.log(`Произведение цифр числа ${num} -`, total);
console.log(`Полученный результат возвести в степень 3 -`, total ** 3);
console.log(`Вывести в консоль первые 2 цифры полученного числа -`, (total ** 3).toString().slice(0, 2));