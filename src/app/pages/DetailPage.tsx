import { Params, useNavigate, useParams } from "react-router-dom";
import { CardContainer } from "../components/CharacterCard.styles";
import { useCharacters } from "../providers/CharacterProvicer/useCharacters";

export const DetailPage: React.FC = ({}) => {
  const { charactersDetails } = useCharacters();
  const { id } = useParams<Params>();
  const idCharacter = Number(id);
  const character = charactersDetails.filter((item) => item.id === idCharacter);

  const navigate = useNavigate();

  const handleGoToList = () => {
    navigate("/");
  };

  return (
    <>
      <button onClick={handleGoToList}>Go back to list</button>
      <CardContainer>
        {character.map((character) => (
          <div key={character.id}>
            <img src={character.imageUrl} alt={character.name} />
            <p>{character.name}</p>
            <p>{character.status}</p>
            <p>{character.gender}</p>
          </div>
        ))}
      </CardContainer>
    </>
  );
};
