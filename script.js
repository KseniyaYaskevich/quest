const num = 266219;
let total = 1;

const arrayOfNumbers = num.toString().split('').map(Number);

arrayOfNumbers.forEach((elem) => {
  total *= elem;
});

console.log(`Произведение цифр числа ${num} -`, total);
console.log(`Полученный результат возвести в степень 3 -`, total ** 3);
console.log(`Вывести в консоль первые 2 цифры полученного числа -`, (total ** 3).toString().slice(0, 2));

// УРОК 3

//1
let lang = 'en';
let weekDays = [];
weekDays.ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
weekDays.en = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let result;

//1a) 
if (lang === 'ru') {
  result = weekDays.ru;
} else {
  result = weekDays.en;
}

console.log('a) через if:', result.join(', '));

//1b) 
switch (lang) {
  case 'ru':
    result = weekDays.ru;
    break;
  case 'en':
    result = weekDays.en;
    break;
  default:
    result = weekDays.ru;
    break;
}

console.log('b) через switch-case:', result.join(', '));

//1c)
result = weekDays[lang];

console.log('c) через многомерный массив:', result.join(', '));

//2
let namePerson = 'Кто-то другой';

let output = namePerson === 'Артем' ? console.log('Директор') :
  namePerson === 'Александр' ? console.log('Преподаватель') : console.log('Студент');