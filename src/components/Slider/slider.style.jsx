import { makeStyles } from "@mui/styles";
import { theme } from "../../theme";

export const useStyles = makeStyles(() => ({
  carouselContainer: {
    marginTop: theme.spacing(4),
    '& .slick-prev, & .slick-next': {
      zIndex: 1,
    },
    '& .slick-dots': {
      bottom: theme.spacing(2),
      '& li button:before': {
        fontSize: '12px',
      },
      '& li.slick-active button:before': {
        color: theme.palette.primary.main,
      },
    },
    '& .slick-prev': {
      left: '10px',
      zIndex: 1,
    },
    '& .slick-next': {
      right: '20px',
      zIndex: 1,
    },
    '& .slick-prev:before, & .slick-next:before': {
      color: 'black',
      fontSize: '30px',
    },
    '& .slick-dots': {
      bottom: '-25px',
    },
    '& .slick-dots li button:before': {
      fontSize: '12px',
    },
    '& .slick-dots li.slick-active button:before': {
      color: 'black',
    },
    '& .slick-dots li button:before':{
      fontSize:'8px'
    },
    //   "& .MuiContainer-root":{
    //     padding: '0'
    //   }
  },
  slide: {
    display: 'flex !important',
    justifyContent: 'center',
    alignItems: 'center',
    //   height: '400px',
    backgroundColor: '#f5f5f5',
    borderRadius: theme.shape.borderRadius,
    //   boxShadow: theme.shadows[2],
    padding: theme.spacing(0),
  },

  bannerImg: {
    width: '100%'
  }
}));