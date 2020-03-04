import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HighchartsReact from 'highcharts-react-official';
import { Highcharts, defaultOptions } from '../services/highcharts';

const Root = styled.div`
  margin-top: 15px;
  width: 80%;
  position: relative;
  padding: 0px;
`;

const Chart = ({ title, data }) => {
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
    <Root>
      <HighchartsReact
        highcharts={Highcharts}
        options={optionsChart}
        constructorType = { 'stockChart' }
      />
    </Root>
  )
}


export default Chart;
