import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { addSlider } from '../../../../state-management/admin/slider/addSlider/sliderActions';
import { ButtonFullBlack } from '../../../shared/ButtonCustom/index';

const AddSlider = ({ handleCloseAdd }) => {
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.addSlider);
  const [imagePreview, setImagePreview] = useState(null);

  const formik = useFormik({
    initialValues: {
      title: '',
      image: null,
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      image: Yup.mixed().required('Image is required'),
    }),
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('image', values.image);
      dispatch(addSlider(formData));

      setTimeout(() => {
        handleCloseAdd();
      }, [2000])
      
      if (message) {
        toast.success(message, {
          autoClose: 2000,
        });
      }
    },
  });

  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue('image', file);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="title"
                name="title"
                label="Title"
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
              />
            </Grid>
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
                <Box mt={2} display="flex" justifyContent="center">
                  <img
                    src={imagePreview}
                    alt="Image Preview"
                    style={{ maxWidth: '100%', maxHeight: '300px' }}
                  />
                </Box>
              )}
            </Grid>
            <Grid item xs={12}>
            <ButtonFullBlack
            type="submit"
            fullWidth
            variant="contained"
            startIcon={<AddIcon />}
            disabled={loading}
          >
            {loading ? 'Adding...' : 'Add Slider'}
          </ButtonFullBlack>
            </Grid>
          </Grid>
          {/* {message && (
            <Box mt={2}>
              <Alert severity="success">{message}</Alert>
            </Box>
          )}
          {error && (
            <Box mt={2}>
              <Alert severity="error">{error}</Alert>
            </Box>
          )} */}
        </form>
      </Box>
    </Container>
  );
};

export default AddSlider;
