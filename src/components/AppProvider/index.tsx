import { PropsWithChildren } from 'react';

import { AuthProvider } from '../../hooks/useAuthHook';

function AppProvider({ children }: PropsWithChildren) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}

export { AppProvider };