import styled from "styled-components";

interface PageProps {
  isCurrent?: boolean;
  firstPage?: boolean;
  lastPage?: boolean;
}

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

export const ContainerPagination = styled.div`
  display: flex;
  justify-content: center;
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Page = styled.span<PageProps>`
  padding: 15px;
  background-color: ${(props) => (props.isCurrent ? "#213770" : "#fff")};
  border: 2px solid ${(props) => (props.isCurrent ? "#213770" : "#D0D5DD")};
  color: ${(props) => (props.isCurrent ? "#fff" : "#213770")};
  font-weight: 500;

  border-radius: ${(props) => props.firstPage && "8px 0px 0px 8px"};
  border-radius: ${(props) => props.lastPage && "0px 8px 8px 0px"};
`;
