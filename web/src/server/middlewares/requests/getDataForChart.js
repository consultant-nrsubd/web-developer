const getDataForChart = async (req, res) => {

  const getData = (length) => {
    const moment = require('moment');
    let data = [], date = moment('2020-02-27', 'YYYY-MM-DD');

    for (let i = 0; i < length; i++) {
      data.push({
        y: Math.floor(Math.random() * 20),
        x: +date.add(1, 'd').format('x')
      })
    }
    return data;
  }

  if (req.query.name != 'users_and_sessions') {
    return []
  }

  switch (req.query.context) {
    case 'metrics':
      if (!req.query.metrics && req.query.networking && req.query.set && req.query.source) {
        return [
          {
            name: 'Количество пользователей',
            data: getData(10)
          },
          {
            name: 'Количество сессий',
            data: getData(10)
          }
        ];
      } else {
        return [];
      }
      break;
    case 'networking':
      if (req.query.metrics && !req.query.networking && req.query.set && req.query.source) {
        return [
          {
            name: 'Все комплекты',
            data: getData(10)
          },
          {
            name: 'Локальный',
            data: getData(10)
          },
          {
            name: 'Сетевой',
            data: getData(10)
          },
          {
            name: 'Флеш',
            data: getData(10)
          }
        ];
      } else {
        return [];
      }
      break;
    case 'set':
      if (req.query.metrics && req.query.networking && !req.query.set && req.query.source) {
        return [
          {
            name: 'Все комплекты',
            data: getData(10)
          },
          {
            name: 'Полный',
            data: getData(10)
          },
          {
            name: 'Бухгалтерский',
            data: getData(10)
          },
          {
            name: 'Юридический',
            data: getData(10)
          },
          {
            name: 'Бюджетный',
            data: getData(10)
          },
          {
            name: 'Сводный региональный',
            data: getData(10)
          },
          {
            name: 'Пустой',
            data: getData(10)
          },
          {
            name: 'Неизвестно',
            data: getData(10)
          }
        ];
      } else {
        return [];
      }
      break;
    case 'source':
      if (req.query.metrics && req.query.networking && req.query.set && !req.query.source) {
        return [
          {
            name: 'Все данные',
            data: getData(10)
          },
          {
            name: 'Интернет-пополнение',
            data: getData(10)
          }
        ];
      } else {
        return [];
      }
      break;
    default:
      return []
  }
}

module.exports = getDataForChart;
