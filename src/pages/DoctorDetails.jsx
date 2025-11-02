import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getADoctorAPI, makepaymentAPI } from "../services/allAPIs";

function DoctorDetails() {
  const [doctor, setDoctor] = useState();
  const { id } = useParams();
  console.log(id);
  const getADoctor = async () => {
    if (id) {
      const result = await getADoctorAPI(id);
      console.log(result.data);
      setDoctor(result.data);
    }
  };
  useEffect(() => {
    getADoctor();
  }, []);
  const makePayment = async () => {
    try {
      if (doctor) {
        const reqBody = { details: doctor };
        const result = await makepaymentAPI(reqBody);

        if (result && result.data) {
          console.log("Payment successful:", result.data);
          window.location.href = result.data.url;
        }
      }
    } catch (err) {
      console.log("Payment failed:", err);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {doctor && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-blue-500 text-white p-6 text-center">
              <img
                src={doctor.pic}
                alt={doctor.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white"
              />
              <h1 className="text-2xl font-bold">{doctor.name}</h1>
            </div>

            {/* Details */}
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center  pb-3">
                <span className="text-gray-600 font-medium">Doctor ID:</span>
                <span className="text-gray-800 text-sm font-mono">
                  {doctor._id}
                </span>
              </div>

              <div className="flex justify-between items-center  pb-3">
                <span className="text-gray-600 font-medium">Name:</span>
                <span className="text-gray-800 font-semibold">
                  {doctor.name}
                </span>
              </div>

              <div className="flex justify-between items-center  pb-3">
                <span className="text-gray-600 font-medium">
                  Specialisation:
                </span>
                <span className="text-blue-600 font-semibold">
                  {doctor.specialisation}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Fee:</span>
                <span className="text-green-600 font-bold text-lg">
                  ₹{doctor.fee}
                </span>
              </div>

              <div className="pt-4">
                <button
                  onClick={makePayment}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg "
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DoctorDetails;
