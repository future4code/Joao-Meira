exports.myFunc = async (event) => {

	if (!event.character) {
		return {
		  statusCode: 400,
		  body: JSON.stringify({ message: "Missing input" })
		};
	  }
	  const character = {
		name: event.character.name,
		anime: event.character.anime,
		img_url: event.character.img_url
	  };
	
	  if (!character.name) {
		return {
		  statusCode: 400,
		  body: JSON.stringify({ message: "Missing name" })
		};
	  }
	  if (!character.anime) {
		return {
		  statusCode: 400,
		  body: JSON.stringify({ message: "Missing anime" })
		};
	  }
	  if (!character.img_url || character.img_url.length < 6) {
		return {
		  statusCode: 400,
		  body: JSON.stringify({ message: "Invalid image url" })
		};
	  }

	  return{
		  statusCode: 200,
		  body: JSON.stringify({ message: "Personagem armazenado com sucesso" })
	  }
};