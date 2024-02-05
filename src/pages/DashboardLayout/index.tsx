import { PropsWithChildren } from 'react'
import { Sidebar } from '../../components/Sidebar';
import { Wrapper } from './styles';
import { useSidebar } from '../../hooks/useSidebarHook';
import { SearchBar } from '../../components/SearchBar';
import { TSidebarContext } from '../../hooks/useSidebarHook/types';

const DashboardLayout = ({ children }: PropsWithChildren) => {
  const { openedSidebar }: TSidebarContext = useSidebar();

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
