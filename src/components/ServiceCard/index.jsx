import { Badge, Box } from '@mui/material';
import React from 'react';
import { ButtonTrans } from '../shared/ButtonCustom';
import { useStyles } from './ServiceCard.style';

const ServiceCard = ({ data }) => {
    const classes = useStyles();

    return (
        <>
        
            {data.map((db, index) => (
                <Box key={index} className={classes.serviceItem + ' ' + 'serviceClassName'}>
                    <Box className={classes.imagesSecService + ' ' + 'serviceImageClassName'}>
                        {db.badge ?
                            <Badge color="secondary" badgeContent={db.badge + '%'} max={db.badge + '%'}>
                                <img src={db.image} alt="" />
                            </Badge>
                            : <img src={db.image} alt="" />}
                        <Box className={'contentSec'}>
                            <h2 className="title">{db.title}</h2>
                            {/* <p className="description">{db.description}</p> */}
                            {/* <ButtonTrans>Know More</ButtonTrans> */}
                        </Box>
                    </Box>

                </Box>
            ))}
        </>
    )
}

export default ServiceCard
