import React from 'react';
import SliderTable from '../../../components/admin/Slider';
import OfferTable from '../../../components/admin/Offer';
import { useLocation } from 'react-router-dom';
import { useStyles } from './dashboard.style';
import { Box } from '@mui/material';

const AdminDashboard = () => {
  const classes = useStyles();
  const location = useLocation();

  const extractValue = (queryString) => {
    const parts = queryString.split("=");
    return parts[1];
  };

  const activeTab = extractValue(location.search);


  return (
    <Box className={classes.dashboardParent}>
      {activeTab == "slider" ? (
        <SliderTable />
      ) : activeTab == "offer" ? (
        <OfferTable />
      ) : (
        ""
      )}
    </Box>
  );
}

export default AdminDashboard;
