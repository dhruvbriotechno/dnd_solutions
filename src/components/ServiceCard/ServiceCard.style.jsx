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
    serviceItem: {
        position: 'relative',

        padding: '0 10px',

        "& .contentSec": {
            marginTop: '35px',
            position: 'absolute',
            "bottom":"20px","zIndex":"1", textAlign: 'center', "left":"0","right":"0",
            background: '#0000002e',

            "& .title": {
                fontSize: '1.5rem',
                color: '#fff',
                margin: '8px 0',

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

    imagesSecService: {
        position: 'relative',
        height: '240px',
        overflow: 'hidden',
        display: 'inline-block',

        "& img": {
            width: '100%',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
                transform: 'scale(1.2)',
            },
        },

        "& .MuiBadge-badge": {
            "top": "20px", "right": "30px", "padding": "15px 10px", "fontWeight": "800", "borderRadius": "20px"
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
        serviceItem: {

            "& .contentSec": {
                // marginTop: '15px',
                position: 'absolute'
            },

            imagesSecService: {
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