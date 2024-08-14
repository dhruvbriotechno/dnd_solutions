import { Box } from '@mui/material';
import React from 'react';
import { useStyles } from './CustomContainer.style';

export const Container10 = ({ children, className }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container10 + ' ' + className}>
      {children}
    </Box>
  );
};

export const Container100 = ({ children, className }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container100 + ' ' + className}>
      {children}
    </Box>
  );
};

export const Container1140 = ({ children, className }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container1140 + ' ' + className}>
      {children}
    </Box>
  );
};
export const Container1200 = ({ children, className }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container1200 + ' ' + className}>
      {children}
    </Box>
  );
};
export const Container1440 = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container1440}>
      {children}
    </Box>
  );
};
export const Container1920 = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container1920}>
      {children}
    </Box>
  );
};


export const Container1320 = ({ children, className }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container1320 + ' ' + className}>
      {children}
    </Box>
  );
};

export const ContainerFluid = ({ children, className }) => {
  const classes = useStyles();
  return (
    <Box className={classes.containerFluid + ' ' + className}>
      {children}
    </Box>
  );
};



