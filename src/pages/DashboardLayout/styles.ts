import styled from "styled-components";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Wrapper = styled.div<any>`
    height: 100vh;
    margin-left: ${props => props.openedSidebar ? '255px' : '59px'};
    transition: all .3s;
`