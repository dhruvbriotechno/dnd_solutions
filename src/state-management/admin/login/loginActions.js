import axios from 'axios';
import { toast } from 'react-toastify';

export const login = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post('https://beauty-bee-server.onrender.com/login', { email, password });
    if (data.status) {
      localStorage.setItem('token', data.token);
      dispatch({ type: 'LOGIN_SUCCESS', payload: data.userData });
      toast.success(data.message);
    } else {
      dispatch({ type: 'LOGIN_FAILURE', payload: data.message });
      toast.error(data.message);
    }
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    toast.error('An error occurred');
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: 'LOGOUT_SUCCESS' });
  toast.success('Logged out successfully');
};





// import axios from 'axios';

// export const LOGIN_REQUEST = 'LOGIN_REQUEST';
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// export const login = (email, password) => async (dispatch) => {
//   dispatch({ type: LOGIN_REQUEST });

//   try {
//     const response = await axios.post('https://beauty-bee-server.onrender.com/login', { email, password });
//     const data = response.data;

//     if (data.status) {
//       dispatch({ type: LOGIN_SUCCESS, payload: data.userData });
//     } else {
//       dispatch({ type: LOGIN_FAILURE, payload: data.message });
//     }
//   } catch (error) {
//     dispatch({ type: LOGIN_FAILURE, payload: 'Something went wrong' });
//   }
// };


// export const logout = () => ({
//   type: 'LOGOUT',
// });