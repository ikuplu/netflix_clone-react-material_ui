import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import LanguageIcon from '@material-ui/icons/Language';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid grey',
  },

  formControl: {
    margin: theme.spacing(2),
    background: 'transparent',
    display: 'inline-block',
  },

  langIcon: {
    marginRight: theme.spacing(0.5),
    fontSize: '.75rem',
    color: 'black',
    display: 'inline-block',
  },
}));

export default function LangSelector() {
  const classes = useStyles();
  const [lang, setLang] = React.useState('');

  const handleChange = (event) => {
    const lang = event.target.lang;
    setLang(lang);
  };

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <LanguageIcon className={classes.langIcon} color="primary" />
        <NativeSelect
          disableUnderline
          className={classes.nativeSelect}
          defaultValue="English"
          inputProps={{
            lang: 'lang',
          }}
        >
          <option value="Nederlands">Nederlands</option>
          <option value="English">English</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
