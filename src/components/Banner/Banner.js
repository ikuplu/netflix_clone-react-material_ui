import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    maxWidth: '100%',
    transform: 'none',
    border: 0,
    background: '0 0',
    zIndex: 0,
  },

  imgGradient: {
    height: '100%',
    background: 'rgba(0,0,0,.4)',
    backgroundImage:
      'linear-gradient(to top,rgba(0,0,0,8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,8) 100%)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
}));

export const Banner = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box
        position="absolute"
        top="-100px"
        right={0}
        bottom={0}
        left={0}
        zIndex={0}
        overflow="hidden"
      >
        <Box
          height="762.667px" // value comes from the original website
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
        >
          <img
            className={classes.img}
            src="https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/897182ab-a592-4015-9372-5047825c92df/NL-en-20210823-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/897182ab-a592-4015-9372-5047825c92df/NL-en-20210823-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/897182ab-a592-4015-9372-5047825c92df/NL-en-20210823-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/897182ab-a592-4015-9372-5047825c92df/NL-en-20210823-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
            alt=""
          />
          <div className={classes.imgGradient} />
        </Box>
      </Box>
    </Box>
  );
};
