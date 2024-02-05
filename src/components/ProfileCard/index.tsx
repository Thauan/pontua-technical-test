import { Character } from '../../@types/models/character';
import { Card, Content, Avatar, Title, CardContent } from './styles';

interface ProfileCharacterCardProps {
  profile: Character | null;
}

const ProfileCharacterCard = ({ profile }: ProfileCharacterCardProps) => {

  const defaultDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  return (
    <Card>
      <Content>
        <Avatar src={`${profile?.thumbnail?.path}.${profile?.thumbnail?.extension}`} />
        <CardContent>
          <Title>{profile?.name}</Title>
          <p>{profile?.description || defaultDescription}</p>
        </CardContent>
      </Content>
    </Card>
  );
}

export { ProfileCharacterCard };