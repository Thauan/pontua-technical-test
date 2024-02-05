import styled from "styled-components";

interface DashboardLayoutProps {
  openedSidebar?: boolean;
}

export const Wrapper = styled.div<DashboardLayoutProps>`
    height: 100vh;
    margin-left: ${props => props.openedSidebar ? '255px' : '59px'};
    transition: all .3s;
`