import { Container, List, UserName, Tag, Location, ListItem, Image, Description} from './Profile.styled.js';


export const Profile = ({ username, tag, location, avatar, stats }) => {
    
    return (
        <Container>
            <Description>
                <Image
                    src={avatar}
                    alt={username}
                    className="avatar"
                />
                <UserName>{username}</UserName>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Description>
            <List>
                <ListItem>
                    <span className="label">Followers</span>
                    <span className="quantity"><b>{stats.followers}</b></span>
                </ListItem>
                <ListItem>
                    <span className="label">Views</span>
                    <span className="quantity"><b>{stats.views}</b></span>
                </ListItem>
                <ListItem>
                    <span className="label">Likes</span>
                    <span className="quantity"><b>{stats.likes}</b></span>
                </ListItem>
            </List>
        </Container>
    );
};
             
             
                 
            
  
