import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const CustomCard = ({ index, image, rightImg, title, description }) => {
  return (
    <Card
      index={index}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: rightImg ? 'row' : 'row-reverse' },
        alignItems: 'center',
        marginBottom: '30px',
        padding: { xs: 2, md: 3 },
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: '100%', md: '40%' },
          height: 'auto',
          order: rightImg ? 2 : 1, 
        }}
        image={image}
        alt="Card Image"
      />

      <Grid container sx={{ order: 2 }}>
        <Grid item xs={12}>
          <CardContent sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              component="div"
              variant="h4"
              sx={{ marginBottom: '10px', fontWeight: '600' }}
            >
              {title}
            </Typography>
            {description &&
              description.map((text, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  color="text.secondary"
                  component="p"
                  sx={{ marginBottom: '8px' }}
                >
                  {text}
                </Typography>
              ))}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CustomCard;
