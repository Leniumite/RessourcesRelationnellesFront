import React from 'react';

//Importation of components will be simplier in the futur, given we will only need Header, UserName, Menu and Feed
import { Header } from '../Components/Header'; //Needs to add .. because the Components folder is up one folder
import { UserName} from '../Components/UserName';
import { Button } from '../Components/Button';
import { Menu } from '../Components/Menu';
import { Feed } from '../Components/Feed';

export default function MyApp() {
  return (
    //Nothing more than the components from the includes should appear here
    <div className="min-h-screen bg-gray-100">
      <Header />
      <UserName />

      <div className="container flex gap-6">
        <Menu />
        <Feed />
      </div>
      
      <Button />
    </div>
  );
}
