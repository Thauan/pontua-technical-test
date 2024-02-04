import { matchPath, useLocation } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { FiUser, FiCornerUpLeft } from "react-icons/fi";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { Container, Content, SidebarElement, Nav, Box, Divider, List, ListItem, LogoContainer } from "./styles";
import { useSidebar } from "../../hooks/useSidebarHook";
import { useAuth } from "../../hooks/useAuthHook";

const Sidebar = () => {
  // const [openedSidebar, setOpenedSidebar] = useState(false);
  const { openedSidebar, toggle } = useSidebar();
  const { signOut } = useAuth();
  const location = useLocation();

  const handleChangeSideBar = () => toggle();

  const checkCurrentRoute = (route: string) => {
    return (matchPath(String(route), String(location.pathname)) !== null) ? true : false
  }

  return (
    <Container>
      <Content>
        <SidebarElement opened={openedSidebar}>
          <Nav>
            <Box>
              <LogoContainer>
                <img className="logo" src={openedSidebar ? "/logos/logo-app.svg" : "/logos/logo-app-mini.svg"} alt="Logo do sistema Pontua" />
              </LogoContainer>

              <button onClick={handleChangeSideBar}>
                {!openedSidebar ? <AiOutlineDoubleRight /> : <AiOutlineDoubleLeft />}
              </button>
            </Box>

            <Divider />
            <List>
              <ListItem active={checkCurrentRoute('/dashboard/home')} to="/dashboard/home" relative="route">
                <LuLayoutDashboard /> {openedSidebar ? 'Home' : ''}
              </ListItem>
              <ListItem active={checkCurrentRoute('/dashboard/profile')} to="/dashboard/profile" relative="route">
                <FiUser /> {openedSidebar ? 'Perfil' : ''}
              </ListItem>
            </List>
            <Divider />

            <List>
              <a onClick={() => signOut()} className="link">
                <FiCornerUpLeft /> {openedSidebar ? 'Sair' : ''}
              </a>
            </List>
          </Nav>
        </SidebarElement>
      </Content>
    </Container>
  );
}

export { Sidebar };