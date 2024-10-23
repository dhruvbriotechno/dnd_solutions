
import { Box, Button, Card, CardMedia, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from '../../products.style';

const NanotechWaterproofingLiquidChemical = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="md" sx={{ py: 8 }}>
            {/* Header Section */}
            <Box textAlign="center" sx={{ mb: 4 }}>
                <Typography className={classes.productTitle} variant="h4" component="h1" gutterBottom >
                    " Tatvik " High-Quality Organic Solid Fertilizer**
                </Typography>
                <Typography variant="h6" color="textSecondary">
                    *Elevate Your Gardening with Natural Excellence*
                </Typography>
            </Box>

            {/* Product Image */}
            {/* <CardMedia
                component="img"
                height="400"
                image={require(`${process.env.REACT_APP_IMAGES_PATH}/images/bg/product-bg.webp`)}  // Replace with actual image URL
                alt="Tatvik Organic Fertilizer"
                sx={{ mb: 4 }}
            /> */}

            <Container maxWidth="md" sx={{ py: 1 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography paragraph>

                    </Typography>
                </Box>
            </Container>

            {/* Why Choose Section */}
            <Card sx={{ mb: 4 }}>
                <Container maxWidth="md" sx={{ py: 1 }}>
                    <Typography className={classes.secTitle} variant="h4" gutterBottom>
                        Why Choose Our Organic Liquid Fertilizer?
                    </Typography>
                    <List sx={{ listStyleType: 'disc', pl: 2 }}>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="" />
                        </ListItem>
                    </List>
                </Container>
            </Card>

            {/* How It Works Section */}
            <Container maxWidth="md" sx={{ py: 1 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography className={classes.secTitle} variant="h5" gutterBottom>
                        How It Works
                    </Typography>
                    <Typography paragraph>

                    </Typography>
                </Box>
            </Container>

            {/* Application Instructions Section */}
            <Card sx={{ mb: 4 }}>
                <Container maxWidth="md" sx={{ py: 1 }}>
                    <Typography className={classes.secTitle} variant="h5" gutterBottom>
                        Application Instructions
                    </Typography>
                    <List sx={{ listStyleType: 'decimal', pl: 2 }}>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="" />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="" />
                        </ListItem>
                    </List>
                </Container>
            </Card>

            {/* Best Results Section */}
            <Container maxWidth="md" sx={{ py: 1 }}>
                <Typography className={classes.secTitle} variant="h5" gutterBottom>
                    For Best Results
                </Typography>
                <List sx={{ listStyleType: 'disc', pl: 2 }}>
                    <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                        <ListItemText className={classes.listText} primary="" />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                        <ListItemText className={classes.listText} primary="" />
                    </ListItem>

                </List>
            </Container>



            {/* Customer Satisfaction Section */}
            <Container maxWidth="md" sx={{ py: 1 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography className={classes.secTitle} variant="h5" gutterBottom>
                        Customer Satisfaction Guaranteed
                    </Typography>
                    <Typography paragraph>

                    </Typography>
                </Box>
            </Container>

            {/* Call to Action */}
            {/* <Box textAlign="center" sx={{ py: 4 }}>
        <Button variant="contained" color="primary" size="large">
          Shop Now
        </Button>
      </Box> */}

            {/* Contact Section */}
            <Box textAlign="center" sx={{ backgroundColor: '#f0f0f0', py: 3, borderRadius: 2 }}>
                <Container maxWidth="md" sx={{ py: 1 }}>
                    <Box sx={{ marginBottom: 4 }}>
                        <Typography className={classes.secTitle} variant="h6" gutterBottom>
                            Discover the Difference
                        </Typography>
                        <Typography paragraph>
                            Experience the benefits of natural and sustainable gardening with DnD Solutions's organic liquid fertilizer. Shop now and give your plants the nourishment they deserve!
                        </Typography>
                    </Box>

                    {/* Contact Us */}
                    <Button variant="outlined" color="secondary" size="large" sx={{ marginBottom: 2 }}>
                        Contact Us
                    </Button>
                    <Typography paragraph>
                        For more information, visit our website or reach out to us, Let’s grow together!
                    </Typography>
                    <Typography paragraph>
                        Feel free to adjust the details to better fit your brand and product specifics!
                    </Typography>
                </Container>

            </Box>

        </Container>
    );
};

export default NanotechWaterproofingLiquidChemical;
