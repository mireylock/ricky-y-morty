import { useEffect, useState } from "react";
import { CharacterService } from "../../../domains/services/CharacterService";
import { CharactersContext } from "./CharactersContext";
import { Character } from "../../../domains/models/Character";

interface CharactersProviderProps {
  children: React.ReactNode;
}

export const CharactersProvider: React.FC<CharactersProviderProps> = ({
  children,
}) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [favoriteCharacters, setFavorites] = useState<Character[]>([]);
  const [charactersDetails, setCharactersDetails] = useState<Character[]>(
    []
  );

  useEffect(() => {
    const loadCharacters = async () => {
      const chars = await CharacterService.fetchCharacters();
      setCharacters(chars);
    };
    loadCharacters();
  }, []);

  useEffect(() => {
    const loadDetails = async () => {
      try {
        const detailsPromises = characters.map(
          (char) => CharacterService.fetchCharacterById(char.id)         );

        const detailsResponses = await Promise.all(detailsPromises);
        setCharactersDetails(detailsResponses);
      } catch (error) {
        console.error("Error loading character details", error);
      }
    };

    loadDetails();
  }, [characters]);

  const addFavorite = (character: Character) => {
    setFavorites((prevFavorites) => [...prevFavorites, character]);
  };

  const removeFavorite = (characterId: number) => {
    setFavorites(favoriteCharacters.filter((c) => c.id !== characterId));
  };

  return (
    <CharactersContext.Provider
      value={{
        characters,
        favoriteCharacters,
        charactersDetails,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
