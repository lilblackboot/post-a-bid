import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useUser } from '../UserContext';
import Navbar from '../components/Navbar';

const Signup = () => {
  const { setUserEmail } = useUser(); // Get the setUserEmail function
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      try {
        // Log the data being sent
        console.log('Sending data:', {
          name: formData.name,
          email: formData.email,
          password: formData.password
        });
  
        const response = await fetch('http://localhost:5000/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Remove any other headers
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password
          })
        });
  
        const data = await response.json();
        console.log('Response:', data);
  
        // if (response.ok) {
        //   console.log('Signup successful');
        //   navigate('/login');
        // } else {
        //   setFormErrors({ general: data.message || 'Signup failed' });
        // }

        if (response.ok) {
          // Send OTP after successful signup
          setUserEmail(formData.email); // Set the email in context
          await fetch('http://localhost:5000/api/send-otp', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email: formData.email })
          });
          navigate('/otp-verification'); // Redirect to OTP verification page
        } else {
            setFormErrors({ general: 'Signup failed' });
        }    
  
      } catch (error) {
        console.error('Signup error:', error);
        setFormErrors({ 
          general: 'Network error. Please try again.' 
        });
      }
    } else {
      setFormErrors(errors);
    }
  };
  return (
    
   <>
   <Navbar /> 
    <div className="min-h-screen bg-transparent flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-[#262C35] py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <h2 className="mt-6 text-center bg-transparent text-3xl font-bold tracking-tight text-white">
          Create your account
        </h2>
        <p className="mt-2 text-center py-2 text-sm bg-transparent text-gray-500">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign in
          </button>
        </p>
          <form className="space-y-6 bg-transparent" onSubmit={handleSubmit}>
            <div className='bg-transparent'>
              <label 
                htmlFor="name" 
                className="block text-sm bg-transparent font-medium text-gray-400"
              >
                Full Name
              </label>
              <div className="mt-1 bg-transparent">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`block w-full appearance-none rounded-md border px-3 py-2 shadow-sm focus:outline-none sm:text-sm
                    ${formErrors.name 
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'}`}
                />
                {formErrors.name && (
                  <p className="mt-2 text-sm text-red-600">{formErrors.name}</p>
                )}
              </div>
            </div>

            <div className='bg-transparent'>
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
                  value={formData.email}
                  onChange={handleChange}
                  className={`block w-full appearance-none rounded-md border px-3 py-2 shadow-sm focus:outline-none sm:text-sm
                    ${formErrors.email 
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'}`}
                />
                {formErrors.email && (
                  <p className="mt-2 text-sm text-red-600">{formErrors.email}</p>
                )}
              </div>
            </div>

            <div className='bg-transparent'>  
              <label 
                htmlFor="password" 
                className="block text-sm bg-transparent font-medium text-gray-400"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className={`block w-full appearance-none rounded-md border px-3 py-2 shadow-sm focus:outline-none sm:text-sm
                    ${formErrors.password 
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'}`}
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
                {formErrors.password && (
                  <p className="mt-2 text-sm text-red-600">{formErrors.password}</p>
                )}
              </div>
            </div>

            <div className='bg-transparent'>  
              <label 
                htmlFor="confirmPassword" 
                className="block text-sm bg-transparent font-medium text-gray-400"
              >
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`block w-full appearance-none bg-transparent rounded-md border px-3 py-2 shadow-sm focus:outline-none sm:text-sm
                    ${formErrors.confirmPassword 
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'}`}
                />
                {formErrors.confirmPassword && (
                  <p className="mt-2 text-sm text-red-600">{formErrors.confirmPassword}</p>
                )}
              </div>
            </div>

            <div className="flex bg-transparent items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 rounded bg-transparent border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="terms" className="ml-2 bg-transparent block text-sm text-gray-600">
                I agree to the{' '}
                <a href="#" className="text-blue-600 bg-transparent hover:text-blue-500">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-600 bg-transparent hover:text-blue-500">
                  Privacy Policy
                </a>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Create account
              </button>
            </div>
          </form>

          <div className="mt-6 bg-transparent">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative  flex justify-center text-sm">
                <span className="bg-transparent px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
              >
                Google
              </button>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
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

export default Signup;