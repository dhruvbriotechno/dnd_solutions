import { theme } from "../../../theme";

const { makeStyles } = require("@mui/styles");

export const useStyles = makeStyles(() => ({

  container10: {
    maxWidth: '100%',
    padding: '0 10px',
  },
  container100: {
    maxWidth: '100%',
    padding: '0 100px',
  },
  containerFluid: {
    maxWidth: '100%',
  },
  container1140: {
    maxWidth: '1140px',
    margin: '0 auto',
  },
  container1200: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  container1440:{
    maxWidth: '1470px',
    margin: '0 auto',
    padding:'0 15px'
  },
  container1920:{
    maxWidth: '1920px',
    margin: '0 auto',
  },
  container1320: {
    maxWidth: '1320px',
    // paddingLeft: 0,
    // paddingRight: 0,
    // backgroundColor: '#f0f0f0',
    // borderRadius: '8px',
    // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    // marginTop: theme.spacing(4),
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  heading: {
    marginBottom: theme.spacing(2),
  },

  [theme.breakpoints.down('db')]: {
    container10: {
      padding: '0 10px',
    },
    container100: {
      padding: '0 10px',
    },
    container1140: {
      padding: '0 10px',
    },
    container1320: {
      padding: '0 10px',
    }
  }

}));


