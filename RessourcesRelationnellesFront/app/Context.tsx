//Import shit we will need next to use, export and import the context
import React from 'react'
import { createContext, useContext, type ReactNode, useState } from 'react';
import type { AppUser } from './Types';

//UserContext shape with data
interface UserContextType {
  user: AppUser | null;           //Way of putting an if condition in a variable declaration = Current user if logged in, null if not logged in
  login: (user: AppUser) => void; //Function to log user in
  logout: () => void;             //Function to log user out
  getUser: () => AppUser | null;         //Function to get a user
}

//Create the context with undefined as initial value
const UserContext = createContext<UserContextType | undefined>(undefined); //Flag to say that UserContextType is undefined by default

//The Provider component, useful when we will want to use the context somewhere else
export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);

  const login = (user: AppUser): void =>
  {
    setUser(user);
  }

  // Get current user function
  const getUser = (): AppUser | null => 
  {
    return user;
  };

  // Logout function: removes user data
  const logout = (): void => 
  {
    setUser(null);
  };

  //Export the provider (don't ask me explainations on this one)
  return (
    <UserContext.Provider value={{ user, login, logout, getUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook to use the user context
export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

//I have absolutely zero ideas on how this context works and how to use it. I'm sorry