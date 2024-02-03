import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #00113D;
    padding: 0 20px;
    height: 100vh;
`;

export const Container = styled.div`
    max-width: 1192px;
    margin: 0 auto;
    height: 100%;

    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    padding-top: 49px;

    .logo {
        width: 169px;
        height: 50px;
    }
`;

export const Content = styled.div`
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

export const LeftContent = styled.div`
`;

export const RightContent = styled.div`
    max-width: 380px;

    .form {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .footer {
        margin-top: 21px;

        display: flex;
        justify-content: flex-end;

        .link {
            color: #F21A05;
            font-size: 11px;
        }
    }
`;