import { FaUser, FaLock, FaClinicMedical } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase_config/Firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { googleSigninAPI, loginAPI } from "../services/allAPIs";
import { ToastContainer, toast, Zoom } from "react-toastify";
import { useContext, useState } from "react";
import { AppContext } from "../context/ContextAPI";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);
  const { loggedIn, setLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  const googlelogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      const user = result?.user;
      const userDetails = { name: user?.displayName, email: user?.email };
      console.log(userDetails);
      const userData = await googleSigninAPI(userDetails);
      console.log(userData);
      sessionStorage.setItem("token", userData.data.token);
      sessionStorage.setItem("user", JSON.stringify(userData.data.userdata));
      if (userData?.status == 200) {
        toast.success(
          `Welcome to MedicConnect ${" "}${userData.data.userdata.name}`,
          {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
          }
        );
        setTimeout(() => {
          navigate("/");
        }, 2500);
        setLoggedIn(true);
      } else {
        toast.error("Oops, something went wrong", {
          position: "top-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
      }
    } catch (err) {
      console.log(err);
      toast.error("Oops, something went wrong", {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });
    }
  };
  const handleLogin = async () => {
    if (email.trim() == "" || password.trim() == "") {
      toast.error("Please fill the form", {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });
    } else {
      const reqBody = { email: email, password: password };
      const result = await loginAPI(reqBody);
      console.log(result);
      if (result.status == 400) {
        toast.error(`${result?.response?.data}`, {
          position: "top-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
      }
      if (result?.status == 200) {
        toast.success(`Welcome to MediConnect`, {
          position: "top-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
        setLoggedIn(true);
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
      if (result?.status == 500) {
        toast.error(`Something went wrong`, {
          position: "top-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
      }
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <FaClinicMedical className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">MediConnect</h1>
        </div>

        {/* Title */}
        <div className="flex justify-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Login to Your Account
          </h2>
        </div>

        {/* Login Form */}
        <form className="flex flex-col gap-4">
          {/* Email Input */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <FaUser className="w-5 h-5 text-gray-400 mr-3" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email Address"
              className="w-full outline-none text-gray-700"
            />
          </div>

          {/* Password Input */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <FaLock className="w-5 h-5 text-gray-400 mr-3" />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              className="w-full outline-none text-gray-700"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="w-4 h-4 mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <button
              type="button"
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            type="button"
            className="flex items-center justify-center bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm text-gray-500">or</span>
          <div className="grow border-t border-gray-300"></div>
        </div>

        {/* Google Sign In Button */}
        <button
          onClick={googlelogin}
          type="button"
          className="flex items-center justify-center w-full border border-gray-300 rounded-lg py-2 px-4 text-gray-700 font-medium hover:bg-gray-50 transition-colors mb-6"
        >
          <FcGoogle className="w-5 h-5 mr-3" />
          Sign in with Google
        </button>

        {/* Sign Up Link */}
        <div className="flex justify-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/register">
              {" "}
              <button className="text-blue-600 hover:text-blue-700 font-semibold">
                Sign up
              </button>
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
    </div>
  );
};

export default Loginpage;
