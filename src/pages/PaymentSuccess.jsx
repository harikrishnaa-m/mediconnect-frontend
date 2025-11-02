import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaHome,
  FaCalendarCheck,
  FaDownload,
  FaShare,
  FaWhatsapp,
  FaEnvelope,
  FaClock,
  FaUserMd,
  FaMapMarkerAlt,
} from "react-icons/fa";

function PaymentSuccess() {
  const navigate = useNavigate();

  const handleDownloadReceipt = () => {
    // Static function for design
    console.log("Download receipt");
  };

  const handleShareBooking = () => {
    // Static function for design
    console.log("Share booking");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Success Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-linear-to-r from-green-500 to-emerald-600 p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white rounded-full p-4">
                <FaCheckCircle className="w-16 h-16 text-green-500 animate-bounce" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Payment Successful!
            </h1>
            <p className="text-green-100 text-lg">
              Your appointment has been confirmed
            </p>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Confirmation Badge */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <FaCalendarCheck className="w-4 h-4" />
                Booking Confirmed
              </div>
              <p className="text-gray-600 mb-2">
                Thank you for choosing our service. Your booking is confirmed.
              </p>
            </div>

            {/* Back to Home Button */}
            <button
              onClick={() => navigate("/")}
              className="w-full bg-linear-to-r from-green-500 to-emerald-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <FaHome className="w-5 h-5" />
              Back to Homepage
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            Need help?{" "}
            <span
              onClick={() => {
                navigate("/contact");
              }}
              className="text-blue-600 hover:text-blue-700 cursor-pointer"
            >
              Contact Support
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

// Optional: You can add this component for better organization
const DetailItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-center justify-between py-2">
    <div className="flex items-center gap-2 text-gray-600">
      {Icon && <Icon className="w-4 h-4" />}
      <span>{label}</span>
    </div>
    <span className="font-semibold">{value}</span>
  </div>
);

export default PaymentSuccess;
