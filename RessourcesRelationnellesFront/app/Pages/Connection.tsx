import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn, UserPlus, ArrowLeft } from 'lucide-react';
import ConnectionForm from '../Components/ConnectionForm';
import { Header } from '../Components/Header';

function Connection() {
  //isLogin is true by default when you come to the page. I dont know what is setIsLogin. Obviously a setter, but how??
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (formData: {
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    // Handle authentication logic here
    console.log('Form submitted:', formData);
  };
  
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Header />
      
      <div className="max-w-md mx-auto">

        {/* Put a link to go back to Accueil */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" /> {/* Lucid react */}
          Back to Home
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex gap-4 mb-8">
            {/* A button that will modify the variable isLogin to true*/}
            <button
              className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                isLogin
                  ? 'bg-green-600' //If selected
                  : 'bg-gray-100 hover:bg-gray-200' //If not
              }`}
              onClick={() => setIsLogin(true)}
            >
              <LogIn className="w-5 h-5" />
              Login
            </button>

            {/* A button that will modify the variable isLogin to false*/}
            <button
              className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                !isLogin
                  ? 'bg-green-600' //If selected
                  : 'bg-gray-100 hover:bg-gray-200' //If not
              }`}
              onClick={() => setIsLogin(false)}
            >
              <UserPlus className="w-5 h-5" />
              Sign Up
            </button>
          </div>

          <Link 
            to="/account"
            className="inline-flex items-center gap-2 transition-colors mb-8"
          >
            <ConnectionForm isLogin={isLogin} onSubmit={handleSubmit} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Connection;