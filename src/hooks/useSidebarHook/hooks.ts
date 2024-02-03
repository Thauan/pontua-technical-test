import { useContext } from 'react';

import { SidebarContext } from './context';

export function useSidebar() {
  const { openedSidebar, toggle } = useContext(SidebarContext);

  if (!toggle) {
    throw new Error('The useSidebar must be used within an SidebarProvider');
  }

  return { openedSidebar, toggle };
}