import { useState } from "react";
import { matchPath, useLocation } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { FiUser, FiCornerUpLeft } from "react-icons/fi";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { Container, Content, Sidebar, Nav, Box, Divider, List, ListItem } from "./styles";

const SideBar = () => {
  const [openedSidebar, setOpenedSidebar] = useState(false);
  const location = useLocation();

  const handleChangeSideBar = () => setOpenedSidebar(!openedSidebar);

  const checkCurrentRoute = (route: string) => {
    if (matchPath(String(route), String(location.pathname)) !== null) {
      console.log(true)
      return true;
    } else {
      console.log(false)
      return false;
    }
  }

  const signOut = () => {
  }

  return (
    <Container>
      <Content>
        <Sidebar opened={openedSidebar}>
          <Nav>
            <Box>
              <img className="logo" src="/logos/logo-app-mini.svg" alt="Logo do sistema Pontua" />

              <button onClick={handleChangeSideBar}>
                {!openedSidebar ? <AiOutlineDoubleRight /> : <AiOutlineDoubleLeft />}
              </button>
            </Box>

            <Divider />
            <List>
              <ListItem active={checkCurrentRoute('/dashboard/home')} to="/dashboard/home" relative="route">
                <LuLayoutDashboard />
              </ListItem>
              <ListItem active={checkCurrentRoute('/dashboard/profile')} to="/dashboard/profile" relative="route">
                <FiUser />
              </ListItem>
            </List>
            <Divider />

            <List>
              <a onClick={() => signOut()} className="link">
                <FiCornerUpLeft />
              </a>
            </List>
          </Nav>
        </Sidebar>
      </Content>
    </Container>
  );
}

export { SideBar };