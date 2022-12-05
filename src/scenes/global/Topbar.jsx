import { Box, IconButton, useTheme } from  "@mui/material";
import {useContext} from "react";
import { ColorModeContext} from "../../theme";
// import InputBase from "@mui/material/InputBase";
import LightModeOutLinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutLinedIcon from "@mui/icons-material/DarkModeOutlined";
// import NotificationsOutLinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutLinedIcon from "@mui/icons-material/PersonOutlined";
// import SearchIcon from "@mui/icons-material/Search";
import ExportPdf from "../../components/ExportPdf";

const Topbar = () => {
    const theme = useTheme();
    // const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);


    return (

    <Box display="flex" justifyContent="space-between" p={2}>

    {/* SEARCH BAR */}

    {/* <Box 
        display="flex" 
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
        >
        <InputBase sx={{ml:2, flex:1}} placeholder="Search" />
        <IconButton type="button" sx={{ p:1 }}>
            <SearchIcon/>
        </IconButton>
    </Box> */}

    {/* Dowmload PDF */}

    <ExportPdf rootElementId="capture" downloadFileName="downloadpage" />

    {/* ICONS */}

    <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode ==="dark"
            ?(
                <DarkModeOutLinedIcon/>
            ):(
                <LightModeOutLinedIcon/>
            )}
        </IconButton>
        {/* <IconButton>
            <NotificationsOutLinedIcon/>
        </IconButton> */}
        <IconButton>
            <SettingsOutlinedIcon/>
        </IconButton>
        <IconButton>
            <PersonOutLinedIcon/>
        </IconButton>
    </Box>

</Box>
    
);
};

export default Topbar;