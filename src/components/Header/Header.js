import React from 'react';
import { Logo } from './Logo';
import LangSelector from './LangSelector';
import AuthButton from './AuthButton';
import Box from '@material-ui/core/Box';

export const Header = () => {
  return (
    <Box
      width="100%"
      height="4rem"
      paddingTop="10px" //20 in original
      margin="0 auto"
      maxWidth="1920px"
      position="relative"
      top={0}
      right={0}
      bottom={0}
      left={0}
      zIndex={10}
    >
      <Box
        pt=".25rem" // 0.5 in original
        height="auto"
        position="relative"
        mx="2.5rem" //3.5 in original
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        flexWrap="noWrap"
      >
        <Box flexGrow={1} mr="auto">
          <Logo />
        </Box>
        <Box mx={3}>
          <LangSelector />
        </Box>
        <Box>
          <AuthButton />
        </Box>
      </Box>
    </Box>
  );
};
