//Importation of components will be simplier in the futur, given we will only need Header, UserName, Menu and Feed
import { Header } from '../Components/Header'; //Needs to add .. because the Components folder is up one folder
import { UserName} from '../Components/UserName';
import { Button } from '../Components/Button';
import { Menu } from '../Components/Menu';
import { Feed } from '../Components/Feed';
import { AccountButton } from '../Components/AccountButton';

export default function Accueil() {
  return (
    //Nothing more than the components from the includes should appear here
    <div className="min-h-screen bg-gray-100">
      <Header />
      <UserName />

      <div className="container flex gap-6">
        <Menu />
        <Feed />
        <AccountButton />
      </div>
      
      <Button />

      
    </div>
  );
}
