import { Community, Post, AppUser } from '../Types';

const API_URL = import.meta.env.VITE_API_URL; //Gather environnement var as API link

export const api = {
    async login(infos: { email: string; password: string; name: String }): Promise<AppUser> {
        const response = await fetch(`${API_URL}/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(infos),
        });
    
        if (!response.ok) throw new Error('Login failed');
        
        const userData = await response.json();
        
        //Create AppUser object from response data that we can use later
        const appUser: AppUser = {
          mail: userData.email,
          roles: userData.roles,
          passwordHash: userData.passwordHash,
          passwordClear: infos.password, //Store the clear password from credentials
          name: userData.name
        };
    
        return appUser;
      }
};