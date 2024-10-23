import CloseIcon from '@mui/icons-material/Close';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Badge, Box, Collapse, Divider, Drawer, IconButton, List, ListItem, ListItemButton } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/img/images/logo.png';
import { useStyles } from './DrawerRight.style';

export default function DrawerRight({ menu, adminLinks, isAdmin }) {
  const [open, setOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState({});
  const classes = useStyles();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleSubMenuToggle = (index, hasSubMenu) => {
    if (!hasSubMenu) {
      // Close drawer if there's no submenu
      setOpen(false);
    } else {
      // Toggle the submenu open state
      setOpenSubMenu((prevState) => ({
        ...prevState,
        [index]: !prevState[index],
      }));
    }
  };

  const DrawerList = (
    <Box className={classes.drawerStyle} sx={{ width: '100%' }} role="presentation">
      <Box display="flex" justifyContent="space-between" alignItems="center" padding="10px">
        <img src={Logo} alt="Logo" style={{ width: '100px' }} />
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List className={classes.parentUl}>
        {isAdmin
          ? adminLinks.map((db, index) => (
              <React.Fragment key={index}>
                <ListItem className={db.title === 'Book Appointment' ? classes.bookBtn : ''} disablePadding>
                  <ListItemButton>
                    {db.badge ? (
                      <Badge color="secondary" badgeContent={'New'} max={''}>
                        <NavLink className={classes.menuLink} to={db.link} onClick={toggleDrawer(false)}>
                          {db.title}
                        </NavLink>
                      </Badge>
                    ) : (
                      <NavLink className={classes.menuLink} to={db.link} onClick={toggleDrawer(false)}>
                        {db.title}
                      </NavLink>
                    )}
                  </ListItemButton>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))
          : menu.map((db, index) => (
              <React.Fragment key={index}>
                <ListItem className={db.title === 'Book Appointment' ? classes.bookBtn : ''} disablePadding>
                  <ListItemButton onClick={() => handleSubMenuToggle(index, !!db.subMenu)}>
                    {db.badge ? (
                      <Badge color="secondary" badgeContent={'New'} max={''}>
                        <NavLink className={classes.menuLink} to={db.link} onClick={() => !db.subMenu && toggleDrawer(false)()}>
                          {db.title}
                        </NavLink>
                      </Badge>
                    ) : (
                      <>
                        <NavLink className={classes.menuLink} to={db.link} onClick={() => !db.subMenu && toggleDrawer(false)()}>
                          {db.title}
                        </NavLink>
                        {db.subMenu && (openSubMenu[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
                      </>
                    )}
                  </ListItemButton>
                </ListItem>
                {db.subMenu && (
                  <Collapse in={openSubMenu[index]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {db.subMenu.map((subItem, subIndex) => (
                        <React.Fragment key={subIndex}>
                          <ListItem className={subItem.title === 'Book Appointment' ? classes.bookBtn : ''} disablePadding>
                            <ListItemButton
                              onClick={() => handleSubMenuToggle(`${index}-${subIndex}`, !!subItem.subMenu)}
                            >
                              <NavLink
                                className={classes.menuLink}
                                to={subItem.link}
                                onClick={() => !subItem.subMenu && toggleDrawer(false)()}
                              >
                                {subItem.title}
                              </NavLink>
                              {subItem.subMenu && (openSubMenu[`${index}-${subIndex}`] ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
                            </ListItemButton>
                          </ListItem>
                          {subItem.subMenu && (
                            <Collapse in={openSubMenu[`${index}-${subIndex}`]} timeout="auto" unmountOnExit>
                              <List component="div" disablePadding>
                                {subItem.subMenu.map((subSubItem, subSubIndex) => (
                                  <ListItem key={subSubIndex} className={classes.subMenuItem} disablePadding>
                                    <ListItemButton>
                                      <NavLink className={classes.menuLink} to={subSubItem.link} onClick={toggleDrawer(false)}>
                                        {subSubItem.title}
                                      </NavLink>
                                    </ListItemButton>
                                  </ListItem>
                                ))}
                              </List>
                            </Collapse>
                          )}
                        </React.Fragment>
                      ))}
                    </List>
                  </Collapse>
                )}
                <Divider />
              </React.Fragment>
            ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Box onClick={toggleDrawer(true)} id="wsnavtoggle" className={classes.wsanimatedArrow}>
        <span></span>
      </Box>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor={'right'}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
