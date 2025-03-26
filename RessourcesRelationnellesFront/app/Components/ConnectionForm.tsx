import React, { useState } from 'react';
import { LogIn, UserPlus, Mail, Lock, Eye, EyeOff } from 'lucide-react';

//Interface that implement all props that the form will send
interface ConnectionFormProps {
  //Variables definition
  isLogin: boolean;
  onSubmit: (formData: {
    email: string;
    password: string;
    confirmPassword: string;
  }) => void;
}

//Function relative to the form. This will be called by external pages (Connection page).
function ConnectionForm({ isLogin, onSubmit }: ConnectionFormProps) {
  //Variables
  const [showPassword, setShowPassword] = useState(false); //Litteral setter that sets showPassword to false by default
  const [formData, setFormData] = useState({ //Also sets the array formData to all empty strings
    email: '',
    password: '',
    confirmPassword: ''
  });

  //Custom handle that save data to array once the field is changed
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData, //Way to select ALL data from an array. Used like a foreach
      [e.target.name]: e.target.value //Override the variable who's name is like the target name as the target variable
    });
  };

  //A custom handler that will take into parameters info from the form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData); //Simply submit all data contained in formData. Will need to add check in DB for infos here
  };

  return (
    //Basic form here
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">
          Email
        </label>
        <div className="relative">
          <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="email"
            name="email" //Name of target used to save variable
            value={formData.email}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Entrez un mail valide"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Nom d'utilisateur
        </label>
        <div className="relative">
          <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            name="username" //Name of target used to save variable
            value={formData.email}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Choisissez un nom d'utilisateur"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"  //Name of target used to save variable
            value={formData.password}
            onChange={handleInputChange}
            className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Choisissez un mot de passe"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {!isLogin && (
        <div>
          <label className="block text-sm font-medium mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="confirmPassword" //Name of target used to save variable
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Romettez le mot de passe, juste pour voir"
              required
            />
          </div>
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-green-600 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
      >
        {/* All of this is a big ternary operation to know if isLogin is true or not and what to do with that. It's like {isLogin ? (yesResult) : (noResult)} */}
        {isLogin ? 
        (
          <>
            <LogIn className="w-5 h-5" />
            Login
          </>
        ) //If isLogin is true
        : //Ternary operator to indicate what to do if isLogin is false
        (
          <>
            <UserPlus className="w-5 h-5" />
            Sign Up
          </>
        ) //If isLogin is false
        } 
      </button>
    </form>
  );
}

export default ConnectionForm;