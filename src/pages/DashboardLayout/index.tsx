/* eslint-disable @typescript-eslint/no-explicit-any */
import { PropsWithChildren } from 'react'
import { Sidebar } from '../../components/Sidebar';
import { Wrapper } from './styles';
import { useSidebar } from '../../hooks/useSidebarHook';
import { SearchBar } from '../../components/SearchBar';

const DashboardLayout = ({ children }: PropsWithChildren) => {
  const { openedSidebar }: any = useSidebar();

  console.log(openedSidebar, "openedSidebar");

  return (
    <div>
      <Sidebar />
      <Wrapper openedSidebar={openedSidebar}>
        <SearchBar />
        {children}
      </Wrapper>
    </div>
  )
};

export default DashboardLayout;
