const pageBody = document.querySelector('.page__body');
const firstTimer = pageBody.querySelector('#first-timer');
const secondTimer = pageBody.querySelector('#second-timer');

const updateElement = (container, content) => {
  container.textContent = content;
};

const formatDateFirstVersion = () => {
  let hourStrValue = 'часов';
  const date = new Date();
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long'
  };

  if (date.getHours() === 1 || date.getHours() === 21) {
    hourStrValue = 'час';
  }
  if (date.getHours() >= 2 && date.getHours() <= 4 || date.getHours() >= 22 && date.getHours() <= 24) {
    hourStrValue = 'часа';
  }

  customDate = date.toLocaleString('ru', options)[0].toUpperCase() + date.toLocaleString('ru', options).slice(1).replace(/г\./, 'года');
  resultStr = `Сегодня ${customDate}, ${date.getHours()} ${hourStrValue} ${date.getMinutes()} минут ${date.getSeconds()} секунд`;

  updateElement(firstTimer, resultStr);
};

const formatDateSecondVersion = () => {
  const date = new Date();

  resultStr = date.toLocaleString().replace(/,/i, ' -');

  updateElement(secondTimer, resultStr);
};

formatDateFirstVersion();
formatDateSecondVersion();

setInterval(formatDateFirstVersion, 1000);
setInterval(formatDateSecondVersion, 1000);
