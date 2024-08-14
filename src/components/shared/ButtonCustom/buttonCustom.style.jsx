import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    buttonBorder: {
        "fill": "#000000", 
        "color": "#000000 !important", 
        "backgroundColor": "#FFFFFF !important", 
        "borderStyle": "solid !important", 
        "borderWidth": "1px 1px 1px 1px !important", 
        "borderColor": "#000000 !important", 
        "borderRadius": "1px 1px 1px 1px !important",
        textTransform: 'capitalize  !important',

        "display":"inline-flex",
        "lineHeight":"1 !important",
        "fontSize":"15px !important",
        "padding":"12px 24px !important",
        "textAlign":"center",
        "transition":"all .3s !important"
    },

    buttonTrans:{
        "fill": "#fff", 
        "color": "#fff !important", 
        "backgroundColor": "transparent", 
        "borderStyle": "solid !important", 
        "borderWidth": "1px 1px 1px 1px !important", 
        "borderColor": "#fff !important", 
        "borderRadius": "1px 1px 1px 1px !important",
        textTransform: 'capitalize  !important',

        "display":"inline-flex",
        "lineHeight":"1 !important",
        "fontSize":"15px !important",
        "padding":"12px 24px !important",
        "textAlign":"center",
        "transition":"all .3s !important"
    },

    buttonFullBlack:{
        "fill": "#000000", 
        "color": "#FFFFFF !important", 
        "backgroundColor": "#000 !important", 
        "borderStyle": "solid !important", 
        "borderWidth": "1px 1px 1px 1px !important", 
        "borderColor": "#000000 !important", 
        "borderRadius": "1px 1px 1px 1px !important",
        textTransform: 'capitalize  !important',

        "display":"inline-flex",
        "lineHeight":"1 !important",
        "fontSize":"15px !important",
        "padding":"12px 24px !important",
        "textAlign":"center",
        "transition":"all .3s !important",
        width: '100%',

    }

}));