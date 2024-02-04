import { PropsWithChildren } from 'react';

import { AuthProvider } from '../../hooks/useAuthHook';
import { CharacterProvider } from '../../hooks/useCharacterHook';
import { SidebarProvider } from '../../hooks/useSidebarHook';

function AppProvider({ children }: PropsWithChildren) {
  return (
    <AuthProvider>
      <CharacterProvider>
        <SidebarProvider>
          {children}
        </SidebarProvider>
      </CharacterProvider>
    </AuthProvider>
  );
}

export { AppProvider };