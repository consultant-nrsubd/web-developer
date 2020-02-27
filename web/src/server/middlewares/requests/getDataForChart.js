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

  if (req.query.name != 'users') {
    return []
  }

  if ((req.query.metrics != 'users') && (req.query.metrics != 'sessions') && (req.query.metrics != 'norm_sessions')) {
    return []
  }

  if ((req.query.type != 'all') && (req.query.type != 'full') && (req.query.type != 'buh')) {
    return []
  }

  if ((req.query.source != 'all') && (req.query.source != 'internet')) {
    return []
  }

  return [
    {
      name: 'Все',
      data: getData(10)
    },
    {
      name: 'Локальный',
      data: getData(10)
    },
    {
      name: 'Сетевой',
      data: getData(10)
    }
  ];
}

module.exports = getDataForChart;
