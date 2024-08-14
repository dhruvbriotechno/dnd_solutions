import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, CircularProgress, Alert, Box, Container, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../state-management/admin/login/loginActions';
import { useStyles } from './Loginadmin.style';
import { ButtonFullBlack } from '../../shared/ButtonCustom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, user, error } = useSelector((state) => state.adminLogin);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      dispatch(login(values.email, values.password));
    },
  });

  useEffect(() => {
    console.log("user",user)
    if (user) {
      toast.success('Login successful!');
      setTimeout(() => {
        navigate('/admin/dashboard?tab=slider');
      }, 2000); 
    }
  }, [user, navigate]);

  return (
    <Box className={classes.login}>
      <Paper className={classes.loginBox} elevation={3}>
        <Container maxWidth="sm">
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom className={classes.title}>
              Admin Login
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                margin="normal"
              />
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                margin="normal"
              />
              <ButtonFullBlack
              sx={{mt:3}}
                type="submit"
                disabled={loading}
              >
                {loading ? <CircularProgress size="1rem" /> : 'Login'}
              </ButtonFullBlack>
              {error && (
                <Box mt={2}>
                  <Alert severity="error">{error}</Alert>
                </Box>
              )}
            </form>
          </Box>
        </Container>
      </Paper>
    </Box>
  );
};

export default Login;
