import { useNavigate } from "react-router-dom";
import { CharactersList } from "../components/CharacterList";
import { useCharacters } from "../providers/CharacterProvicer/useCharacters";

export const CharacterListPage: React.FC = () => {
  const { characters } = useCharacters();

  const navigate = useNavigate();

  const handleGoToFavs = () => {
    navigate("/favorites");
  };
  return (
    <>
      <button onClick={handleGoToFavs}>Go to favorites</button>
      <h1>Rick y Morty characters</h1>
      <CharactersList characters={characters} />
    </>
  );
};
