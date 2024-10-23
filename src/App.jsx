import React from 'react';
import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import LoginAdmin from "./components/auth/LoginAdmin";
import Footer from "./components/footer";
import Header from "./components/header";
import withBanner from './hoc/withBanner';
import About from "./pages/about";
import AdminDashboards from "./pages/admin/dashboard";
import ContactUs from './pages/contact';
import Home from "./pages/home";
import Media from './pages/media';
import Products from './pages/products';
import BioBasedOrganicSolidFertilizer from './pages/products/OrganicFertilizers/BioBasedOrganicSolidFertilizer';
import OrganicActiveCapsuleFertilizer from './pages/products/OrganicFertilizers/OrganicActiveCapsuleFertilizer';
import OrganicLiquidFertilizer from './pages/products/OrganicFertilizers/OrganicLiquidFertilizer';
import ProtectedRoute from "./state-management/admin/login/ProtectedRoute";
import solidFertilize from "./assets/img/products/organic-fertilizer/solidFertilize.jpg";
import CapsuleFertilizer from "./assets/img/products/organic-fertilizer/Organic-Active-Capsule-Fertilizer.jpg";
import liquidFertilizer from "./assets/img/products/organic-fertilizer/liquidFertilizer.jpg";
import ConcreteBondingPowder from './pages/products/ConstructionChemicals/ConcreteBondingPowder';
import NanotechWaterproofingLiquidChemical from './pages/products/ConstructionChemicals/NanotechWaterproofingLiquidChemical';


function App() {
  const isAuthenticated = useSelector((state) => state.adminLogin.isAuthenticated);

  // Organic Fertilizer 
  const OrganicLiquidFertilizer__ = withBanner(OrganicLiquidFertilizer, `${liquidFertilizer}`, 'Organic Liquid Fertilizer');
  const BioBasedOrganicSolidFertilizer__ = withBanner(BioBasedOrganicSolidFertilizer, `${solidFertilize}`, 'Bio based Organic solid Fertilizer');
  const OrganicActiveCapsuleFertilizer__ = withBanner(OrganicActiveCapsuleFertilizer, `${CapsuleFertilizer}`, 'Organic Active Capsule Fertilizer');

  // Construction Chemicals
  const ConcreteBondingPowder__ = withBanner(ConcreteBondingPowder, `${CapsuleFertilizer}`, 'Concrete Bonding Powder');
  const NanotechWaterproofingLiquidChemical__ = withBanner(NanotechWaterproofingLiquidChemical, `${CapsuleFertilizer}`, 'Nano technology based Water proofing Chemical');


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
        {/* Products Starts */}
        {/* Organic Fertilizer  */}
        <Route path="/products/organic-liquid-fertilizer" element={<OrganicLiquidFertilizer__ />} />
        <Route path="/products/bio-based-organic-solid-fertilizer" element={<BioBasedOrganicSolidFertilizer__ />} />
        <Route path="/products/organic-active-capsule-fertilizer" element={<OrganicActiveCapsuleFertilizer__ />} />

        {/* Construction Chemicals */}
        <Route path="/products/concrete-bonding-powder" element={<ConcreteBondingPowder__ />} />
        <Route path="/products/nano-technology-based-water-proofing-chemical" element={<NanotechWaterproofingLiquidChemical__ />} />

        {/* Products End */}

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
