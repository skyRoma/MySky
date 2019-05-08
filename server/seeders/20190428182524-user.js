'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Users', [
      {
        id: 'da074df9-75d0-4a60-8b4c-90a184aa1d67',
        firstName: 'Карпов',
        lastName: 'Устин',
        email: 'karpov@mail.com',
        password: 'mockValue',
        phoneNumber: '80299458855',
        roleId: 2,
      },
      {
        id: '8d345b2e-babd-4c0c-be0d-4f906a9f830a',
        firstName: 'Доронин',
        lastName: 'Филипп',
        email: 'doronin@mail.com',
        password: 'mockValue',
        phoneNumber: '80298140657',
        roleId: 1,
      },
      {
        id: '4a9f0ff8-add2-4965-93c8-b8b1266f93e7',
        firstName: 'Кулибаба',
        lastName: 'Мирослав',
        email: 'kulibaba@mail.com',
        password: 'mockValue',
        phoneNumber: '80448343856',
        roleId: 1,
      },
      {
        id: '0b040700-7e14-415e-9694-f4459cbf05d6',
        firstName: 'Зыков',
        lastName: 'Григорий',
        email: 'zikov@mail.com',
        password: 'mockValue',
        phoneNumber: '80292413171',
        roleId: 1,
      },
      {
        id: '388a8095-c0af-42a6-ad05-d876616d5fbc',
        firstName: 'Жерар',
        lastName: 'Веселов',
        email: 'veselov@mail.com',
        password: 'mockValue',
        phoneNumber: '80257805891',
        roleId: 1,
      },
      {
        id: '241755b2-4ee2-4dd1-99ca-45b24c47e6a2',
        firstName: 'Терентьев',
        lastName: 'Огюст',
        email: 'terent@mail.com',
        password: 'mockValue',
        phoneNumber: '80253266662',
        roleId: 1,
      },
      {
        id: '0a2eb7e2-982b-4284-94e9-068aa3555683',
        firstName: 'Трясило',
        lastName: 'Мирослав',
        email: 'triselo@mail.com',
        password: 'mockValue',
        phoneNumber: '80334486589',
        roleId: 1,
      },
      {
        id: 'cb4655a4-9c05-4707-83e7-d28e4462ac3e',
        firstName: 'Фомин',
        lastName: 'Ефим',
        email: 'fomin@mail.com',
        password: 'mockValue',
        phoneNumber: '80298264030',
        roleId: 1,
      },
      {
        id: '9415855f-f115-4ca9-8192-25466dac7ccc',
        firstName: 'Егоров',
        lastName: 'Тарас',
        email: 'egorov@mail.com',
        password: 'mockValue',
        phoneNumber: '80442151223',
        roleId: 1,
      },
      {
        id: '03caa29c-9050-4528-a7e9-98f97a1f0eb0',
        firstName: 'Гущин',
        lastName: 'Степан',
        email: 'gishin@mail.com',
        password: 'mockValue',
        phoneNumber: '80254172262',
        roleId: 1,
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
