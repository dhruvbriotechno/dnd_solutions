
import { Box, Button, Card, CardMedia, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from '../../products.style';

const OrganicActiveCapsuleFertilizer = () => {
    const classes = useStyles();

    const dataKeyFeatures = [
        {
            title: 'Balanced Nutrition: ',
            description: 'Each capsule is formulated with a precise blend of macro and micronutrients to support optimal growth and blooming.',
        },
        {
            title: 'Easy Application:',
            description: 'Simply insert the capsules into the soil for hassle-free fertilization—no measuring or mixing required.',
        },
        {
            title: 'Sustainable Ingredients: ',
            description: 'Our fertilizers are made from eco-friendly materials, promoting soil health and reducing environmental impact.',
        },
        {
            title: 'Versatile Use: ',
            description: 'Suitable for indoor and outdoor plants, vegetables, and flowering gardens.',
        },
    ]

    const dataWhyChoose = [
        {
            title: 'Quality Assurance: ',
            description: 'Each batch undergoes rigorous testing to ensure potency and safety',
        },
        {
            title: 'Expert Support: ',
            description: 'Our team is available to help you choose the right products for your specific plants and growing conditions.',
        },
        {
            title: 'Customer Satisfaction: ',
            description: 'We stand by our products and offer a satisfaction guarantee.',
        },
       
    ]

    return (
        <Container className={classes.root} maxWidth="md" sx={{ py: 8 }}>
            {/* Header Section */}

            <Box textAlign="center" sx={{ mb: 4 }}>
                <Typography className={classes.productTitle} variant="h4" component="h1" gutterBottom >
                    Capsule Fertilizer by DnD Solutions
                </Typography>
                <Typography variant="h6" color="textSecondary" fontWeight={600}>
                    Unlock Your Plants' Potential with Our Premium Capsule Fertilizers
                </Typography>
                <Typography variant="h6" color="textSecondary">At DnD Solutions, we believe that healthy plants lead to a thriving environment. Our capsule fertilizers are designed for convenience and effectiveness, delivering essential nutrients directly to your plants’ roots.</Typography>
            </Box>

            {/* Key Features: */}
            <Card sx={{ mb: 4 }}>
                <Container maxWidth="md" sx={{ py: 1 }}>
                    <Typography className={classes.secTitle} variant="h4" gutterBottom>
                        Key Features:
                    </Typography>
                    <List sx={{ listStyleType: 'disc', pl: 2 }}>
                        {dataKeyFeatures.map((db, index) => (
                            <ListItem key={index} sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                                <ListItemText className={classes.listText} primary={db.title} secondary={db.description} />
                            </ListItem>
                        ))}
                    </List>
                </Container>
            </Card>
            {/* Why Choose Section */}
            <Card sx={{ mb: 4 }}>
                <Container maxWidth="md" sx={{ py: 1 }}>
                    <Typography className={classes.secTitle} variant="h4" gutterBottom>
                        Why Choose DnD Solutions?
                    </Typography>
                    <List sx={{ listStyleType: 'disc', pl: 2 }}>
                        {dataWhyChoose.map((db, index) => (
                            <ListItem key={index} sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                                <ListItemText className={classes.listText} primary={db.title} secondary={db.description} />
                            </ListItem>
                        ))}
                    </List>
                </Container>
            </Card>

            <Container maxWidth="md" sx={{ py: 0.5 }}>
                <Box sx={{ mb: 0.5 }}>
                    <Typography paragraph>
                        Elevate your gardening experience with DnD Solutions’ capsule fertilizers. Grow with confidence!
                    </Typography>
                </Box>
            </Container>


        </Container>
    );
};

export default OrganicActiveCapsuleFertilizer;
