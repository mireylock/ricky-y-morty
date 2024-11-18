import { useNavigate } from "react-router-dom";
import { Character } from '../../domains/models/Character';
import { useCharacters } from "../providers/CharacterProvicer/useCharacters";
import { ButtonAddFav, ButtonRemoveFav, CardContainer } from "./CharacterCard.styles";

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const { addFavorite, removeFavorite, favoriteCharacters } = useCharacters();

  const isFavorite = favoriteCharacters.some((fav) => fav.id === character.id);

  const navigate = useNavigate();

  return (
    <CardContainer>
      <img onClick={() =>  navigate(`/detail/${character.id}`)} src={character.imageUrl} alt={character.name} />
      <p>{character.name}</p>
      {isFavorite ? (
        <ButtonRemoveFav
          onClick={() => removeFavorite(character.id)}
        >
          Eliminar de favoritos
        </ButtonRemoveFav>
      ) : (
        <ButtonAddFav onClick={() => addFavorite(character)}>
          Agregar a favoritos
        </ButtonAddFav>
      )}
    </CardContainer>
  );
};
