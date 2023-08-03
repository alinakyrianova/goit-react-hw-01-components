import { Profile } from "./Profile";
import profileItems from '../data.json';

export const App = () => {
  return (
    <div>
      <Profile items={profileItems}/>
    </div>
  );
};
