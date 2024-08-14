import { useStyles } from "./header.style";
import { AppBar, Toolbar, Typography, Button, Box, Badge } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { adminLinks, menuListDesktop, menuListMobile } from "./headerData";
import DrawerRight from "../DrawerRight";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
// import logo from "../../assets/Images/logo.png"
import { Container10 } from "../shared/CustomContainer";
import { useDispatch } from "react-redux";
import { logout } from "../../state-management/admin/login/loginActions";


const Header = () => {
  const classes = useStyles();
  const location = useLocation();
  const path = location.pathname;
  const isAdmin = path.includes("admin");

  const [shrink, setShrink] = useState(false);

  const token = localStorage.getItem('token');

  // LOGOUT 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/admin/login');
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


  const currentPath = location.pathname;

  // console.log("currentPath", currentPath)
  if (path == "/admin/login" || path == "/admin/login/") return null;

  return (
    <Box className={classes.backside}>
      <AppBar
        position="fixed"
        className={`${classes.appBar} ${shrink ? classes.appBarShrink : ""}`}
      >
        <Container10>
          <Toolbar>
            <Box className={classes.logoLeftSide}>
              <NavLink to={'/'}>
                <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" />
              </NavLink>
            </Box>
            {!isAdmin &&
              <Box className={classes.phoneIcon}>
                <PhoneInTalkIcon />
              </Box>
            }

            {isAdmin ?
              <ul className={currentPath == '/' ? classes.menuItems : classes.menuItems + ' ' + classes.rightSideMenu + ' ' + classes.rightSideMenu + ' ' + classes.adminMenuItems}>
                {adminLinks.map((db, index) => {
                  return db.badge ? (
                    <li className="link" key={index}>
                      <Badge className="headerBlink" color="secondary" badgeContent={'New'} max={''}>
                        <NavLink to={db.link}>{db.title}</NavLink>
                      </Badge>
                    </li>
                  ) :
                    <li className="link" key={index}>
                      <NavLink to={db.link}>{db.title}</NavLink>
                    </li>
                    ;
                })}
              </ul>
              :
              <ul className={currentPath == '/' ? classes.menuItems : classes.menuItems + ' ' + classes.rightSideMenu}>

                {menuListDesktop.map((db, index) => {
                  return db.title == "logo" && currentPath == '/' ? (
                    <li key={index}>
                      <NavLink to={db.link}>
                        <img src={db.logo} alt="" />
                      </NavLink>
                    </li>
                  ) : db.badge ? (
                    <li className="link" key={index}>
                      <Badge className="headerBlink" color="secondary" badgeContent={'New'} max={''}>
                        <NavLink to={db.link}>{db.title}</NavLink>
                      </Badge>
                    </li>
                  ) :
                    <li className="link" key={index}>
                      <NavLink to={db.link}>{db.title}</NavLink>
                    </li>
                    ;
                })}

                {/* <li className={classes.noUnderline}>
                  <Link to="https://wa.me/123456789?text=hii" target="_blank" style={{ color: 'white' }}>
                    <Button color="inherit">Book Appointment</Button>
                  </Link>
                </li> */}
              </ul>
            }

            {/* {isAdmin ? <Box className={classes.menuRightSec}><Button onClick={handleLogout}  >Logout</Button></Box> : null} */}

            {token && (
              <button onClick={handleLogout}>Logout</button>
            )}


            <DrawerRight menu={menuListMobile} adminLinks={adminLinks} isAdmin={isAdmin} />
          </Toolbar>
        </Container10>
      </AppBar>
    </Box>
  );


};

export default Header;
