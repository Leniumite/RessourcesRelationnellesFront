//Import shit we will need next to use, export and import the context
import React from 'react'
import { createContext, useContext, type ReactNode, useState, useEffect } from 'react';
import type { AppUser } from './Types';

//UserContext shape with data. You need to declare EVERY functions here before writing them below
interface UserContextType {
  user: AppUser | null;           //Way of putting an if condition in a variable declaration = Current user if logged in, null if not logged in
  login: (user: AppUser) => void; //Function to log user in
  logout: () => void;             //Function to log user out
}

//Create the context with undefined as initial value
const UserContext = createContext<UserContextType | undefined>(undefined); //Flag to say that UserContextType is undefined by default

//The Provider component, useful when we will want to use the context somewhere else
export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);

  //Every function should be written here
  const login = (user: AppUser): Promise<void> => {
    return new Promise((resolve) => {
      setUser(user);
      console.log(user);
      resolve();
    });
  };

  //Logout function: removes user data
  const logout = (): void => 
  {
    setUser(null);
  };

  //Export the provider with every function in the value (don't ask me explainations on this one)
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

//Custom hook to use the user context
export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}