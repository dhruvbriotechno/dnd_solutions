// import { theme } from "../../theme";

const { makeStyles } = require("@mui/styles");

export const useStyles = makeStyles(() => ({
    login:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        // minHeight:'100vh'
        minHeight:'84vh'
    },
    loginbox:{
        maxWidth:'350px',
        width:'100%',
        padding:'40px',
    },
    title:{
        display:'flex',
        justifyContent:'center'
    },

    loginBox: {
        width: '400px',
        maxWidth: '95%',
        margin: '0 auto'
    }


}));
