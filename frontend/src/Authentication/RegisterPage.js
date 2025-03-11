import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; // Import eye icons

const RegisterPage = () => {
   const [credentials, setCredentials] = useState({
      fullName: '',
      email: '',
      mobileNumber: '',
      password: ''
   });

   const [errors, setErrors] = useState({
      fullName: '',
      email: '',
      mobileNumber: '',
      password: ''
   });

   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

   // Custom validation function
   const checkValidation = () => {
      let isValid = true;
      const newErrors = { fullName: '', email: '', mobileNumber: '', password: '' };

      // Full Name validation
      if (!credentials.fullName) {
         newErrors.fullName = 'Full Name is required';
         isValid = false;
      }

      // Email validation
      if (!credentials.email) {
         newErrors.email = 'Email is required';
         isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
         newErrors.email = 'Email is invalid';
         isValid = false;
      }

      // Mobile Number validation
      if (!credentials.mobileNumber) {
         newErrors.mobileNumber = 'Mobile Number is required';
         isValid = false;
      } else if (!/^\d{10}$/.test(credentials.mobileNumber)) {
         newErrors.mobileNumber = 'Mobile Number must be 10 digits';
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
         console.log('Registration credentials:', credentials);
         // Reset form after successful validation
         setCredentials({ fullName: '', email: '', mobileNumber: '', password: '' });
         setErrors({ fullName: '', email: '', mobileNumber: '', password: '' });
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
               {/* Register heading (Inside the Box with Left Alignment) */}
               <div className="text-left mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                     Create your account
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">
                     Please fill in the details to register.
                  </p>
               </div>

               <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Full Name Field */}
                  <div>
                     <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700"
                     >
                        Full Name
                     </label>
                     <div className="mt-1">
                        <input
                           id="fullName"
                           name="fullName"
                           type="text"
                           autoComplete="name"
                           className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                           value={credentials.fullName}
                           onChange={(e) => setCredentials({ ...credentials, fullName: e.target.value })}
                        />
                        {errors.fullName && (
                           <p className="mt-2 text-sm text-red-600">{errors.fullName}</p>
                        )}
                     </div>
                  </div>

                  {/* Email Field */}
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

                  {/* Mobile Number Field */}
                  <div>
                     <label
                        htmlFor="mobileNumber"
                        className="block text-sm font-medium text-gray-700"
                     >
                        Mobile Number
                     </label>
                     <div className="mt-1">
                        <input
                           id="mobileNumber"
                           name="mobileNumber"
                           type="tel"
                           autoComplete="tel"
                           className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                           value={credentials.mobileNumber}
                           onChange={(e) => setCredentials({ ...credentials, mobileNumber: e.target.value })}
                        />
                        {errors.mobileNumber && (
                           <p className="mt-2 text-sm text-red-600">{errors.mobileNumber}</p>
                        )}
                     </div>
                  </div>

                  {/* Password Field */}
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
                           autoComplete="new-password"
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

                  {/* Register Button */}
                  <div>
                     <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                     >
                        Register
                     </button>
                  </div>

                  {/* Login Link */}
                  <div className="text-center">
                     <p className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link
                           to="/login"
                           className="font-medium text-blue-600 hover:text-blue-500"
                        >
                           Sign in
                        </Link>
                     </p>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default RegisterPage;