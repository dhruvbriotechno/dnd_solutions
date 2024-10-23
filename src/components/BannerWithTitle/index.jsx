import React from 'react';
import { ContainerFluid } from '../shared/CustomContainer';
import { useStyles } from './BannerWithTitle.style';

const BannerWithTitle = ({image, title}) => {
    const classes = useStyles();

    return (
        <ContainerFluid>
            <div className={classes.ourteambanner}>
                <img src={image} className={classes.ourteambannerimg} alt="" />
                <h2 className={classes.bannertitle}>{title}</h2>
            </div>
        </ContainerFluid>
    )
}

export default BannerWithTitle
