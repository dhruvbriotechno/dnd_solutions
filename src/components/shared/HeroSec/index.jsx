import { Box } from '@mui/material'
import React from 'react'
import { ContainerFluid } from '../CustomContainer'
import { useStyles } from './herosec.style'

const HeroSec = ({ image, title, }) => {
    const classes = useStyles();

    return (
        <ContainerFluid className={"  "} >
            <Box className={classes.blackBg}>
                {image ?
                    <Box
                        sx={{
                            width: '100%', // Set the width
                            height: '300px', // Set the height
                            backgroundImage: `url(${image})`, // Path to the background image
                            backgroundSize: 'cover', // Adjust how the background image is resized
                            backgroundPosition: 'center', // Center the background image
                            backgroundRepeat: 'no-repeat', // Prevent the background from repeating
                        }}
                        >
                        <h1 title={"Our Products"} >{title}</h1>
                    </Box>
                    :
                    <Box
                        className={classes.productBanner}>
                        <h1 title={"Our Products"} >{title}</h1>
                    </Box>
                }
            </Box>
        </ContainerFluid>
    )
}

export default HeroSec
