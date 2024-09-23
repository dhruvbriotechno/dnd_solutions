
import React from 'react';
import { Container, Typography, Button, Card, CardContent, CardMedia, Box, Grid, List, ListItem, ListItemText } from '@mui/material';
import { useStyles } from './products.style';

const OrganicLiquidFertilizer = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="md" sx={{ py: 8 }}>
      {/* Header Section */}
      <Box textAlign="center" sx={{ mb: 4 }}>
        <Typography className={classes.productTitle} variant="h4" component="h1" gutterBottom >
          "Tatvik" – The Premium Organic Liquid Fertilizer
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Transform Your Garden with Nature’s Best
        </Typography>
      </Box>

      {/* Product Image */}
      <CardMedia
        component="img"
        height="400"
        image={`${process.env.PUBLIC_URL}/images/bg/product-bg.webp`}  // Replace with actual image URL
        alt="Tatvik Organic Fertilizer"
        sx={{ mb: 4 }}
      />

      {/* Why Choose Section */}
      <Card sx={{ mb: 4 }}>
        <Container maxWidth="md" sx={{ py: 1 }}>
          <Typography  variant="h4" gutterBottom>
            Why Choose Our Organic Liquid Fertilizer?
          </Typography>
          <List sx={{ listStyleType: 'disc', pl: 2 }}>
            <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
              <ListItemText className={classes.listText}  primary="100% Organic Ingredients: Made from natural, plant-based sources without harmful chemicals." />
            </ListItem>
            <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
              <ListItemText className={classes.listText} primary="Enhanced Soil Health: Promotes microbial activity for better soil structure and nutrient availability." />
            </ListItem>
            <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
              <ListItemText className={classes.listText} primary="Efficient Nutrient Delivery: Rapid absorption of essential elements for optimal plant growth." />
            </ListItem>
            <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
              <ListItemText className={classes.listText} primary="Eco-Friendly: Supports sustainable gardening with reduced carbon footprint." />
            </ListItem>
          </List>
        </Container>
      </Card>

      {/* How It Works Section */}
      <Container maxWidth="md" sx={{ py: 1 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            How It Works
          </Typography>
          <Typography paragraph>
            Our organic liquid fertilizer provides a balanced blend of essential nutrients that are 100% organic, along with secondary nutrients and trace elements. The liquid form makes it easy to apply directly to the soil or mix with water for foliar feeding, ensuring maximum uptake by your plants.
          </Typography>
        </Box>
      </Container>

      {/* Application Instructions Section */}
      <Card sx={{ mb: 4 }}>
        <Container maxWidth="md" sx={{ py: 1 }}>
          <Typography variant="h5" gutterBottom>
            Application Instructions
          </Typography>
          <List sx={{ listStyleType: 'decimal', pl: 2 }}>
            <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
              <ListItemText className={classes.listText} primary="Shake Well: Before use, shake the bottle to ensure nutrients are well mixed." />
            </ListItem>
            <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
              <ListItemText className={classes.listText} primary="Dilute: Mix the recommended amount of fertilizer with water as per the label." />
            </ListItem>
            <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
              <ListItemText className={classes.listText} primary="Apply: Water your plants with the solution, targeting the root zone or foliage as needed." />
            </ListItem>
          </List>
        </Container>
      </Card>

      {/* Best Results Section */}
      <Container maxWidth="md" sx={{ py: 1 }}>
        <Typography variant="h5" gutterBottom>
          For Best Results
        </Typography>
        <List sx={{ listStyleType: 'disc', pl: 2 }}>
          <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText className={classes.listText} primary="Apply every 2-4 weeks during the growing season." />
          </ListItem>
          <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText className={classes.listText} primary="Adjust the dosage based on the specific needs of your plants and soil conditions." />
          </ListItem>

        </List>
      </Container>



      {/* Customer Satisfaction Section */}
      <Container maxWidth="md" sx={{ py: 1 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Customer Satisfaction Guaranteed
          </Typography>
          <Typography paragraph>
            We stand by the quality of our organic liquid fertilizer and are committed to your satisfaction. If you have any questions or concerns, our knowledgeable customer service team is here to assist you.
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
          <Typography variant="h6" gutterBottom>
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

export default OrganicLiquidFertilizer;
