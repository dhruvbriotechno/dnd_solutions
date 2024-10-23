
import { Box, Button, Card, CardMedia, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from '../../products.style';

const BioBasedOrganicSolidFertilizer = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="md" sx={{ py: 8 }}>
            {/* Header Section */}
            <Box textAlign="center" sx={{ mb: 4 }}>
                <Typography className={classes.productTitle} variant="h4" component="h1" gutterBottom >
                    " Tatvik " High-Quality Organic Solid Fertilizer**
                </Typography>
                {/* <Typography variant="h6" color="textSecondary">
                    *Elevate Your Gardening with Natural Excellence*
                </Typography> */}
            </Box>

            {/* Product Image */}
            {/* <CardMedia
                component="img"
                height="400"
                // image={require(`${process.env.REACT_APP_IMAGES_PATH}/images/bg/product-bg.webp`)} 
                image={require(`../../../../assets/img/images/bg/product-bg.webp`)} 
                alt="Tatvik Organic Fertilizer"
                sx={{ mb: 4 }}
            /> */}

            <Container maxWidth="md" sx={{ py: 1 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography paragraph>At DnD solutions, we believe that nature provides the best solutions for growing healthy and vibrant plants. Our organic Solid fertilizer is designed to enhance soil health and deliver essential nutrients to your plants, all while supporting sustainable and eco-friendly gardening and farming practices, Our organic Solid fertilizer is specially formulated to provide your plants with the nutrients they need for robust growth while caring for the environment.</Typography>
                </Box>
            </Container>

            {/* Why Choose Section */}
            <Card sx={{ mb: 4 }}>
                <Container maxWidth="md" sx={{ py: 1 }}>
                    <Typography className={classes.secTitle} variant="h4" gutterBottom>
                        *Why Choose Our Organic Solid Fertilizer?*
                    </Typography>
                    <List sx={{ listStyleType: 'disc', pl: 2 }}>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="100% Organic Composition: Made from carefully selected natural materials, our fertilizer enriches your soil without the use of synthetic chemicals or harmful additives." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Long-Lasting Nutrient Release: Our solid fertilizer provides a slow, steady release of essential nutrients, ensuring your plants receive consistent nourishment over time." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Soil Health Improvement: Enhances soil structure and increases microbial activity, leading to improved water retention and nutrient availability." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Eco-Friendly Choice: By choosing our organic solid fertilizer, you support environmentally responsible practices and contribute to a healthier planet." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Slow-Release Formula: Designed to provide a steady supply of nutrients over time, promoting sustained growth and minimizing the risk of nutrient leaching." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Improves Soil Structure: Enriches soil with organic matter, enhancing aeration and moisture retention for healthier root development." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Versatile Use: Perfect for vegetable gardens, flower beds, and houseplants—suitable for all your gardening needs." />
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
                        Our organic solid fertilizer contains a balanced mix of macronutrients for plant growth. As it breaks down, it gradually releases nutrients into the soil, providing sustained support for your plants throughout their growth cycle.
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
                            <ListItemText className={classes.listText} primary="Preparation: determine the appropriate amount of fertilizer based on your soil type and the specific needs of your plants." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Application: Spread the fertilizer evenly over the soil surface or mix it into the top layer of soil." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Watering: after application, water the area to help activate the nutrients and ensure they reach the root zone." />
                        </ListItem>
                    </List>
                </Container>
            </Card>

            {/* Best Results Section */}
            <Container maxWidth="md" sx={{ py: 1 }}>
                <Typography className={classes.secTitle} variant="h5" gutterBottom>
                    For Optimal Results*
                </Typography>
                <List sx={{ listStyleType: 'disc', pl: 2 }}>
                    <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                        <ListItemText className={classes.listText} primary="Apply in early spring and again in mid-summer for ongoing nourishment." />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                        <ListItemText className={classes.listText} primary="Adjust the amount based on plant size and soil fertility to avoid over-application." />
                    </ListItem>

                </List>
            </Container>



            {/* *Commitment to Quality* */}
            <Container maxWidth="md" sx={{ py: 1 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography className={classes.secTitle} variant="h5" gutterBottom>
                        Commitment to Quality*
                    </Typography>
                    <Typography paragraph>
                        We pride ourselves on the quality and effectiveness of our organic solid fertilizer. Should you have any questions or require assistance, our dedicated customer support team is here to help.
                    </Typography>
                </Box>
            </Container>

            {/* *Experience the Benefits* */}
            <Container maxWidth="md" sx={{ py: 1 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography className={classes.secTitle} variant="h5" gutterBottom>
                        Experience the Benefits*
                    </Typography>
                    <Typography paragraph>
                        Discover how our organic solid fertilizer can transform your garden into a thriving oasis. Shop now and provide your plants with the natural care they deserve!
                    </Typography>
                </Box>
            </Container>


            {/* Why Choose DND */}
            <Card sx={{ mb: 4 }}>
                <Container maxWidth="md" sx={{ py: 1 }}>
                    <Typography className={classes.secTitle} variant="h4" gutterBottom>
                        Why Choose DnD Solutions?
                    </Typography>
                    <List sx={{ listStyleType: 'disc', pl: 2 }}>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Quality Assurance: Our fertilizers are rigorously tested to ensure effectiveness and safety." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Expert Support: Our knowledgeable team is here to provide guidance and recommendations tailored to your specific gardening goals." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
                            <ListItemText className={classes.listText} primary="Satisfaction Guaranteed: We stand behind our products with a satisfaction guarantee, ensuring you have a positive gardening experience." />
                        </ListItem>
                    </List>
                </Container>
            </Card>

            <Typography paragraph>
                Empower your plants with the nutrients they crave using DnD Solutions’ Organic Solid Fertilizer. Cultivate naturally, cultivate beautifully!
            </Typography>


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

export default BioBasedOrganicSolidFertilizer;
