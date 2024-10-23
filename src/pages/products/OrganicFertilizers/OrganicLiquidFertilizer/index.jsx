
import { Box, Button, Card, CardMedia, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from '../../products.style';

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
          <Typography paragraph>At DnD solutions, we believe that nature provides the best solutions for growing healthy and vibrant plants. Our organic liquid fertilizer is designed to enhance soil health and deliver essential nutrients to your plants, all while supporting sustainable and eco-friendly gardening practices, At DnD Solutions, and we’re committed to promoting sustainable Farming practices. Our organic liquid fertilizer is specially formulated to provide your plants with the nutrients they need for robust growth while caring for the environment.</Typography>
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
              <ListItemText className={classes.listText} primary="100% Organic Ingredients: Our fertilizer is made from natural, plant-based sources, ensuring a safe and effective solution for your garden without harmful chemicals." />
            </ListItem>
            <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
              <ListItemText className={classes.listText} primary="Enhanced Soil Health: Our formula promotes beneficial microbial activity in the soil, improving soil structure and nutrient availability for your plants." />
            </ListItem>
            <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
              <ListItemText className={classes.listText} primary="Efficient Nutrient Delivery: The liquid form allows for rapid absorption of nutrients, ensuring your plants receive the essential elements they need for optimal growth." />
            </ListItem>
            <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
              <ListItemText className={classes.listText} primary="Eco-Friendly: By using our fertilizer, you contribute to a healthier environment. Our production process is designed to minimize waste and reduce our carbon footprint." />
            </ListItem>
            <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
              <ListItemText className={classes.listText} primary="Rapid Nutrient Absorption: The liquid formula allows for quick absorption, delivering essential nutrients directly to your plants, promoting healthier growth and vibrant blooms." />
            </ListItem>
            <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
              <ListItemText className={classes.listText} primary="Versatile Application: Ideal for a wide range of plants, including vegetables, flowers, and houseplants. Use it in soil or as a foliar spray for added benefits!" />
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
            Our organic liquid fertilizer provides a balanced blend of essential nutrients which are 100% organic along with secondary nutrients and trace elements. The liquid form makes it easy to apply directly to the soil or mix with water for foliar feeding, ensuring maximum uptake by your plants.
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
              <ListItemText className={classes.listText} primary="Shake well: before use, shake the bottle to ensure the nutrients are well mixed." />
            </ListItem>
            <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
              <ListItemText className={classes.listText} primary="Dilute: Mix the recommended amount of fertilizer with water according to the instructions on the label." />
            </ListItem>
            <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
              <ListItemText className={classes.listText} primary="Apply: Water your plants with the solution, targeting the root zone or foliage as needed." />
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
          {/* <Typography className={classes.secTitle} variant="h5" gutterBottom>
            Customer Satisfaction Guaranteed
          </Typography> */}
          <Typography paragraph>
            We stand by the quality of our organic liquid fertilizer and are committed to your satisfaction. If you have any questions or concerns, our knowledgeable customer service team is here to assist you.
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
              <ListItemText className={classes.listText} primary="Eco-Friendly: We prioritize sustainability in our products and packaging, supporting a greener planet." />
            </ListItem>
            <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
              <ListItemText className={classes.listText} primary="Expert Guidance: Our knowledgeable team is here to help you choose the best fertilizer for your Farming and Gardening needs." />
            </ListItem>
            <ListItem sx={{ display: 'list-item', paddingTop: 0, paddingBottom: 0 }}>
              <ListItemText className={classes.listText} primary="Satisfaction Guaranteed: We’re confident in our products and offer a satisfaction guarantee for every purchase." />
            </ListItem>

          </List>
        </Container>
      </Card>

      <Typography paragraph>
        Grow sustainably, grow beautifully!
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

export default OrganicLiquidFertilizer;
