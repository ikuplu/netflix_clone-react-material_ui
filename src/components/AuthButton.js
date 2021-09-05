import React from 'react';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#e50914',
    color: '#fff',
  },
}));

export default function AuthButton(props) {
  const classes = useStyles(props);
  return (
    <Button className={classes.root} children="Sign In" variant="contained" />
  );
}
