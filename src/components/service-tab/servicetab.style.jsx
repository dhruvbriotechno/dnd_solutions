import { makeStyles } from "@mui/styles";
import { theme } from "../../theme";

export const useStyles = makeStyles(() => ({

    root: {
        flexGrow: 1,
        paddingTop: '40px',
        "& .MuiButtonBase-root":{
            color:'grey',
            fontWeight:700
        },
        "& .MuiTabs-indicator":{
            display:'none'
        },
    },
    tab: {
        textTransform: 'none',
        fontSize: '20px',
        marginRight: '20px',
        border: 'none',
        '&.Mui-selected': {
            color:'#383838 !important' ,
            fontWeight:700
        },
    },
    tabs: {
        indicator: {
            display: 'none !important',
        },
    },
    // tabPanel: {
    //     padding: '20px',
    // },
    ServiceImg: {
        width: '100%'
    },
    tabContenth3: {
        color: '#373b4d',
        fontSize: '24px',
        fontWeight: '600',
        margin: '0',
        borderTop: '2px solid #b39d05',
        paddingTop: '20px',
    },
    firstH3NoBorder: {
        borderTop: 'none', 
    },
    tabContentp: {
        fontSize: '17px',
        marginTop: '0',
        marginBottom: '16px',
        fontWeight: '400',
        color: 'darkgray'
    },
    tabContent:{
        paddingBottom:'50px',
        paddingTop:'50px'
    },

    
    // ====================================
    // ====================================
    [theme.breakpoints.down('md')]: {
        root: {
            paddingTop: '15px !important',
        },
        tabContent:{
            paddingTop:'20px',
            paddingBottom:'0'
        },
        tabContentp:{
            marginBottom:'5px'
        },
        tabContenth3:{
            paddingTop:'10px',
            marginTop:'10px',
            fontSize:'20px'
        },
        firstH3NoBorder:{
            marginTop:'0'
        },
       
    },
}));