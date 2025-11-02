import React from "react";
import { FaExclamationTriangle, FaHome, FaArrowLeft } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Pnf() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <MdError className="mx-auto text-6xl text-red-500 mb-4" />
          <div className="flex items-center justify-center space-x-2">
            <span className="text-8xl font-bold text-gray-800">4</span>
            <FaExclamationTriangle className="text-6xl text-yellow-500" />
            <span className="text-8xl font-bold text-gray-800">4</span>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Oops! Page Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The page you're looking for doesn't exist or has been moved. Don't
            worry, it happens to the best of us!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => navigate("/")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <FaHome className="text-lg" />
            <span>Go Home</span>
          </button>

          <button
            onClick={() => navigate(-1)}
            className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <FaArrowLeft className="text-lg" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
          <p className="text-sm text-gray-500">
            If you believe this is an error, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pnf;
