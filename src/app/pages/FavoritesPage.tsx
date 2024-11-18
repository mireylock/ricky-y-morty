import { useNavigate } from "react-router-dom";
import { CharacterFavsList } from "../components/CharacterFavsList";
import { useCharacters } from "../providers/CharacterProvicer/useCharacters";

export const FavoritesPage: React.FC = () => {
  const { favoriteCharacters } = useCharacters();

  const navigate = useNavigate();

  const handleBackToList = () => {
    navigate("/");
  };

  return (
    <>
      <button onClick={handleBackToList}>Back to all</button>
      <h2>Favourites</h2>
      <CharacterFavsList favorites={favoriteCharacters} />
    </>
  );
};
