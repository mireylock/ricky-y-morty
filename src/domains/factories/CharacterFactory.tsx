import { CharacterDTO } from "../dtos/CharacterDTO";

export const CharacterFactory = {
  createCharacter(data: CharacterDTO) {
    return {
      id: data.id,
      name: data.name,
      status: data.status, 
      gender: data.gender,
      imageUrl: data.image,
    };
  },
};
