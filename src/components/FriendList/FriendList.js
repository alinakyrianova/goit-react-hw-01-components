import { FriendListItem } from '../FriendListItem/FriendListItem';
import { FriendListContainer, ItemFriend } from './FriendList.styled';

const FriendList = ({ friends }) => {
    return (
        <FriendListContainer>
            {friends.map(friend => (
                <ItemFriend key={friend.id} >
                    <FriendListItem avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </ItemFriend>
            ))}
        </FriendListContainer>
    );
};
export { FriendList };