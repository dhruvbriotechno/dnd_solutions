import { makeStyles } from "@mui/styles";
import { theme } from "../../../theme";
import productBannerBg from "../../../assets/img/main-slider/2.jpg"

export const useStyles = makeStyles(() => ({
    
    blackBg:{
        backgroundColor: 'black'
    },

    productBanner:{
        backgroundImage: `url(${productBannerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: '3rem',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    },
   
  


    // ====================================
    // ====================================
    [theme.breakpoints.down('md')]: {
       
    },
    [theme.breakpoints.down('sm')]: {
       

    },
    [theme.breakpoints.down('xs')]: {
       
    },
}));