import { makeStyles } from "@mui/styles";

export const useStylesGloble = makeStyles((theme) => ({
    //   Margin 
    my40: {
        marginTop: '40px',
        marginBottom: '40px',
    },
    my70: {
        marginTop: '70px',
        marginBottom: '70px',
    },
    mt70: {
        marginTop: '70px',
    },
    mb70: {
        marginBottom: '70px',
    },
    mb40: {
        marginBottom: '40px'
    },
    mb30: {
        marginBottom: '30px',
    },
    rootServices: {
        padding: 10,
        "& .MuiSvgIcon-root": {
            fill: 'white'
        }
    },


    //   Padding 
    py40: {
        paddingTop: '40px',
        paddingBottom: '40px',
    },
    py70: {
        paddingTop: '70px',
        paddingBottom: '70px',
    },

    pt20: {
        paddingTop: '20px',
    },

    slide: {
        display: 'flex !important',
        justifyContent: 'center',
        alignItems: 'center',
        //   height: '400px',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        //   boxShadow: theme.shadows[2],
        padding: 0,
    },


    productSlider: {
        padding: '5px',
    },


    bannerImg: {
        width: '100%'
    }
}));