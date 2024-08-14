import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from './DrawerRight.style';
import CloseIcon from '@mui/icons-material/Close';
import { Badge, IconButton } from '@mui/material';
import Logo from '../../assets/Images/logo.png';

export default function DrawerRight({ menu, adminLinks, isAdmin }) {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <Box display="flex" justifyContent="space-between" alignItems="center" padding="10px">
                <img src={Logo} alt="Logo" style={{ height: '40px' }} />
                <IconButton onClick={toggleDrawer(false)}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <Divider />
            <List className={classes.parentUl}>
                {isAdmin ?

                    adminLinks.map((db, index) => (
                        <React.Fragment key={index}>
                            <ListItem className={db.title === 'Book Appointment' ? classes.bookBtn : ''} disablePadding>
                                <ListItemButton>
                                    {db.badge ? (
                                        <Badge color="secondary" badgeContent={'New'} max={''}>
                                            <NavLink className={classes.menuLink} to={db.link}>{db.title}</NavLink>
                                        </Badge>
                                    ) : (
                                        <NavLink className={classes.menuLink} to={db.link}>{db.title}</NavLink>
                                    )}
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    ))

                    :

                    menu.map((db, index) => (
                        <React.Fragment key={index}>
                            <ListItem className={db.title === 'Book Appointment' ? classes.bookBtn : ''} disablePadding>
                                <ListItemButton>
                                    {db.badge ? (
                                        <Badge color="secondary" badgeContent={'New'} max={''}>
                                            <NavLink className={classes.menuLink} to={db.link}>{db.title}</NavLink>
                                        </Badge>
                                    ) : (
                                        <NavLink className={classes.menuLink} to={db.link}>{db.title}</NavLink>
                                    )}
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    ))


                }
            </List>
        </Box>
    );

    return (
        <div>
            <Box onClick={toggleDrawer(true)} id="wsnavtoggle" className={classes.wsanimatedArrow}><span></span></Box>
            <Drawer open={open} onClose={toggleDrawer(false)} anchor={'right'}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
