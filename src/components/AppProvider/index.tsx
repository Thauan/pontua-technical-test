import { PropsWithChildren } from 'react';

import { AuthProvider } from '../../hooks/useAuthHook';
import { CharacterProvider } from '../../hooks/useCharacterHook';

function AppProvider({ children }: PropsWithChildren) {
  return (
    <AuthProvider>
      <CharacterProvider>
        {children}
      </CharacterProvider>
    </AuthProvider>
  );
}

export { AppProvider };