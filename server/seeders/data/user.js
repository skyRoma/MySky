const bcrypt = require('bcrypt-nodejs');
const uuidv4 = require('uuid/v4');

const FIRST_NAMES = [
  'Антон',
  'Тимур',
  'Елизар',
  'Зиновий',
  'Онисим',
  'Дмитрий',
  'Тимофей',
  'Аристарх',
  'Агап',
  'Глеб',
  'Моисей',
  'Касьян',
  'Андриян',
  'Егор',
  'Вячеслав',
  'Лукьян',
  'Эмиль',
  'Федосий',
  'Евграф',
  'Карл',
  'Артем',
  'Потап',
  'Андрон',
  'Ростислав',
  'Рубен',
  'Данила',
  'Чеслав',
  'Виктор',
  'Прокл',
  'Фадей',
  'Фома',
  'Эммануил',
  'Даниил',
  'Мир',
  'Юлий',
  'Мартын',
  'Варфоломей',
  'Олег',
  'Кузьма',
  'Михаил',
  'Семен',
  'Капитон',
  'Осип',
  'Георгий',
  'Радислав',
  'Наум',
  'Модест',
  'Иван',
  'Севастьян',
  'Ярослав',
];

const LAST_NAMES = [
  'Бендлин',
  'Яламов',
  'Ожогин',
  'Воронов',
  'Теплов',
  'Коротаев',
  'Седов',
  'Стрекалов',
  'Травин',
  'Шурупин',
  'Жербин',
  'Уксюзов',
  'Лясковец',
  'Явленский',
  'Корбылев',
  'Мусорин',
  'Пищальников',
  'Грибанов',
  'Кидирбаев',
  'Хомичев',
  'Илюхин',
  'Сайтахметов',
  'Ельчуков',
  'Каганович',
  'Попков',
  'Папанов',
  'Заславский',
  'Ассоров',
  'Иванцов',
  'Эссен',
  'Лидин',
  'Дворников',
  'Дубинкин',
  'Амелин',
  'Набоков',
  'Двойнев',
  'Шапкин',
  'Валуев',
  'Ядренников',
  'Батищев',
  'Вельяминов',
  'Галдин',
  'Мячин',
  'Куцак',
  'Чумаков',
  'Жилов',
  'Щавлев',
  'Дубровский',
  'Барсуков',
  'Славский',
];

function makeEmail(index) {
  if (index === 0) {
    return 'admin@mail.com';
  }
  if (index === 1) {
    return 'sport@mail.com';
  }
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < 7; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result + '@mail.com';
}

function makePassword(index) {
  if (index === 0) {
    return bcrypt.hashSync('adminadmin', bcrypt.genSaltSync(10));
  }
  if (index === 1) {
    return bcrypt.hashSync('sportsport', bcrypt.genSaltSync(10));
  }
  return bcrypt.hashSync('pa$$w0rd', bcrypt.genSaltSync(10));
}

function makeRoleId(index) {
  if (index === 0) {
    return 1;
  }
  if (index === 1) {
    return 3;
  }
  return 2;
}

function makePhoneNumber() {
  let result = '';
  const characters = '0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < 7; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return '8029' + result;
}

function makeUsers(count) {
  const USER_IDS = new Array(count).fill(null).map(() => uuidv4());
  const USERS = new Array(count).fill(null).map((item, i) => {
    return {
      id: USER_IDS[i],
      firstName: FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)],
      lastName: LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)],
      email: makeEmail(i),
      password: makePassword(i),
      phoneNumber: makePhoneNumber(),
      roleId: makeRoleId(i),
    };
  });
  return { USERS, USER_IDS };
}

//max value is 250
const { USERS, USER_IDS } = makeUsers(100);

module.exports = { USERS, USER_IDS };
