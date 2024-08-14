const initialState = {
  isAuthenticated: !!localStorage.getItem('token'),
  user: null,
  loading: false,
  error: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};





// const initialState = {
//   loading: false,
//   user: null,
//   error: null,
//   isAuthenticated: !!localStorage.getItem('token'),
// };

// const loginReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'LOGIN_REQUEST':
//       // Handle login request
//       return { ...state, loading: true, error: null };
//     case 'LOGIN_SUCCESS':
//       // Handle login success
//       localStorage.setItem('token', action.payload.token);
//       return { ...state, loading: false, user: action.payload.user, isAuthenticated: true };
//     case 'LOGIN_FAILURE':
//       // Handle login failure
//       return { ...state, loading: false, error: action.payload.error };
//     case 'LOGOUT':
//       // Handle logout
//       localStorage.removeItem('token');
//       return { ...state, user: null, isAuthenticated: false };
//     default:
//       return state;
//   }
// };

// export default loginReducer;




