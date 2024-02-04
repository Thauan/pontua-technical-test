import { useContext } from 'react';

import { AuthContext } from './context';

export function useAuth() {
  const { signedIn, signIn, signOut, changeToAgent } = useContext(AuthContext);

  if (!signIn || !signOut || !changeToAgent) {
    throw new Error('THe useAuth must be used within an AuthProvider');
  }

  return { signedIn, signIn, signOut, changeToAgent };
}