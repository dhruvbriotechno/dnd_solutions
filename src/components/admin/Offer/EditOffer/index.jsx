import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Alert, Box, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { getOfferById } from '../../../../state-management/admin/offer/getSingleOffer/offerActions';
import { updateOffer } from '../../../../state-management/admin/offer/updateOffer/offerActions';
import { ButtonFullBlack } from '../../../shared/ButtonCustom/index';
import { Loader } from '../../../shared/Loader';


const EditOffer = ({ offerId, handleCloseEdit }) => {
  const dispatch = useDispatch();
  const [imagePreview, setImagePreview] = useState(null);
  const { loading, offer, success, error } = useSelector((state) => state.updateOffer);
  const { singleOffer, singleLoading, singleError } = useSelector((state) => state.singleOffer);

  useEffect(() => {
    console.log('Offer ID:', offerId);
    dispatch(getOfferById(offerId));
  }, [dispatch, offerId]);

  // useEffect(() => {
  // }, [offerId]);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      percentage: '',
      image: null,
    },

    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      description: Yup.string().required('Description is required'),
      percentage: Yup.number().required('Percentage is required').min(0).max(100),
      // image: Yup.mixed()
      //   .test('fileSize', 'File too large', (value) => !value || (value && value.size <= 5 * 1024 * 1024)) // 5MB file size limit
      //   .test('fileType', 'Unsupported File Format', (value) => !value || (value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type)))

      image: Yup.mixed().test('fileSize', 'File too large', value => {
        return value === null || (value && value.size <= 5 * 1024 * 1024); // 5MB file size limit
      }).test('fileType', 'Unsupported File Format', value => {
        return value === null || (value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type));
      }),

    }),
    onSubmit: (values) => {

      const formData = new FormData();
      formData.append('offerid', offerId);
      formData.append('title', values.title);
      formData.append('description', values.description);
      formData.append('percentage', values.percentage);
      // if (values.image) {
      //   formData.append('image', values.image);
      // }

      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      dispatch(updateOffer(formData));
      console.log("offer", offer?.message)
      if(error){
        toast.error(error?.message || "Error updating offer", {
          autoClose: 2000,
        })
      }
      toast.success(offer?.message || "Offer updated successfully", {
        autoClose: 2000,
      })
      setTimeout(() => {
        handleCloseEdit()
      }, [2000])

    },
  });

  useEffect(() => {
    if (singleOffer) {
      formik.setValues({
        title: singleOffer.title,
        description: singleOffer.description,
        percentage: singleOffer.percentage,
        image: null,
        // image: singleOffer.image,
      });
      setImagePreview(singleOffer.image);
    }
  }, [singleOffer]);

  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue('image', file);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <Box sx={{ margin: '0 20px', marginTop: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      {singleLoading ? <Loader /> :
        <Grid container spacing={2} component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mb: 3 }}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="title"
              label="Offer Title"
              name="title"
              autoComplete="offer-title"
              autoFocus
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
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
              autoComplete="offer-description"
              autoFocus
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
              autoComplete="offer-percentage"
              autoFocus
              value={formik.values.percentage}
              onChange={formik.handleChange}
              error={formik.touched.percentage && Boolean(formik.errors.percentage)}
              helperText={formik.touched.percentage && formik.errors.percentage}
            />
          </Grid>
          {/* <Grid item xs={12}>
            <input
              accept="image/*"
              id="image"
              name="image"
              type="file"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
            <label htmlFor="image">
              <Button variant="contained" color="primary" component="span" fullWidth>
                Upload Image
              </Button>
            </label>
            {formik.touched.image && formik.errors.image ? (
              <Typography color="error">{formik.errors.image}</Typography>
            ) : null}
          </Grid>
          <Grid item xs={12}>
            {imagePreview && (
              <Box mt={2} display="flex" justifyContent="center">
                <img src={imagePreview} alt="Image Preview" style={{ maxWidth: '100%', maxHeight: '300px' }} />
              </Box>
            )}
          </Grid> */}


          <Grid item xs={12} sm={6}>
            <input
              accept="image/*"
              id="image"
              name="image"
              type="file"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
            <label htmlFor="image">
              <Button
                // variant="contained"
                color="primary"
                component="span"
                fullWidth
                startIcon={<CloudUploadIcon />}
              >
                Upload Image
              </Button>
            </label>
            {formik.touched.image && formik.errors.image ? (
              <Typography color="error">{formik.errors.image}</Typography>
            ) : null}
          </Grid>

          <Grid item xs={12} sm={6}>
            {imagePreview && (
              <Box mt={1} display="flex" justifyContent="center">
                <img
                  src={imagePreview}
                  alt={formik.values.title}
                  style={{ maxWidth: '100%', maxHeight: '300px' }}
                />
              </Box>
            )}
          </Grid>


          <Grid item xs={12}>
            <ButtonFullBlack color="primary" variant="contained" fullWidth type="button" onClick={formik.handleSubmit} disabled={loading}>
              {loading ? <CircularProgress size="1rem" /> : 'Update Offer'}
            </ButtonFullBlack>
          </Grid>
          {success && (
            <Box mt={2}>
              <Alert severity="success">Offer updated successfully</Alert>
            </Box>
          )}
          {error && (
            <Box mt={2}>
              <Alert severity="error">{error}</Alert>
            </Box>
          )}
        </Grid>
      }

    </Box>
  );
};

export default EditOffer;
