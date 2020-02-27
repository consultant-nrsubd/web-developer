import React, { useState, useEffect } from 'react';
import { getQuery } from '../../services/query-service'
import { makeStyles } from '@material-ui/core/styles';

import Header from '../header';
import Chart from '../chart'

import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  main: {
		width: '100%',
		backgroundColor: 'rgb(245, 245, 245)',
  },
	content: {
		width: '100%',
		display: 'flex',
		height: 'calc(100vh - 50px)',
		justifyContent: 'center'
	},
}));

const Main = () => {
	const classes = useStyles();

	const [info, setInfo] = useState();

	useEffect(() => {
		(async() => {
			const response = await getQuery(`/getDataForChart`, { name: 'users', metrics: 'users', type: 'all', source: 'all'});
			setInfo(response);
		})();
	},[])

	return (
	  <div className={classes.main}>
	    <Header page="main"/>
	    <div className={classes.content}>
			{
				info ? <Chart title="Количество пользователей" data={info} /> : <CircularProgress />
			}
	    </div>
	  </div>
  )
}

export default Main;
