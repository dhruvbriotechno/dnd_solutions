
const { makeStyles } = require("@mui/styles");

export const useStyles = makeStyles(() => ({
    modalStyle:{
        minHeight: '175px'
    },
    headerBox:{
        padding: '10px 20px',
        borderBottom: '1px solid grey',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      
        "& .title":{
            "fontSize":"18px","fontWeight":"600"
        }
    },

    closeBtn:{
        cursor: 'pointer'
    }


    
}));
