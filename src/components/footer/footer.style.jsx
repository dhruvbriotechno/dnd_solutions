import { makeStyles } from "@mui/styles";
import { theme } from "../../theme";

export const useStyles = makeStyles(() => ({
    footerStyle: {
        "paddingTop": "50px", "paddingBottom": "25px", "background": "black", "color": "white"
    },
    row: {
        "display": "grid", "gridGap": "40px",
        "gridTemplateColumns": "repeat(3, 1fr)",

        "& .footer-form": {
            marginBottom: '20px',
            "& p": {
                "fontSize": "1rem", "marginTop": "25px", "marginBottom": "1rem", "lineHeight": "25px"
            }
        }
    },

    titleHead: {
        "lineHeight": "1", "marginBottom": "25px", "color": "white", "fontSize": "1.625rem"
    },

    quicklinks: {
        "& .link": {
            display: 'block',
            marginBottom: '10px'
        }
    },

    socialLinks: {
        "display": "flex",
        "gridGap": "30px",
        cursor: 'pointer'
    },

    // ====================================
    // ====================================
    [theme.breakpoints.down('md')]: {
        row: {
            "gridTemplateColumns": "repeat(1, 1fr)",
            "gridGap": "40px",
            "& .footer-form": {
                marginBottom: '0px',
            }
        },

        rowBottom: {
            marginTop: '40px'
        }
    },

    [theme.breakpoints.down('sm')]: {
        footerStyle:{
            textAlign: 'center'
        },
        socialLinks: {
            justifyContent: 'center'
        }
    }

}))