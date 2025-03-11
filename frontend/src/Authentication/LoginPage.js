import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; // Import eye icons

const LoginPage = () => {
   const [credentials, setCredentials] = useState({
      email: '',
      password: ''
   });

   const [errors, setErrors] = useState({
      email: '',
      password: ''
   });

   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

   // Custom validation function
   const checkValidation = () => {
      let isValid = true;
      const newErrors = { email: '', password: '' };

      // Email validation
      if (!credentials.email) {
         newErrors.email = 'Email is required';
         isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
         newErrors.email = 'Email is invalid';
         isValid = false;
      }

      // Password validation
      if (!credentials.password) {
         newErrors.password = 'Password is required';
         isValid = false;
      } else if (credentials.password.length < 6) {
         newErrors.password = 'Password must be at least 6 characters';
         isValid = false;
      }

      setErrors(newErrors);
      return isValid;
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (checkValidation()) {
         console.log('Login credentials:', credentials);
         // Reset form after successful validation
         setCredentials({ email: '', password: '' });
         setErrors({ email: '', password: '' });
      }
   };

   // Toggle password visibility
   const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
   };

   return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
         <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
               {/* Sign in to your account (Inside the Box with Left Alignment) */}
               <div className="text-left mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                     Welcome Back!!
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">
                     Please enter your credentials to access your account.
                  </p>
               </div>

               <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                     <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                     >
                        Email address
                     </label>
                     <div className="mt-1">
                        <input
                           id="email"
                           name="email"
                           type="email"
                           autoComplete="email"
                           className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                           value={credentials.email}
                           onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                        />
                        {errors.email && (
                           <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                        )}
                     </div>
                  </div>

                  <div>
                     <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                     >
                        Password
                     </label>
                     <div className="mt-1 relative">
                        <input
                           id="password"
                           name="password"
                           type={showPassword ? 'text' : 'password'} // Toggle input type
                           autoComplete="current-password"
                           className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                           value={credentials.password}
                           onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                        />
                        {/* Show/Hide Password Icon */}
                        <button
                           type="button"
                           onClick={togglePasswordVisibility}
                           className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        >
                           {showPassword ? (
                              <AiOutlineEyeInvisible className="h-5 w-5 text-gray-500" />
                           ) : (
                              <AiOutlineEye className="h-5 w-5 text-gray-500" />
                           )}
                        </button>
                     </div>
                     {errors.password && (
                        <p className="mt-2 text-sm text-red-600">{errors.password}</p>
                     )}
                  </div>

                  <div>
                     <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                     >
                        Sign in
                     </button>
                  </div>

                  {/* Create New Account Link */}
                  <div className="text-center">
                     <p className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link
                           to="/signup"
                           className="font-medium text-blue-600 hover:text-blue-500"
                        >
                           Create your account
                        </Link>
                     </p>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default LoginPage;