import { Character } from "../../domains/models/Character";
import { CharacterCard } from "./CharacterCard";
import { Container } from "./CharacterList.styles";

interface CharacterListProps {
  characters: Character[];
}

export const CharactersList: React.FC<CharacterListProps> = ({ characters }) => (
  <Container>
    {characters.map((character) => (
      <CharacterCard key={character.id} character={character} />
    ))}
  </Container>
);
