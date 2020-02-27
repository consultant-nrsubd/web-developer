module.exports = function setup(app) {

  app.get('/api/getDataForChart', async (req, res) => {
    const getDataForChart = require('./requests/getDataForChart');
    const data = await getDataForChart(req, res);
    res.send(data);
  });
};
