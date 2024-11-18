import { createContext } from "react";
import { Character } from "../../../domains/models/Character";

export interface CharactersContextProps {
    characters: Character[];
    favoriteCharacters: Character[];
    charactersDetails: Character[];
    addFavorite: (character: Character) => void;
    removeFavorite: (characterId: number) => void;
  }

export const CharactersContext = createContext<CharactersContextProps  | undefined>(undefined);