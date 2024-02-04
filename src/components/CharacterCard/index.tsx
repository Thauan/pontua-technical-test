/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardDescription, CardTitle, Image } from './styles';

interface CharacterCardProps {
    character: any;
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
                <CardDescription>{character.description}</CardDescription>
            </CardContent>
        </Card>
    );
}

export { CharacterCard };