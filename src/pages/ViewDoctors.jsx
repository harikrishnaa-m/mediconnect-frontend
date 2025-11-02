import React, { useEffect, useState, useContext } from "react";
import { getAllDoctorsAPI } from "../services/allAPIs";
import { Link } from "react-router-dom";
import { FaSearch, FaFilter, FaTimes, FaSignInAlt } from "react-icons/fa";
import { AppContext } from "../context/ContextAPI";

function ViewDoctors() {
  const [doctors, setDoctors] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecializations, setSelectedSpecializations] = useState([]);
  const [feeRange, setFeeRange] = useState({ min: 0, max: 1000 });
  const [showFilters, setShowFilters] = useState(false);

  // Get loggedIn state from context
  const { loggedIn } = useContext(AppContext);

  const getAllDoctors = async () => {
    const result = await getAllDoctorsAPI();
    console.log(result.data);
    setDoctors(result.data);
  };
  useEffect(() => {
    getAllDoctors();
  }, []);

  // Get unique specializations from doctors data
  const specializations = [
    ...new Set(doctors?.map((doctor) => doctor.specialisation) || []),
  ];

  // Handle specialization filter change
  const handleSpecializationChange = (specialization) => {
    setSelectedSpecializations((prev) =>
      prev.includes(specialization)
        ? prev.filter((s) => s !== specialization)
        : [...prev, specialization]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedSpecializations([]);
    setFeeRange({ min: 0, max: 1000 });
    setSearchTerm("");
  };

  // Filter doctors based on search term, specializations, and fee range
  const filteredDoctors = doctors?.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialisation.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpecialization =
      selectedSpecializations.length === 0 ||
      selectedSpecializations.includes(doctor.specialisation);

    const matchesFeeRange =
      doctor.fee >= feeRange.min && doctor.fee <= feeRange.max;

    return matchesSearch && matchesSpecialization && matchesFeeRange;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Our Doctors
      </h1>

      {/* Search Box and Filter Toggle */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        <div className="flex-1 max-w-md mx-auto lg:mx-0">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search doctors by name or specialization..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Filter Toggle Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <FaFilter className="mr-2" />
          Filters
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filter Sidebar */}
        <div
          className={`lg:w-1/4 ${showFilters ? "block" : "hidden lg:block"}`}
        >
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
              <button
                onClick={clearFilters}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Clear All
              </button>
            </div>

            {/* Specialization Filters */}
            <div className="mb-6">
              <h4 className="text-md font-medium text-gray-700 mb-3">
                Specialization
              </h4>
              <div className="space-y-2">
                {specializations.map((specialization) => (
                  <label key={specialization} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedSpecializations.includes(specialization)}
                      onChange={() =>
                        handleSpecializationChange(specialization)
                      }
                      className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-600">
                      {specialization}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Fee Range Filter */}
            <div className="mb-4">
              <h4 className="text-md font-medium text-gray-700 mb-3">
                Consultation Fee (₹)
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <label className="text-sm text-gray-600">Min:</label>
                  <input
                    type="number"
                    value={feeRange.min}
                    onChange={(e) =>
                      setFeeRange((prev) => ({
                        ...prev,
                        min: parseInt(e.target.value) || 0,
                      }))
                    }
                    className="w-20 px-2 py-1 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    min="0"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <label className="text-sm text-gray-600">Max:</label>
                  <input
                    type="number"
                    value={feeRange.max}
                    onChange={(e) =>
                      setFeeRange((prev) => ({
                        ...prev,
                        max: parseInt(e.target.value) || 1000,
                      }))
                    }
                    className="w-20 px-2 py-1 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    min="0"
                  />
                </div>
                <div className="text-xs text-gray-500">
                  Range: ₹{feeRange.min} - ₹{feeRange.max}
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {(selectedSpecializations.length > 0 || searchTerm) && (
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Active Filters:
                </h4>
                <div className="space-y-1">
                  {searchTerm && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                      Search: {searchTerm}
                      <button
                        onClick={() => setSearchTerm("")}
                        className="ml-1 text-blue-600 hover:text-blue-800"
                      >
                        <FaTimes className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {selectedSpecializations.map((spec) => (
                    <span
                      key={spec}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 mr-1 mb-1"
                    >
                      {spec}
                      <button
                        onClick={() => handleSpecializationChange(spec)}
                        className="ml-1 text-green-600 hover:text-green-800"
                      >
                        <FaTimes className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="lg:w-3/4">
          {doctors && doctors.length > 0 ? (
            filteredDoctors && filteredDoctors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredDoctors.map((doctor) => (
                  <div
                    key={doctor._id}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <img
                          src={doctor.pic}
                          alt={doctor.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h2 className="text-xl font-semibold text-gray-800">
                            {doctor.name}
                          </h2>
                          <p className="text-blue-600 font-medium">
                            {doctor.specialisation}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl font-bold text-green-600">
                          ₹{doctor.fee}
                        </span>
                        <span className="text-sm text-gray-500">
                          Consultation Fee
                        </span>
                      </div>
                      {loggedIn ? (
                        <Link to={`/doctor/${doctor._id}`}>
                          <button
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                            onClick={() =>
                              console.log(
                                `Booking appointment with ${doctor.name}`
                              )
                            }
                          >
                            Book Now
                          </button>
                        </Link>
                      ) : (
                        <Link to="/login">
                          <button className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                            <FaSignInAlt className="w-4 h-4" />
                            <span>Login to Book Doctor</span>
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex justify-center items-center h-64">
                <p className="text-gray-500 text-lg">
                  {searchTerm || selectedSpecializations.length > 0
                    ? "No doctors found matching your filters"
                    : "No doctors available"}
                </p>
              </div>
            )
          ) : (
            <div className="flex justify-center items-center h-64">
              <p className="text-gray-500 text-lg">Loading doctors...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewDoctors;
