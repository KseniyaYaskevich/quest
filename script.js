const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

const presentDay = new Date();
const pageBody = document.querySelector('body');

const createElement = () => {
  let container = document.createElement('div');

  week.forEach((item, i) => {
    let element = document.createElement('p');

    if (item === 'Суббота' || item === 'Воскресенье') {
      element.innerHTML = `<i>${item}</i>`;
    } else {
      element.textContent = item;
    }

    if (i + 1 === presentDay.getDay()) {
      element.innerHTML = `<b>${item}</b>`;
    }

    container.appendChild(element);
  });

  pageBody.appendChild(container);
};

createElement();
