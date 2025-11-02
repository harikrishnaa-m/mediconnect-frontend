import { FaUser, FaEnvelope, FaLock, FaClinicMedical } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { registerAPI, googleSigninAPI } from "../services/allAPIs";
import { auth, googleProvider } from "../firebase_config/Firebase";
import { signInWithPopup } from "firebase/auth";
import { AppContext } from "../context/ContextAPI";

const Registerpage = () => {
  const navigate = useNavigate();
  const { setLoggedIn } = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    setIsLoading(true);

    try {
      const reqBody = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      const result = await registerAPI(reqBody);

      if (result.status === 200) {
        toast.success("Registration successful! Please login to continue", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Clear form
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });

        // Redirect to login page after 3 seconds
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      console.error("Registration error:", error);
      if (error.response && error.response.data) {
        toast.error(error.response.data || "Registration failed");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Google Sign Up
  const handleGoogleSignUp = async () => {
    try {
      setIsLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      const user = result?.user;
      const userDetails = { name: user?.displayName, email: user?.email };

      const userData = await googleSigninAPI(userDetails);

      if (userData?.status === 200) {
        sessionStorage.setItem("token", userData.data.token);
        sessionStorage.setItem("user", JSON.stringify(userData.data.userdata));
        setLoggedIn(true);

        toast.success(
          `Welcome to MediConnect, ${userData.data.userdata.name}!`,
          {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );

        setTimeout(() => {
          navigate("/");
        }, 2500);
      } else {
        toast.error("Something went wrong with Google sign-up");
      }
    } catch (error) {
      console.error("Google sign-up error:", error);
      toast.error("Failed to sign up with Google. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <FaClinicMedical className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">MediConnect</h1>
        </div>

        {/* Title */}
        <div className="flex justify-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Create Your Account
          </h2>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Full Name Input */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
            <FaUser className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              disabled={isLoading}
              className="w-full outline-none text-gray-700 disabled:bg-gray-50"
              required
            />
          </div>

          {/* Email Input */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
            <FaEnvelope className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              disabled={isLoading}
              className="w-full outline-none text-gray-700 disabled:bg-gray-50"
              required
            />
          </div>

          {/* Password Input */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
            <FaLock className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              disabled={isLoading}
              className="w-full outline-none text-gray-700 disabled:bg-gray-50"
              required
              minLength="6"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500">
            <FaLock className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              disabled={isLoading}
              className="w-full outline-none text-gray-700 disabled:bg-gray-50"
              required
              minLength="6"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center justify-center bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm text-gray-500">or</span>
          <div className="grow border-t border-gray-300"></div>
        </div>

        {/* Google Sign Up Button */}
        <button
          onClick={handleGoogleSignUp}
          disabled={isLoading}
          type="button"
          className="flex items-center justify-center w-full border border-gray-300 rounded-lg py-2 px-4 text-gray-700 font-medium hover:bg-gray-50 transition-colors mb-6 disabled:bg-gray-100 disabled:cursor-not-allowed"
        >
          <FcGoogle className="w-5 h-5 mr-3" />
          {isLoading ? "Signing up..." : "Sign up with Google"}
        </button>

        {/* Login Link */}
        <div className="flex justify-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login">
              <button className="text-blue-600 hover:text-blue-700 font-semibold">
                Sign in
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registerpage;
