import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import Navbar from "../components/Navbar";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login attempted with:", { email, password });
  };

  return (
    <>
    <Navbar />
      <div className="min-h-screen bg-[#313843] flex flex-col justify-center py-8 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-[#262C35] py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <h2 className="text-center bg-transparent text-3xl font-bold tracking-tight text-white">
              Welcome back
            </h2>
            <p className="mt-2 text-center bg-transparent text-sm text-gray-500">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/signup")}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign up
              </button>
            </p>
            <form className="space-y-6 bg-transparent" onSubmit={handleSubmit}>
              <div className="bg-transparent">
                <label
                  htmlFor="email"
                  className="block text-sm bg-transparent font-medium text-gray-400"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="bg-transparent">
                <label
                  htmlFor="password"
                  className="block text-sm bg-transparent font-medium text-gray-400"
                >
                  Password
                </label>
                <div className="mt-1 bg-transparent relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex bg-transparent items-center justify-between">
                <div className="flex bg-transparent items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block bg-transparent text-sm text-gray-400"
                  >
                    Remember me
                  </label>
                </div>

                <div className="bg-transparent text-sm">
                  <a
                    href="#"
                    className="font-medium bg-transparent text-blue-600 hover:text-blue-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-[#FE8D32] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Login
                </button>
              </div>
            </form>

            <div className="mt-6 bg-transparent relative">
              <div className="relative">
                <div className="absolute inset-0 bg-transparent flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex bg-[#313843] justify-center text-sm">
                  <span className="bg-[#313843] px-2 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 bg-[#262C35] grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="inline-flex w-full justify-center items-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                >
                  Google
                </button>

                <button
                  type="button"
                  className="inline-flex w-full justify-center items-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                >
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
