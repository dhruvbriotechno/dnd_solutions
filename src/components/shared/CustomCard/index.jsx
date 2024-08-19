import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const CustomCard = () => {
  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 160 }}
        image="https://via.placeholder.com/160"
        alt="Card Image"
      />
      <Grid container>
        <Grid item xs={12}>
          <CardContent>
            <Typography component="div" variant="h5">
              Card Title
            </Typography>
            <Typography variant="body2" color="text.secondary" component="p">
              This is a description of the card. It can be a few sentences long to provide more information about the content.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CustomCard;
