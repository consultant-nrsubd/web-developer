import React, { useState, useEffect } from 'react';
import { getQuery } from '../../services/query-service'
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

import Header from '../header';
import Chart from '../chart'

import CircularProgress from '@material-ui/core/CircularProgress';

const Root = styled.div`
  width: 100%;
  background-color: rgb(245, 245, 245);
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  height: calc(100vh - 50px);
  justify-content: center;
`;

const Main = () => {
	const [data, setData] = useState();

	useEffect(() => {
		(async() => {
			const response = await getQuery(`/getDataForChart`, { name: 'users_and_sessions', context: 'metrics', networking: 'all', set: 'all', source: 'all'});
			setData(response);
		})();
	},[])

	return (
	  <Root>
	    <Header page="main"/>
	    <Content>
			{
				data ? <Chart title="Количество пользователей и сессий" data={data} /> : <CircularProgress />
			}
	    </Content>
	  </Root>
  )
}

export default Main;
