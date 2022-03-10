import styled from 'styled-components';

export const AppContainer = styled.div`
margin: 3% auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
`;

export const DisplayUsersDiv = styled.div`
width: 440px;
height: 180px;
padding: 21px;
margin: 21px;
border-radius: 8px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1), 0 8px 21px 0 rgba(0,0,0,0.1);
text-align: center;
`;

export const Button = styled.button`
border-radius: 8px;
background-color: black;
color: white;
padding: 5px;

&:hover{
    cursor: pointer;
    background-color: white;
    color: black;
    border: solid;
}
`;