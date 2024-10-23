import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Box, Button, Menu, MenuItem } from "@mui/material";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useStyles } from "./header.style";
import { adminLinks, menuListDesktop, menuListMobile } from "./headerData";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import DrawerRight from "../DrawerRight";
import { logout } from "../../state-management/admin/login/loginActions";
import { Container10 } from "../shared/CustomContainer";

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
    setSubmenuItems(subMenu);
  };

  const handleSubmenuOpen = (event, subMenu = []) => {
    setSubmenuAnchorEl(event.currentTarget);
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
                <img src={require(`${process.env.REACT_APP_IMAGES_PATH}/images/logo.png`)} alt="Logo" />
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
                            onClick={subItem.subMenu ? (e) => handleSubmenuOpen(e, subItem.subMenu) : handleMenuClose}
                          >
                            <NavLink to={subItem.link || "#"}>{subItem.title}</NavLink>
                            {subItem.subMenu && (
                              <Menu
                                anchorEl={submenuAnchorEl}
                                open={Boolean(submenuAnchorEl)}
                                onClose={handleMenuClose}
                              >
                                {subItem.subMenu.map((nestedItem, nestedIndex) => (
                                  <MenuItem key={nestedIndex} onClick={handleMenuClose}>
                                    <NavLink to={nestedItem.link}>{nestedItem.title}</NavLink>
                                  </MenuItem>
                                ))}
                              </Menu>
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
