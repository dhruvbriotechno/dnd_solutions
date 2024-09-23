import React from 'react';
import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import LoginAdmin from "./components/auth/LoginAdmin";
import Footer from "./components/footer";
import Header from "./components/header";
import About from "./pages/about";
import AdminDashboards from "./pages/admin/dashboard";
import Home from "./pages/home";
import ProtectedRoute from "./state-management/admin/login/ProtectedRoute";
import Products from './pages/products';
import ContactUs from './pages/contact';
import Media from './pages/media';
import OrganicLiquidFertilizer from './pages/products/OrganicFertilizers/OrganicLiquidFertilizer';
import withBanner from './hoc/withBanner';

function App() {
  const isAuthenticated = useSelector((state) => state.adminLogin.isAuthenticated);

  const LiquidFertilizer = withBanner(OrganicLiquidFertilizer, `${process.env.PUBLIC_URL}/images/bg/product-banner.webp`, 'Organic Liquid Fertilizer');


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/admin/login" element={<LoginAdmin />} />
        {/* <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/admin/dashboard" element={<AdminDashboards />} />
        </Route> */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin/dashboard" element={<AdminDashboards />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/organic-liquid-fertilizer" element={<LiquidFertilizer />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<ContactUs />} />
       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;



// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
// import "./App.css";
// import Footer from "./components/footer";
// import Header from "./components/header";
// import About from "./pages/about";
// import Home from "./pages/home";
// import Location from "./pages/location";
// import OurTeam from "./pages/ourTeam";
// import Services from "./pages/service";
// import LoginAdmin from "./components/auth/LoginAdmin";
// import OfferOfMonth from "./pages/OfferOfMonth";
// import Gallery from "./pages/gallery";
// import AdminDashboards from "./pages/admin/dashboard"
// import ProtectedRoute from "./state-management/admin/login/ProtectedRoute";
// import { useSelector } from "react-redux";



// function App() {

//   const isAuthenticated = useSelector((state) => state.login.isAuthenticated);

//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/admin" element={<LoginAdmin />} />
//         <ProtectedRoute
//           path="/admin/dashboard"
//           element={<AdminDashboards />}
//           isAuthenticated={isAuthenticated}
//         />
//         {/* <Route path="/admin/dashboard" element={<AdminDashboards/>}/> */}
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/offer-of-month" element={<OfferOfMonth />} />
//         <Route path="/location" element={<Location />} />
//         <Route path="/ourteam" element={<OurTeam />} />
//         <Route path="/gallery" element={<Gallery />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
