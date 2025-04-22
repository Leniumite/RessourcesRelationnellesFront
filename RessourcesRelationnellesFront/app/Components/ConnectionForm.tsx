import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { LogIn, UserPlus, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { api } from '../Services/UserApi';
import { login, getUser } from '../UserContext';
import type { AppUser } from '~/Types';

//Interface that implement all props that the form will send
interface ConnectionFormProps {
  //Variables definition
  isLogin: boolean;
  onSubmit: (formData: {
    mail: string;
    roles: string[];
    password: string;
    plainpassword: string;
    name: string;
  }) => void;
}

//Function relative to the form. This will be called by external pages (Connection page).
function ConnectionForm({ isLogin, onSubmit }: ConnectionFormProps) {
  //Variables
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); //Litteral setter that sets showPassword to false by default
  const [formData, setFormData] = useState({ //Also sets the array formData to all empty strings
    email: '',
    roles: ["SimpleUser"],
    password: '',
    plainPassword: '',
    name: '',
  });

  const appUser: AppUser = {
        mail: "",
        roles: [""],
        password: "",
        plainPassword: "",
        name: "",
        token: "",
      }

  //A custom handler that will take into parameters info from the form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();  //Disable send of form Data et and page reloading.

    if(!isLogin) //Or loging in with info already existing
    {      
      try {
        //Ask to API to execute login function and assign a value to appUser. Though the API function does not ask for param, we should pass the formData and appUser to know which data to put in the object.
        await api.login({
          email: formData.email,
          roles: formData.roles,
          password: "",
          plainPassword: formData.password,
          name: formData.name
        }, appUser); 
      } catch (error) {
        console.error('Erreur lors de la connexion : ', error); //Error handling (can implement it in UI)
      }
    }
    
    //Once the account is created, we can now auth. If still not connected here, it will automatically send an error because of API not finding any matches in DB
    try {
      //Ask to API to attribute token to a given AppUser
      const token = await api.auth({
        email: appUser.mail,
        password: formData.password
      }); 
      //Set the token value from appUser 
      appUser.token = token;
      console.log();

      //Smarter to do this here, else we just auth even if there is an error
      navigate('/account');
    } catch (error) {
      console.error('Erreur lors de la connexion : ', error); //Error handling (can implement it in UI)
    } 
  };

  //Custom handler to save data input into formData
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
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
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Entrez un mail valide"
            required
          />
        </div>
      </div>

      {!isLogin && (
      <div>
        <label className="block text-sm font-medium mb-2">
          Nom d'utilisateur
        </label>
        <div className="relative">
          <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            name="name" //Name of target used to save variable
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Choisissez un nom d'utilisateur"
            required
          />
        </div>
      </div>
      )}

      <div>
        <label className="block text-sm font-medium mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"  //Name of target used to save variable
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