const { makeStyles } = require("@mui/styles");

export const useStyles = makeStyles(() => ({
    root: {
        "& span, p": {
            fontSize: '1.1rem !important',
            fontWeight: '400 !important',
            color: '#383838 !important'
        }
    },

    productTitle: {
        fontSize: '2.2rem !important',
        fontWeight: '600 !important',
        color: '#0a7639 !important'
    },

    secTitle:{
        fontSize: '1.5rem !important',
        fontWeight: '500 !important',
        color: '#000 !important'
    },

    listText: {

    }
}))