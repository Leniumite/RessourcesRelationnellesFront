//Importation of components will be simplier in the futur, given we will only need Header, UserName, Menu and Feed
import { UserProvider } from '../Context';
import { Header } from '../Components/Header'; //Needs to add .. because the Components folder is up one folder
import { UserName} from '../Components/UserName';
import { Button } from '../Components/Button';
import { Menu } from '../Components/Menu';
import { ProfilInformations } from '../Components/ProfilInformations'

export default function Account() {
  return (
    <UserProvider>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <UserName />

        <div className="container flex gap-6">
          <Menu />
          <ProfilInformations />
        </div>
        
        <Button />
      </div>
    </UserProvider>
  );
}