import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HighchartsReact from 'highcharts-react-official';
import { Highcharts, defaultOptions } from '../services/highcharts';

const useStyles = makeStyles(theme => ({
  chart: {
    marginTop: '15px',
    width: '80%',
    position: 'relative',
    padding: '0px'
  }
}));

const Chart = ({ title, data }) => {
  const classes = useStyles();
  const [optionsChart, setOptionsChart] = useState({
    ...defaultOptions,
  })

  useEffect(() => {
    setOptionsChart({
      ...defaultOptions,
      title: {
        ...defaultOptions.title,
        text: title
      },
      series: [
        ...data
      ]
    })
  }, [title, data])

  return (
    <div className={classes.chart}>
      <HighchartsReact
        highcharts={Highcharts}
        options={optionsChart}
        constructorType = { 'stockChart' }
      />
    </div>
  )
}


export default Chart;
