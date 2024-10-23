import { Badge, Box } from '@mui/material';
import React from 'react';
import noImage from "../../assets/bg/no-banner.jpg";
import { useStyles } from './BlogCard.style';

const BlogCard = ({ data }) => {
    const classes = useStyles();

    return (
        <>
            {data.map((db, index) => {
                const handleImageError = (event) => {
                    event.target.src = noImage;
                };

                return (
                    <Box key={index} className={classes.blogItem + ' ' + 'blogClassName'}>
                        <Box className={classes.imagesSecBlog + ' ' + 'blogImageClassName'}>
                            {db.percentage ?
                                <Badge color="secondary" badgeContent={db.percentage + '%'} max={db.percentage + '%'} >
                                    <img src={db.image || noImage} alt={db.title} onError={handleImageError} />
                                </Badge>
                                :
                                <Badge color="secondary" badgeContent={db.percentage + '%'} max={db.percentage + '%'} >
                                    <img src={db.image || noImage} alt={db.title} onError={handleImageError} />
                                </Badge>
                            }
                        </Box>
                        <Box className={'contentSec'}>
                            <h2 className="title">{db.title}</h2>
                            <p className="description">{db.description}</p>
                        </Box>
                    </Box>
                )
            })}
        </>
    )
}

export default BlogCard
