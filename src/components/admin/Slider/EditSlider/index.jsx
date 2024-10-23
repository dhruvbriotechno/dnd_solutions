import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { getSliderById } from '../../../../state-management/admin/slider/getSingleSlider/sliderActions';
import { updateSlider } from '../../../../state-management/admin/slider/updateSlider/sliderActions';
import { ButtonFullBlack } from '../../../shared/ButtonCustom/index';

const EditSlider = ({ sliderId, handleCloseEdit }) => {
  const dispatch = useDispatch();
  const { loading, success, message, error } = useSelector((state) => state.updateSlider);
  const { singleSlider, singleLoading, singleError } = useSelector((state) => state.singleSlider);
  const [imagePreview, setImagePreview] = useState(null);

  // Fetch the single slider data
  useEffect(() => {
    dispatch(getSliderById(sliderId));
  }, [dispatch, sliderId]);
  console.log("singleSlider", singleSlider)

  const formik = useFormik({
    initialValues: {
      title: '',
      image: null,
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      image: Yup.mixed().test('fileSize', 'File too large', value => {
        return value === null || (value && value.size <= 5 * 1024 * 1024); // 5MB file size limit
      }).test('fileType', 'Unsupported File Format', value => {
        return value === null || (value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type));
      }),
    }),
    onSubmit: (values) => {
      const formData = new FormData();
      

      formData.append('sliderid', sliderId);
      formData.append('title', values.title);
      if (values.image) {
        formData.append('image', values.image);
      }
      dispatch(updateSlider(formData));
      
      setTimeout(() => {
        console.log("message", message)
        if (message?.message !== undefined) {
          toast.success(message?.message, {
            autoClose: 2000,
          })
        }
        handleCloseEdit()
      }, [2000])
    },
  });


  // Update the formik initial values when the singleSlider data is fetched
  useEffect(() => {
    if (singleSlider) {
      formik.setValues({
        title: singleSlider.title,
        image: null,
      });
      setImagePreview(singleSlider.image);
    }
  }, [singleSlider]);

  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue('image', file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleUpdateClick = () => {
    formik.handleSubmit();
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        {singleLoading ? 'Loading...' :
          <form>
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
                <ButtonFullBlack
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="button"
                  onClick={handleUpdateClick}
                  disabled={loading}
                  startIcon={loading && <CircularProgress size="1rem" />}
                >
                  {loading ? 'Updating...' : 'Update Slider'}
                </ButtonFullBlack>
              </Grid>
            </Grid>
            {/* {success && (
            <Box mt={2}>
              <Alert severity="success">Slider updated successfully</Alert>
            </Box>
          )}
          {error && (
            <Box mt={2}>
              <Alert severity="error">{error}</Alert>
            </Box>
          )} */}
          </form>
        }
      </Box>
    </Container>
  );
};

export default EditSlider;
