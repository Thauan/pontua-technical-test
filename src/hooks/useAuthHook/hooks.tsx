import { useContext } from 'react';

import { AuthContext } from './context';

export function useAuth() {
  const { signedIn, signIn, signOut, changeToAgent, agent } = useContext(AuthContext);

  if (!signIn || !signOut || !changeToAgent) {
    throw new Error('THe useAuth must be used within an AuthProvider');
  }

  return { signedIn, agent, signIn, signOut, changeToAgent };
}