import { theme } from "../../theme";

const { makeStyles } = require("@mui/styles");

export const useStyles = makeStyles(() => ({
  backside: {
    width: "100%",
    height: "73px",
    backgroundColor: "#fff !important",
    position: "fixed",
    top: "0",
    boxShadow: "0 2px 3px rgba(96, 96, 96, .1)",
    zIndex: "1111",
    "& .MuiPaper-root": {
      boxShadow: "0 2px 3px rgba(96, 96, 96, .1)",
    },
    "& .MuiToolbar-root.MuiToolbar-gutters": {
      height: '69px'
    }
  },
  appBar: {
    transition: "transform 0.9s ease-in-out",
    padding: "10px 0",
    backgroundColor: "#fff !important",
    "& .MuiToolbar-root": {
      backgroundColor: "#fff",
    },
    "& .MuiButton-root:hover": {
      border: "1px solid #000",
      color: "#000",
      textDecoration: 'none'
    },
    "& .MuiButton-root": {
      border: "1px solid #000",
      backgroundColor: "#060000",
      fontSize: "0.85rem",
      lineHeight: "30px",
      fontWeight: "600",
      textTransform: "uppercase",
      marginTop: "14px",
      marginLeft: "12px",
      padding: "5px 22px 4px",
      textTransform: "uppercase",
      borderRadius: "0",
      marginTop: "0",
      marginLeft: "0",
    },
  },
  appBarShrink: {
    transform: "scale(0.99)",
    padding: "4px 0",
    boxShadow: "unset !important",
    height: "67px !important",
    transition: "all 0.25s ease-in-out !important",
    width: "100% !important",
  },
  title: {
    flexGrow: 1,
  },
  menuItems: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
    marginLeft: 'auto',
    listStyle: "none",
    paddingLeft: "0",
    "& li a": {
      textDecoration: "none",
      textTransform: "uppercase",
      color: "#383838",
      fontSize: "0.8rem",
      fontWeight: "600",
      letterSpacing: "0.09375rem",
      position: "relative",
      "&::after": {
        content: '""',
        position: "absolute",
        width: "100%",
        transform: "scaleX(0)",
        height: "1px",
        bottom: "-5px",
        left: "0",
        backgroundColor: "#000",
        transformOrigin: "bottom right",
        transition: "transform 0.25s ease-out",
      },
      "&:hover::after": {
        transform: "scaleX(1)",
        transformOrigin: "bottom left",
      },
    },
    "& li a img": {
      width: "218px",
      position: "relative",
      top: "8px",
    },
    "& li.link": {
      "& .MuiBadge-badge": {
        top: "-8px",
        right: "4px",
      },
    },
  },

  menuRightSec:{
    marginLeft: 'auto',
  },
 

  noUnderline: {
    "& a": {
      textDecration:'none',
      "&::after": {
        content: 'none',
        width:'0px !important'
      },
    },
    "& button": {
      "&::after": {
        content: 'none',
      },
    },
  },
  rightSideMenu: {
    margin: '0 !important',
    marginLeft: 'auto !important'
  },

  adminMenuItems:{
    marginLeft: '10% !important'
  },
  
  phoneIcon: {
    display: "none",
  },
  logoLeftSide: {
    "& img": {
      maxWidth: "200px",
      width: 'auto',
      height: '69px'
    },
  },
  [theme.breakpoints.down("db")]: {
    menuItems: {
      gap: '0',
      "& li.link": {
        display: "none",
      },
      "& li a img": {
        width: "167px",
      },
    },
    appBar: {
      "& .MuiButton-root": {
        display: "none",
      },
    },
    phoneIcon: {
      display: "block",
      color: "#a9a9a9",
      cursor: "pointer",
      marginLeft: '50px'
    },
  },
}));
