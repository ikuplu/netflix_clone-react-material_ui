import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    color: '#fff',
    padding: '2px 12px',
    textTransform: 'capitalize',
  },
}));

export default function AuthButton(props) {
  const classes = useStyles();

  return (
    <Box
      bgcolor="#e50914"
      lineHeight="normal"
      fontWeight={400}
      fontSize="12px"
      children="Sign In"
      textDecoration="none"
      cursor="pointer"
      border="none"
      borderRadius="3px"
    >
      <Button className={classes.button} children="sign in" />
    </Box>
  );
}
