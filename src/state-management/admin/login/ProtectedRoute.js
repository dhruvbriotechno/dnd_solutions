import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = localStorage.getItem('token');
  return token ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default ProtectedRoute;



// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';

// const ProtectedRoute = ({ isAuthenticated }) => {
//   return isAuthenticated ? <Outlet /> : <Navigate to="/admin" />;
// };

// export default ProtectedRoute;



// import React from 'react';
// import { Route, Navigate  } from 'react-router-dom';

// const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       isAuthenticated ? <Component {...props} /> : <Navigate to="/admin/login" />
//     }
//   />
// );

// export default ProtectedRoute;
