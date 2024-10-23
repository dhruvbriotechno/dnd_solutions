import { theme } from "../../theme";

const { makeStyles } = require("@mui/styles");


export const useStyles = makeStyles(() => ({
    
    // menuLink:{"textDecoration":"none","color":"inherit"},
    // activeLink:{"fontWeight":"bold","color":"#1976d2","backgroundColor":"#f0f0f0"},

    drawerStyle:{
        "& .MuiCollapse-root.MuiCollapse-vertical":{
            paddingLeft: '20px'
        }
        
    },

    wsanimatedArrow: {
        "cursor": "pointer", "width": "30px", "height": "25px", "position": "relative",

        "& span": {
            "height": "3px", "width": "22px", "background": "#a9a9a9", "position": "absolute", top: 9, "display": "block", "content": "''"
        },
        "& span:before": {
            "top": "-8px", "width": "26px",
            "cursor": "pointer", "height": "3px", "background": "#a9a9a9", "position": "absolute", "display": "block", "content": "''"
        },
        "& span:after": {
            "bottom": "-8px", "width": "20px",
            "cursor": "pointer", "height": "3px", "background": "#a9a9a9", "position": "absolute", "display": "block", "content": "''"
        },

      
    },

    bookBtn: {
        backgroundColor: '#000',
        "&& a": {
            color: '#fff'
        }
    },
    parentUl: {
        "& .MuiListItemButton-root": {
            padding: '3px 6px'
        },

        "& .MuiBadge-badge": {
            "top": "7px",
        },

    },

    closeBtn: {
        backgroundColor: '#fff'
    },
    menuLink: {
        "color": "#666",
        "display": "block", "fontSize": "0.9rem", "fontWeight": "600", "letterSpacing": "0.09375rem", "textTransform": "uppercase", "margin": "0 9px", "lineHeight": "20px", "textDecoration": "none",
        padding: '10px 0'

    },

    [theme.breakpoints.up('db')]: {
        wsanimatedArrow: {
            display: 'none'
        },
       
    },



}));


