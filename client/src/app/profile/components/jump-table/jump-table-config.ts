export const COLUMNS = [
  { title: 'Номер', name: 'id', sticky: true },
  { title: 'Дата', name: 'date' },
  { title: 'Упражнение', name: 'exercise' },
  { title: 'Парашют', name: 'parachute' },
  { title: 'Возудшное судно', name: 'aircraft' },
  { title: 'Высота', name: 'height' },
  { title: 'Время своб. падения', name: 'freeFallTime' },
  { title: 'Результат', name: 'result' },
];

export const DISPLAYED_COLUMNS = [
  'id',
  'date',
  'exercise',
  'parachute',
  'aircraft',
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
