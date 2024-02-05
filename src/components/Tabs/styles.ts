import styled from "styled-components";

interface TabsProps {
  active: boolean;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 36px;
    width: 100%;

    .nav {
        flex-direction: row;
        display: flex;
        margin: 16px 0;
        border-bottom: 2px solid #EAECF0;
    }
`;

export const Tab = styled.div<TabsProps>`
  padding: 16px;
  color: #081B4E;
  border-bottom: ${props => props.active ? '2px solid #081B4E' : '0px'};
  top: 2px;
  position: relative;
`;
