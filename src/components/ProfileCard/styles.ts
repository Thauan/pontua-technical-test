import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: white;
    padding: 44px 36px;
    border-radius: 28px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 20px;
`

export const Card = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: row;
    border-radius: 15px;
    padding: 20px;
    align-items: center;
    display: flex;
    box-shadow: 0px 6px 18px 0px #0000000F;

`;

export const Avatar = styled.img`
    border-radius: 15px;
    height: 180px;
    width: 100px;
    object-fit: cover;
`;

export const Title = styled.h1`
    padding-bottom: 20px;
`

export const CardContent = styled.div`
    padding: 5px 30px;
    display: flex;
    flex-direction: column;
`