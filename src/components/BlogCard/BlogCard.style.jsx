import { makeStyles } from "@mui/styles";
import { theme } from "../../theme";

export const useStyles = makeStyles(() => ({

    // Blog 

    blogStyleParent: {
        // marginTop: '60px',
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        // gridGap: '10px',
    },
    blogItem: {
        padding: '0 10px',

        "& .contentSec": {
            marginTop: '35px',

            "& .title": {
                fontSize: '1.5rem',
                '&:hover': {
                    textDecoration: 'underline',
                    cursor: 'pointer'
                },
            },
            "& .description": {
                "color": "#767575", "fontSize": "15px", "marginBottom": "0", "fontFamily": "'Montserrat'"
            },
        },
    },

    imagesSecBlog: {
        height: '277px',
        overflow: 'hidden',
        display: 'inline-block',
        background: '#f7f7f7',
        width: '100%',
       

        "& img": {
            width: '100%',
            transition: 'transform 0.3s ease-in-out',
            maxHeight: '228px',
         
            '&:hover': {
                transform: 'scale(1.2)',
            },
        },

        "& .MuiBadge-badge": {
            "top":"20px","right":"30px","padding":"15px 10px","fontWeight":"800","borderRadius":"20px"
        },
    },




    // ====================================
    // ====================================

    
    [theme.breakpoints.down('md')]: {

        blogStyleParent: {
            gridTemplateColumns: 'auto auto',
            gridGap: '50px',
            
            // marginTop: '30px',
        },
        blogItem: {
            "& .contentSec": {
                marginTop: '15px',
            },

            imagesSecBlog: {
                height: 'auto',
            },
        },
    },

    [theme.breakpoints.down('sm')]: {
        blogStyleParent: {
            gridTemplateColumns: 'auto auto',
            gridGap: '50px',
            // marginTop: '30px',
        },
    },

}));