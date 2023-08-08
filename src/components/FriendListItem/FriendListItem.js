import { Status, AvatarFriend, NameFriend } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <>
            <Status isOnline={isOnline}></Status>
            <AvatarFriend src={avatar} alt={name} width="48" />
            <NameFriend>{name}</NameFriend>
        </>
    );
};


    export { FriendListItem };