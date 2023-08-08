import { Profile } from './Profile/Profile.js';
import user from '.././Data/user.json';
import data from '.././Data/data.json';
import friends from '.././Data/friends.json';
import { Statistics } from './Statistics/Statistics';
import { Container } from './Container/Container';
import { FriendList } from 'components/FriendList/FriendList';



export const App = () => {
  return (
    <>
    <Container>
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
  </Container>
    
    <Container>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      </Container>
     
        <Container>
          <FriendList friends={friends} />
        </Container>
      </>
    
  );
 
};
export default App;
