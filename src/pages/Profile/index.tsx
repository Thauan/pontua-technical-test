import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { ProfileTitle } from '../../components/ProfileTitle';
import { ProfileCharacterCard } from '../../components/ProfileCard';
import { useCharacter } from '../../hooks/useCharacterHook';
import DashboardLayout from '../DashboardLayout';
import { Loading } from '../../components/Loading';
import { Character } from '../../@types/models/character';
import { useAuth } from '../../hooks/useAuthHook';
import { ITab, Tabs } from '../../components/Tabs';

const Profile = () => {
  const { agent } = useAuth();
  const { getCharacterById } = useCharacter();
  const [profile, setProfile] = useState<Character | null>(null);

  useEffect(() => {
    if (agent !== null) getById(agent!.value);
  }, [agent]);

  const getById = async (id: number) => {
    const { data } = await getCharacterById(id);
    setProfile(data.results[0])
  }

  const tabs: ITab[] = [
    {
      id: 'overview',
      title: 'Visão Geral',
      component: (
        <ProfileCharacterCard profile={profile} />
      )
    },
    {
      id: 'teams',
      title: 'Teams',
      component: (
        <ul>
          <li>Avengers</li>
          <li>Defenders</li>
          <li>Fantastic Four</li>
          <li>Future Foundation</li>
          <li>Heroes for Hire</li>
          <li>The New Avengers</li>
          <li>X-Mansion</li>
        </ul>
      )
    }
  ];

  return (
    <DashboardLayout>
      <Container>
        <ProfileTitle title="Perfil" symbol="/" username={profile?.name} />

        {profile ? (
          <Tabs tabs={tabs} />
        ) : (
          <Loading />
        )}
      </Container>
    </DashboardLayout>
  );
}

export { Profile };