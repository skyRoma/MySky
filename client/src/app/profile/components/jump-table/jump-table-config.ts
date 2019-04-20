export const COLUMNS = [
  { title: 'Номер', name: 'index', sticky: true },
  { title: 'Дата', name: 'date' },
  { title: 'Упражнение', name: 'exercise' },
  { title: 'Парашют', name: 'parachute' },
  { title: 'Возудшное судно', name: 'aircrafType' },
  { title: 'Высота', name: 'height' },
  { title: 'Время своб. падения', name: 'freeFallTime' },
  { title: 'Результат', name: 'result' },
];

export const DISPLAYED_COLUMNS = [
  'index',
  'date',
  'exercise',
  'parachute',
  'aircrafType',
  'height',
  'freeFallTime',
  'result',
  'edit',
];

export const DATE_OPTIONS = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
};

export const MOCK_DATA = new Array(40).fill({
  index: 1,
  date: new Date(),
  exercise: 'Точность',
  parachute: 'Мальва',
  aircrafType: 'Ан-2',
  height: 1200,
  freeFallTime: 15,
  result: 'H',
});
