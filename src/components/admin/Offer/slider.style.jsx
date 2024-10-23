import { theme } from "../../../theme";
const { makeStyles } = require("@mui/styles");

export const useStyles = makeStyles(() => ({
    // container: {
    //   maxWidth: '1280px',
    //   margin: 'auto',
    //   padding: '32px', // Assuming theme.spacing(3) equals 48px, converting to 32px for simplicity
    // },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '15px', // Assuming theme.spacing(2) equals 32px
    },
    title: {
        fontSize: '26px',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
        padding: '16px 24px', // Assuming theme.spacing(1, 2) equals 16px top/bottom and 24px left/right
        fontWeight: 'bold',
        borderRadius: theme.shape.borderRadius,
        '&:hover': {
            opacity: 0.9,
        },
        display: 'flex',
        alignItems: 'center',
    },


    newTableHeader: {
        minWidth: '820px',
        "marginBottom": "10px",
        padding: '2px',

        "& .MuiGrid-item": {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '30px !important',
            fontWeight: 600,
            fontSize: '16px'
        }
    },

    newTableRow: {
        minWidth: '820px',
        '&:hover': {
            "boxShadow": "0 0 3px 0 gray"
        },

        "border": "0.5px solid #c7c7c7 !important", "marginBottom": "10px", "borderRadius": "6px",
        padding: '2px',

        "& .MuiGrid-item": {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '30px !important',
            fontWeight: 400,
            fontSize: '14px'
        }

    },


    actionIcons: {
        display: 'flex',
        gap: '8px', // Assuming theme.spacing(1) equals 8px
    },
    iconButton: {
        '&:hover': {
            transform: 'scale(1.1)',
        },
        transition: 'transform 0.3s',
    },

    // Delete Modal 
    deleteModalBody: {
        padding: '20px',

    },

    tableResponsive: {
        width: '100%',
        overflowX: 'scroll',
        "scrollbarWidth": "none", "MsOverflowStyle": "none",
        marginBottom: '50px'
    }
}));
