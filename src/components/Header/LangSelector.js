import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import LanguageIcon from '@material-ui/icons/Language';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  formControl: {
    background: 'transparent',
    display: 'inline-block',
  },

  nativeSelect: {
    color: '#fff',
    fontSize: '12px',
    maxWidth: '80px',
  },

  langIcon: {
    marginRight: theme.spacing(0.25),
    fontSize: '.75rem',
    display: 'inline-block',
    color: 'white',
    transform: 'translateY(2px)',
  },

  icon: {
    color: 'white',
    margin: 0,
    padding: 0,
    fontSize: '1.5rem',
    transform: 'translateX(10px)',
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
    <Box
      className={classes.root}
      border={1}
      borderColor="white"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="noWrap"
    >
      <FormControl className={classes.formControl}>
        <LanguageIcon className={classes.langIcon} />
        <NativeSelect
          variant="outlined"
          disableUnderline
          className={classes.nativeSelect}
          classes={{
            icon: classes.icon,
          }}
          defaultValue="English"
          inputProps={{
            lang: 'lang',
          }}
        >
          <Box component="option" value="English">
            English
          </Box>
          <Box component="option" value="Nederlands">
            Nederlands
          </Box>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
