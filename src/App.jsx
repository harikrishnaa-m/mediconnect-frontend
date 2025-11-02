import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landingpage from "./pages/Landingpage";
import Loginpage from "./pages/Loginpage";
import ViewDoctors from "./pages/ViewDoctors";
import DoctorDetails from "./pages/DoctorDetails";
import Pnf from "./pages/Pnf";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import Registerpage from "./pages/Registerpage";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFail from "./pages/PaymentFail";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/doctors" element={<ViewDoctors />} />
        <Route path="/doctor/:id" element={<DoctorDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/psuccess" element={<PaymentSuccess />} />
        <Route path="/pfailure" element={<PaymentFail />} />
        <Route path="*" element={<Pnf />} />
      </Routes>

      <Footer />

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
