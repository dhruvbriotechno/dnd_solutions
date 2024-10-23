import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Import Back arrow icon
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { AppBar, Box, Button, Menu, MenuItem, Toolbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../state-management/admin/login/loginActions";
import DrawerRight from "../DrawerRight";
import { Container10 } from "../shared/CustomContainer";
import { useStyles } from "./header.style";
import { adminLinks, menuListDesktop } from "./headerData";
// import logo from "../../assets/img/images/logo.png"
const Header = () => {
  const classes = useStyles();
  const location = useLocation();
  const path = location.pathname;
  const isAdmin = path.includes("admin");

  const [shrink, setShrink] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [submenuAnchorEl, setSubmenuAnchorEl] = useState(null);
  const [submenuItems, setSubmenuItems] = useState([]);

  const token = localStorage.getItem("token");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/admin/login");
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuOpen = (event, subMenu = []) => {
    setMenuAnchorEl(event.currentTarget);

    // If "Organic Fertilizers" submenu is opened, add a back arrow to go back to "Our Products"
    if (subMenu.some(item => item.title === "Organic Fertilizers")) {
      // Find the "Our Products" menu and set it in state for the back navigation
      const ourProductsMenu = menuListDesktop.find(menu => menu.title === "Our Products").subMenu;
      setSubmenuItems([{ title: "Back to Products", isBack: true, subMenu: ourProductsMenu }, ...subMenu]);
    } else {
      setSubmenuItems(subMenu);
    }
  };

  const handleSubmenuOpen = (event, subMenu = []) => {
    setSubmenuAnchorEl(event.currentTarget);
    setSubmenuItems(subMenu);
  };

  const handleBackClick = (subMenu) => {
    // Handle back arrow click, open the "Our Products" menu again
    setMenuAnchorEl(null);
    setSubmenuAnchorEl(null);
    setSubmenuItems(subMenu);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
    setSubmenuAnchorEl(null);
    setSubmenuItems([]);
  };

  const currentPath = location.pathname;

  if (path === "/admin/login" || path === "/admin/login/") return null;

  return (
    <Box className={classes.backside}>
      <AppBar
        position="fixed"
        className={`${classes.appBar} ${shrink ? classes.appBarShrink : ""}`}
      >
        <Container10>
          <Toolbar>
            <Box className={classes.logoLeftSide}>
              <NavLink to="/">
                {/* <img src={require(`${process.env.REACT_APP_IMAGES_PATH}/images/logo.png`} alt="Logo" /> */}
                <img src={require(`${process.env.REACT_APP_IMAGES_PATH}/images/logo.png`)} alt="My Image" />
              </NavLink>
            </Box>

            {!isAdmin && (
              <Box className={classes.phoneIcon}>
                <PhoneInTalkIcon />
              </Box>
            )}

            <ul className={currentPath === "/" ? classes.menuItems : `${classes.menuItems} ${classes.rightSideMenu}`}>
              {menuListDesktop.map((item, index) => (
                <li key={index} className="link">
                  {item.subMenu ? (
                    <>
                      <NavLink
                        onClick={(e) => handleMenuOpen(e, item.subMenu)}
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                      >
                        {item.title}
                      </NavLink>
                      <Menu
                        anchorEl={menuAnchorEl}
                        keepMounted
                        open={Boolean(menuAnchorEl)}
                        onClose={handleMenuClose}
                      >
                        {submenuItems.map((subItem, subIndex) => (
                          <MenuItem
                            key={subIndex}
                            onClick={
                              subItem.isBack
                                ? () => handleBackClick(subItem.subMenu) // If it's a back item, go back
                                : subItem.subMenu
                                ? (e) => handleSubmenuOpen(e, subItem.subMenu)
                                : handleMenuClose
                            }
                          >
                            {subItem.isBack ? (
                              <>
                                <ArrowBackIcon style={{ marginRight: "8px" }} />
                                {subItem.title}
                              </>
                            ) : (
                              <NavLink to={subItem.link || "#"}>{subItem.title}</NavLink>
                            )}
                          </MenuItem>
                        ))}
                      </Menu>
                    </>
                  ) : (
                    <NavLink to={item.link}>{item.title}</NavLink>
                  )}
                </li>
              ))}
            </ul>

            {token && (
              <Button onClick={handleLogout} color="inherit">Logout</Button>
            )}

            <DrawerRight menu={menuListDesktop} adminLinks={adminLinks} isAdmin={isAdmin} />
          </Toolbar>
        </Container10>
      </AppBar>
    </Box>
  );
};

export default Header;
