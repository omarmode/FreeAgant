import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";
import Contacts from "./pages/Contacts";
import Work from "./pages/Work";
import NavbarMain from "./components/NavbarMain"; // شريط التنقل الرئيسي
import NavbarTop from "./components/NavbarTop"; // شريط التنقل العلوي (الأسود)
import NavbarPage from "./components/NavbarPage"; // شريط التنقل المتغير (لكل صفحة)
import Bills from "./pages/Bills";
import Estimates from "./pages/Estimates";
import Invoices from "./pages/Invoices";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <Router>
      {/* Navbar الأول (الأسود) */}
      <NavbarTop />

      {/* Navbar الرئيسي (التنقلات) */}
      <NavbarMain />

      {/* التنقل بين الصفحات */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <NavbarPage title="Overview" actionButton="Add new" /> */}
              <Overview />
            </>
          }
        />
        <Route
          path="/contacts"
          element={
            <>
              {/* <NavbarPage title="Contacts" /> */}
              <Contacts />
            </>
          }
        />
        <Route
          path="/work"
          element={
            <>
              <NavbarPage title="Work" />
              <Work />
            </>
          }
        />
        <Route
          path="/bills"
          element={
            <>
              {/* <NavbarPage title="Work" /> */}
              <Bills />
            </>
          }
        />
        <Route
          path="/work/ Estimates"
          element={
            <>
              <NavbarPage title=" Estimates" />
              <Estimates />
            </>
          }
        />
        <Route
          path="/work/Invoices"
          element={
            <>
              <NavbarPage title=" Invoices" />
              <Invoices />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
