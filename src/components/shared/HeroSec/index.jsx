import React from 'react'
import { ContainerFluid } from '../CustomContainer'
import { Box } from '@mui/material'
import TitleSection from '../TitleSection'
import { useStyles } from './herosec.style'

const HeroSec = ({image, title, }) => {
    const classes = useStyles();

    return (
        <ContainerFluid className={"  "} >
            <Box className={classes.blackBg}>
                <Box sx={{backgroundImage: ''}} className={classes.productBanner}>
                    <h1 title={"Our Products"} >{title}</h1>
                </Box>
            </Box>
        </ContainerFluid>
    )
}

export default HeroSec
