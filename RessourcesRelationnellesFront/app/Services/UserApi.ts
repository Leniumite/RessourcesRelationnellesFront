import type { Community, Post, AppUser } from '../Types';

const API_URL = import.meta.env.VITE_API_URL; //Gather environnement var as API link

export const api = {
  ///Function that return a token if the credentials matches
  ///
  ///Param (email: string, password:string) 
  async auth(credentials: { email: string; password: string }): Promise<string> {
    //We go here after click on form
    console.log(credentials);

    const response = await fetch(`${API_URL}/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });
    console.log(response.json());

    if (!response.ok) throw new Error('Authentification failed');
    
    //Here it will needs to be response.token
    const token = '';
    return token;
  },

  ///Function that create an AppUser (normally)
  ///
  ///Param: formData, format specified. The informations contained by the form when the submit button is clicked, which will be passed to appUser object  
  async login(formData: { email: string; roles: string[]; password: string; plainPassword: string; name: string; }, appUser: AppUser): Promise<void> 
  {
    const response = await fetch(`${API_URL}/api/register`, {
      method: 'POST',
      headers: {
        //I understand that was not *just* json here.... I have to actually read the docs of the API
        'Content-Type': 'application/ld+json',
      },
      //This line trims the parameter we passed and put it in the body of the response.
      //If formData is in another format, API will send back 415 code, wich occurs when bad data formatting
      body: JSON.stringify(formData),
    });

    //console.log(response.json());

    //Transform API response into AppUser format
    appUser.mail = formData.email;
    appUser.roles = formData.roles;
    appUser.password = formData.password;
    appUser.plainPassword = formData.password; //Don't know how this will works, but it's here
    appUser.name = formData.name;
    appUser.token = "";

    //Errors handling
    if (!response.ok) 
    {
      //Email already used
      if(response.status == 500)
      {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Email already used. Please choose another');
      }
      else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Registration failed');
      }
    }
  }
};