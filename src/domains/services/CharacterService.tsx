import { RickYMortyApiClient } from "../../infraestructure/api/RickYMortyApiClient";
import { CharacterFactory } from "../factories/CharacterFactory";
import { Character } from "../models/Character";

let charactersPromiseCache: Promise<Character[]> | null = null;
const characterByIdPromiseCache: { [id: number]: Promise<Character> } = {};

const isDefined = <T,>(value: T | undefined | null): value is T =>
  value !== undefined && value !== null;

export const CharacterService = {
  async fetchCharacters(): Promise<Character[]> {
    const cacheKey = "charactersCache";
    const cachedData = sessionStorage.getItem(cacheKey);

    if (cachedData) {
      return JSON.parse(cachedData) as Character[];
    }

    if (!isDefined(charactersPromiseCache)) {
      charactersPromiseCache = RickYMortyApiClient.getCharacters().then(
        (response) => {
          const characters = response.data.results.map(
            CharacterFactory.createCharacter
          );

          sessionStorage.setItem(cacheKey, JSON.stringify(characters));
          
          return characters;
        }
      );
    }

    return charactersPromiseCache;
  },

  async fetchCharacterById(id: number): Promise<Character> {
    const cacheKey = `characterCache_${id}`;
    const cachedData = sessionStorage.getItem(cacheKey);

    if (cachedData) {
      return JSON.parse(cachedData) as Character;
    }

    if (!isDefined(characterByIdPromiseCache[id])) {
      characterByIdPromiseCache[id] = RickYMortyApiClient.getCharacterById(
        id
      ).then((response) => {
        const character = CharacterFactory.createCharacter(response.data);

        sessionStorage.setItem(cacheKey, JSON.stringify(character));

        return character;
      });
    }

    return characterByIdPromiseCache[id];
  },
};
