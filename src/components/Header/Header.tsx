import React, { useContext } from "react";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountButton from "./components/AccountButton";
import AddNewButton from "./components/AddNewButton";
import useAuth from "../../hooks/useAuth";
import SidebarContext from "../../providers/Sidebar/SidebarContext";

const Header = () => {
    const { open: openSidebar } = useContext(SidebarContext);
    const { isAuth } = useAuth();

    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={openSidebar}
                >
                    <MenuIcon />
                </IconButton>
                <Box component="div" sx={{ flexGrow: 1 }} />
                {isAuth && <AddNewButton />}
                {isAuth && <AccountButton />}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
