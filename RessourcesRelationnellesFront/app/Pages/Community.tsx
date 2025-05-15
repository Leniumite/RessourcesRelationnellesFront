import { UserProvider } from '../Context';
import { useParams } from "react-router-dom";
import { Header } from '../Components/Header'; //Needs to add .. because the Components folder is up one folder
import { UserName } from '../Components/UserName';
import { CommunityName } from '../Components/CommunityName';

export default function Community() {
    const { slug } = useParams();
    const currentDate = new Date();

    const fakeRessource = [ //Fake data from DB, get by API call
        {
          id: '1',
          title: 'First Post',
          content: 'This is the first post content',
          authorId: 'saw6DeFranckfort',
          communityId: '1',
          createdAt: new Date().toISOString(),
          usefull: 10,
          useless: 2,
        },
      ];

    return (
      <div className="min-h-screen bg-gray-100">
        <UserProvider>
          <Header />
          <UserName />

          <CommunityName 
              name= {"TestTitle"}
              description= {"TestDescription"}
              creation= {currentDate}
          />
          </UserProvider>
        </div>
    );
}
