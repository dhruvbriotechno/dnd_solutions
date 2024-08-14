import { makeStyles } from "@mui/styles";
import { theme } from "../../theme";

export const useStyles = makeStyles(() => ({

    parentVerticalTab: {
        backgroundColor: 'transparent !important',

        "& .vertical-tab-content": {
            width: '500px !important',
            "& .MuiBox-root": {
                backgroundColor: '#fff'
            }
        },
        "& .MuiTabs-scroller": {
            minWidth: '240px !important'
        },
        "& .MuiButtonBase-root": {
            "cursor": "pointer", "fontSize": "24px", "fontWeight": "700", "color": "#000", "backgroundColor": "#f4f4f4",
            "textTransform":"capitalize",
            "borderRadius":"30px 0px 0px 30px","padding":"18px 0",
            marginBottom: '8px'
        },

        "& .MuiTab-textColorPrimary.Mui-selected":{
            color: '#fff',
            backgroundColor: '#3F5F26',
            fontWeight: 700,
        }
    }
}))