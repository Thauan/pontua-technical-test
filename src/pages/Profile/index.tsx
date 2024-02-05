import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { ProfileTitle } from '../../components/ProfileTitle';
import { ProfileCharacterCard } from '../../components/ProfileCard';
import { useCharacter } from '../../hooks/useCharacterHook';
import DashboardLayout from '../DashboardLayout';
import { Loading } from '../../components/Loading';
import { Character } from '../../@types/models/character';
import { useAuth } from '../../hooks/useAuthHook';

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<Character | null>(null);
  const { getCharacterById } = useCharacter();
  const { agent } = useAuth();

  useEffect(() => {
    if (agent !== null) getById(JSON.parse(agent!).value);
  }, [agent]);

  const getById = async (id: number) => {
    const { data } = await getCharacterById(id);
    setProfile(data.results[0])
  }

  return (
    <DashboardLayout>
      <Container>
        {profile ? (
          <>
            <ProfileTitle title="Perfil" symbol="/" username={profile?.name} />
            <ProfileCharacterCard profile={profile} />
          </>
        ) : (
          <Loading />
        )}
      </Container>
    </DashboardLayout>
  );
}

export { Profile };