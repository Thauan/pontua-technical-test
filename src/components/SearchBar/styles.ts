import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
    height: 68px;
    background: var(--white, #FFF);
    border: 1px solid #EBEFF2;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
        padding: 20px;
        width: calc(100% - 100px);

        &:focus {
            outline: none;
        }
    }
`;