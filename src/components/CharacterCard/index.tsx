import { Card, CardContent, CardDescription, CardTitle, Image } from './styles';
import { truncateText } from '../../helpers/truncateText';
import { Character } from '../../@types/models/character';
interface CharacterCardProps {
  character: Character;
  last: boolean;
  penult: boolean;
}

const CharacterCard = ({ character, last, penult }: CharacterCardProps) => {
  const lastItem = last ? 'last' : '';
  const penultItem = penult ? 'penult' : '';

  return (
    <Card className={`item-${lastItem}${penultItem}`}>
      <Image src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
      <CardContent>
        <CardTitle>{character.name}</CardTitle>
        <CardDescription>{truncateText(character?.description, 200)}</CardDescription>
      </CardContent>
    </Card>
  );
}

export { CharacterCard };