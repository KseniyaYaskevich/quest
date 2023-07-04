const pageBody = document.querySelector('body');

const dateNow = new Date();
const dateNewYear = new Date('01 jan 2024 00:00:00');

const getDayTime = () => {
  const hours = dateNow.getHours();
  let str = '';

  if (hours >= 0 && hours < 6) {
    str = 'Доброй ночи'
  }
  if (hours >= 6 && hours < 12) {
    str = 'Доброе утро'
  }
  if (hours >= 12 && hours < 18) {
    str = 'Добрый день'
  }
  if (hours >= 18 && hours < 24) {
    str = 'Добрый вечер'
  }
  return str;
};

const getWeekDay = () => {
  const dateString = dateNow.toLocaleString('ru', {
    weekday: 'long'
  });

  return dateString[0].toUpperCase() + dateString.slice(1);
};

const getCurrentTime = () => {
  return dateNow.toLocaleTimeString() + (dateNow.getHours() >= 12 ? ' P.M.' : ' A.M.');
};

const getRemainingTime = () => {
  const timeRemain = (dateNewYear - dateNow) / 1000;

  return Math.floor(timeRemain / 60 / 60 / 24);
};

pageBody.insertAdjacentHTML('afterbegin', `
  <div>
    <p>${getDayTime()}</p>
    <p>Сегодня: ${getWeekDay()}</p>
    <p>Текущее время: ${getCurrentTime()}</p>
    <p>До нового года осталось ${getRemainingTime()} дней</p>
  </div>
`);
