import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Logo } from './Logo';
import LangSelector from './LangSelector';
import AuthButton from './AuthButton';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '.5rem',
    height: 'auto',
    position: 'relative',
    margin: '0 3.5rem',
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <div style={{ width: '100%' }}>
      <Box
        className={classes.root}
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Box flexGrow={1}>
          <Logo />
        </Box>
        <Box>
          <LangSelector />
        </Box>
        <Box>
          <AuthButton />
        </Box>
      </Box>
    </div>
  );
};
