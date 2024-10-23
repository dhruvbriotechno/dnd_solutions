import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { addOffer } from '../../../../state-management/admin/offer/addOffer/offerActions';
import { ButtonFullBlack } from '../../../shared/ButtonCustom/index';

const AddOffer = ({handleCloseAdd}) => {
  const [preview, setPreview] = useState(null);
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.AddOffer);
  const addOfferReducer = useSelector((state) => state.AddOffer);


console.log("addOfferReducer",addOfferReducer)
  const formik = useFormik({
    initialValues: {
      offerTitle: '',
      description: '',
      percentage: '',
      image: null,
    },
    validationSchema: Yup.object({
      offerTitle: Yup.string().required('Offer title is required'),
      description: Yup.string().required('Description is required'),
      percentage: Yup.number().required('Percentage is required').min(0).max(100),
      image: Yup.mixed().required('Image is required'),
    }),
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append('title', values.offerTitle);
      formData.append('description', values.description);
      formData.append('percentage', values.percentage);
      formData.append('image', values.image);

      // Debugging: Log FormData content
      for (let pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }

      dispatch(addOffer(formData));
      if(error){
        toast.error(error, {
          autoClose: 2000,
        });
      }

      toast.success(message || "Offer added successfully", {
        autoClose: 2000,
      });

      setTimeout(() => {
        handleCloseAdd()
      }, 2000);
    },
  });

  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue('image', file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  return (
    <Box
      sx={{
        margin: '0 20px',
        marginTop: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Grid container spacing={2} component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mb: 3 }}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="offerTitle"
            label="Offer Title"
            name="offerTitle"
            autoComplete="offer-title"
            autoFocus
            value={formik.values.offerTitle}
            onChange={formik.handleChange}
            error={formik.touched.offerTitle && Boolean(formik.errors.offerTitle)}
            helperText={formik.touched.offerTitle && formik.errors.offerTitle}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="description"
            label="Description"
            name="description"
            autoComplete="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="percentage"
            label="Percentage"
            name="percentage"
            type="number"
            autoComplete="percentage"
            value={formik.values.percentage}
            onChange={formik.handleChange}
            error={formik.touched.percentage && Boolean(formik.errors.percentage)}
            helperText={formik.touched.percentage && formik.errors.percentage}
          />
        </Grid>
        <Grid item xs={6}>
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="image">
            <Button component="span" startIcon={<CloudUploadIcon />} fullWidth>
              Upload Image
            </Button>
          </label>
        </Grid>
        <Grid item xs={6}>
          {preview && (
            <Box mt={2} textAlign="center">
              <img src={preview} alt="Selected" style={{ maxWidth: '100%', maxHeight: '200px' }} />
            </Box>
          )}
          {formik.touched.image && formik.errors.image ? (
            <Typography color="error" variant="body2" sx={{mt:1}}>
              {formik.errors.image}
            </Typography>
          ) : null}
        </Grid>
        <Grid item xs={12} sx={{ marginTop: '20px' }}>
          <ButtonFullBlack
            type="submit"
            fullWidth
            variant="contained"
            startIcon={<AddIcon />}
            disabled={loading}
          >
            {loading ? 'Adding...' : 'Add Offer'}
          </ButtonFullBlack>
          {/* {message && (
            <Typography color="success" variant="body2">
              {message}
            </Typography>
          )}
          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )} */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddOffer;
