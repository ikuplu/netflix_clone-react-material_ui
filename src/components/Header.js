import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Logo } from './Logo';
import LangSelector from './LangSelector';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'transparent',
    boxShadow: 'none',
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Logo />
        <LangSelector />
      </Toolbar>
    </AppBar>
  );
};
