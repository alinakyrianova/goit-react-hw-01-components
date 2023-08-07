import styled from 'styled-components'

export const Container = styled.div`
margin: 20px auto;
  overflow: hidden;
  width: 600px;
  border: 1px solid #9e9e9e;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.div`
padding-top: 12px;
text-align: center;
/* padding: 10px; */
outline: grey 1px solid;
width: 288px;
`;

export const List = styled.ul`
list-style:none;
display: flex;
justify-content: center;
align-items: center;
margin: 0;
padding: 0;

`;

export const ListItem = styled.li`
padding: 8px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
outline: grey 1px solid;
width: 80px;
height: 80px;
background-color: lightgrey;
`;

export const Image = styled.img`
border-radius: 50%;
outline: grey 1px solid;
width: 100px;
height: 100px;
`;