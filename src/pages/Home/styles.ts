import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }

    .item-penult {
        grid-row-start: 3;
        grid-column-start: 1;

        grid-row-end: 3;
        grid-column-end: 3;
    }

    .item-last {
        grid-row-start: 3;
        grid-column-start: 3;

        grid-row-end: 3;
        grid-column-end: 5;
    }
`;

export const Pagination = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Page = styled.span<any>`
    padding: 15px;
    border: 1px solid black;
    border-radius: 8px;
    margin: 5px 5px;
    background-color: ${props => props.isCurrent ? '#dddddd' : '#fff'};
`;