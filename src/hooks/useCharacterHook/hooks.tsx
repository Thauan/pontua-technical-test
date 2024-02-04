import { useContext } from 'react';

import { CharacterContext } from './context';

export function useCharacter() {
  const { getCharacters, getOptionsCharacters, getCharacterById } = useContext(CharacterContext);

  if (!getCharacters || !getOptionsCharacters || !getCharacterById) {
    throw new Error('THe useAuth must be used within an AuthProvider');
  }

  return { getCharacters, getOptionsCharacters, getCharacterById };
}