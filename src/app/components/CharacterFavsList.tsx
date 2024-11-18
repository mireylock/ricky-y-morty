import { Character } from "../../domains/models/Character";
import { CharacterCard } from "./CharacterCard";
import { Container } from "./CharacterList.styles";

interface FavoriteCharactersProps {
  favorites: Character[];
}

export const CharacterFavsList: React.FC<FavoriteCharactersProps> = ({
  favorites,
}) => (
  <Container>
    {favorites.map((fav) => (
      <CharacterCard key={fav.id} character={fav} />
    ))}
  </Container>
);
