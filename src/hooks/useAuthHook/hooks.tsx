import { useContext } from 'react';

import { AuthContext } from './context';

export function useAuth() {
  const { signedIn, signIn, signOut } = useContext(AuthContext);

  if (!signIn || !signOut) {
    throw new Error('THe useAuth must be used within an AuthProvider');
  }

  return { signedIn, signIn, signOut };
}