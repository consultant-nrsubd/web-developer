import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '50px',
    width: '100%',
    backgroundColor: '#1976d2',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.24)',
    color: '#fff',
    position: 'relative',
  },
	name: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    left: '30px'
	},
  shortName: {
    fontSize: '30px',
    fontWeight: 'bold'
  },
  fullName: {
    fontSize: '12px',
    lineHeight: '12px',
    marginLeft: '3px'
  },
}));

const Header = ({ page }) => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div className={classes.name}>
        <Typography className={classes.shortName}>СМС</Typography>
        <Typography className={classes.fullName}>Система<br/>мониторинга статистики</Typography>
      </div>
    </header>
  );
};

export default Header;
