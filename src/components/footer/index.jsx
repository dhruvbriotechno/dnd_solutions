import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Box } from '@mui/material';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import { menuListMobile } from '../header/headerData';
import { Container1320 } from '../shared/CustomContainer';
import { useStyles } from './footer.style';
import { ProductsLinks } from './footerData';


const Footer = () => {
    const classes = useStyles();
    const location = useLocation();
    const path = location.pathname;
    const isAdmin = path.includes("admin");

    const TitleHead = ({ title }) => {
        return (
            <h1 className={classes.titleHead}>{title}</h1>
        )
    }

    if (isAdmin !== true) {
        return (
            <Box className={classes.footerStyle}>
                <Container1320>
                    {/* 1 */}
                    <Box className={classes.row}>

                        <Box className={'footer-form'}>
                            <TitleHead title="About DnD Solutions" />
                            <p>Founded in 2017, DnD Solutions is a forward-thinking company dedicated to providing high-quality, innovative solutions across various industries. With a diverse product portfolio, we specialize in manufacturing:</p>
                        </Box>

                        <Box>
                            <TitleHead title="Quick Links" />
                            <Box className={classes.quicklinks}>
                                {menuListMobile && menuListMobile.map((db, index) => {
                                    return (
                                        db.link !== '/offer-of-month' &&
                                        <NavLink className={'link'} key={index} to={db.link}>{db.title}</NavLink>
                                    )
                                }
                                )}
                            </Box>
                        </Box>

                        <Box>
                            <TitleHead title="Our Products" />
                            <Box className={classes.quicklinks}>
                                {ProductsLinks && ProductsLinks.map((db, index) => {
                                    return (
                                        db.link !== '/offer-of-month' &&
                                        <NavLink className={'link'} key={index} to={db.link}>{db.title}</NavLink>
                                    )
                                }
                                )}
                            </Box>
                        </Box>

                        {/* 
                        <Box>
                            <TitleHead title="Useful Link" />
                            <Box className={classes.socialLinks}>
                                {socialLinks.map((db, index) => (
                                    <Box>{db.icon}</Box>
                                ))}
                            </Box>
                        </Box> */}
                    </Box>
                    {/* 2 */}
                    <Box className={classes.rowBottom}>

                        <Box className={''}>
                            <p>Design By <span><b>...</b></span> - 2024</p>
                        </Box>
                        <Box>

                        </Box>
                    </Box>
                </Container1320>

                <ScrollToTop
                    smooth
                    component={
                        <KeyboardDoubleArrowUpIcon style={{ fontSize: 25, color: 'black' }} />
                    }
                />
            </Box>
        )
    }
}

export default Footer
