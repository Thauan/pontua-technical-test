/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";

export const Card = styled.div`
    background-color: #EAECF0;
    display: flex;
    flex-direction: row;
    border-radius: 15px;
    padding: 20px;
    align-items: center;
    display: flex;
`;

export const Image = styled.img<any>`
    border-radius: 15px;
    height: 180px;
    width: 100px;
    object-fit: cover;
`;

export const CardContent = styled.div`
    height: 100%;
    margin-left: 20px;
`;

export const CardTitle = styled.h1`
`

export const CardDescription = styled.p`
`