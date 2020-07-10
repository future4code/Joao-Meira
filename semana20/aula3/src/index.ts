import { CharacterDataBase } from "./CharacterDataBase";
import { Character } from "./Character";

exports.handler = async (event: any) => {
  const id = Date.now().toString();

  if (!event.character) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing input" }),
    };
  }
  const character = {
    id,
    name: event.character.name,
    anime: event.character.anime,
    img_url: event.character.img_url,
  };

  if (!character.name) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing name" }),
    };
  }
  if (!character.anime) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing anime" }),
    };
  }
  if (!character.img_url || character.img_url.length < 6) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Invalid image url" }),
    };
  }

  await new CharacterDataBase().createCharacter(
    new Character(
      character.id,
      character.name,
      character.anime,
      character.img_url
    )
  );
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Personagem armazenado com sucesso" }),
  };
};
