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

export const Image = styled.img`
    border-radius: 15px;
    height: 100%;
    width: 130px;
    object-fit: cover;
`;

export const CardContent = styled.div`
    height: 100%;
    margin-left: 20px;
    word-break: break-all;
`;

export const CardTitle = styled.h1`
    margin-top: 5px;
    font-family: Epilogue;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: -0.03em;
    text-align: left;
`

export const CardDescription = styled.p`
    margin-top: 10px;
    font-family: Epilogue;
    font-size: 12px;
    font-weight: 300;
    line-height: 12px;
    letter-spacing: -0.03em;
    text-align: left;
`