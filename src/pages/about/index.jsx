import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Container1200 } from '../../components/shared/CustomContainer';
import HeroSec from '../../components/shared/HeroSec';
import { useStyles } from './about.style';
 


const About = () => {
  const classes = useStyles();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        scroll: "smooth",
      });
    };

    scrollToTop();
    return () => { };
  }, []);

  return (
    <>
      <Box className={classes.productsSliderStyle}>
        <HeroSec title={"About Us"} />
        <Container1200 className={" pt-12 pb-6 "} >
          <Card sx={{ display: 'flex', marginBottom: '30px', boxShadow: 'none' }}>
            <Grid container spacing={5}>
              <Grid item lg={6} xs={12}>
                <CardContent sx={{}} >
                  <Typography component="div" variant="h4" sx={{ marginBottom: '15px', fontWeight: '600' }}>
                    Welcome to DnD Solutions!
                  </Typography>

                  <Typography variant="body2" color="text.secondary" component="p" sx={{ marginBottom: '16px', fontSize: '16px' }}>
                    Founded in 2017, DnD Solutions is a forward-thinking company dedicated to providing high-quality, innovative solutions across various industries. With a diverse product portfolio, we specialize in manufacturing:
                  </Typography>

                  <ul className="list-disc list-inside pl-4 space-y-2 mb-4 text-base">
                    <li><strong>Organic Fertilizers:</strong> Liquid, solid, and capsule forms designed to enhance plant growth while maintaining environmental sustainability.</li>
                    <li><strong>Nano-Technological Construction Bonding and Waterproofing Chemicals:</strong> Advanced solutions for superior bonding and long-lasting waterproofing, ensuring durability and performance in construction projects.</li>
                    <li><strong>Custom Cleaning Agents:</strong> Tailor-made cleaning solutions to meet the unique needs of different industries, ensuring efficiency and effectiveness in maintaining cleanliness and hygiene.</li>
                  </ul>
                  <Typography variant="body2" color="text.secondary" component="p" sx={{ marginBottom: '16px', fontSize: '16px' }}>
                    Our commitment to quality, sustainability, and innovation drives us to deliver products that not only meet but exceed industry standards. At DnD Solutions, we are passionate about leveraging technology and expertise to support your success, whether you're cultivating crops, constructing durable structures, or maintaining pristine environments.</Typography>
                  <Typography variant="body2" color="text.secondary" component="p" sx={{ marginBottom: '16px', fontSize: '16px' }}>Thank you for choosing DnD Solutions. We look forward to partnering with you and contributing to your achievements.</Typography>
                </CardContent>
              </Grid>
              <Grid item lg={6} xs={12}>
                <CardMedia
                  component="img"
                  sx={{padding: '0 10px' }}
                  image={require(`${process.env.REACT_APP_IMAGES_PATH}/about/about.jpg`)}
                  alt="Card Image"
                />
              </Grid>
            </Grid>


          </Card>
        </Container1200>
      </Box>




    </>
  )
}

export default About
