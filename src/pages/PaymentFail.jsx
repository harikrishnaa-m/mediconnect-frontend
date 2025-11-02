import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaExclamationTriangle,
  FaHome,
  FaRedo,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

function PaymentFail() {
  const navigate = useNavigate();

  const handleRetryPayment = () => {
    // Static function for design
    console.log("Retry payment");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Error Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-linear-to-r from-red-500 to-orange-500 p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white rounded-full p-4">
                <FaExclamationTriangle className="w-16 h-16 text-red-500 animate-pulse" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Payment Failed!
            </h1>
            <p className="text-red-100 text-lg">
              We couldn't process your payment
            </p>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Error Badge */}
            <div className="text-center mb-8">
              <p className="text-gray-600 mb-2">
                Sorry, we encountered an issue while processing your payment.
                Please try again.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            Your card was not charged.{" "}
            <span
              onClick={() => navigate("/help")}
              className="text-blue-600 hover:text-blue-700 cursor-pointer"
            >
              Learn more
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PaymentFail;
