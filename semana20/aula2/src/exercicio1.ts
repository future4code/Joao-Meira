


const event = {
    "user": {
          "info": {
              "name": "Astrodev",
              "email": "astrodev@f4.com.br",
              "password": "123456"
          }
    }
  }

export const handler = async (event : any) : Promise<any> => {
    if (!event.user || !event.user.info) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing input" })
      };
    }
    const user = {
      name: event.user.info.name,
      email: event.user.info.email,
      password: event.user.info.password
    };
  
    if (!user.name) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing name" })
      };
    }
    if (!user.email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing email" })
      };
    }
    if (!user.password || user.password.length < 6) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Invalid password" })
      };
    }
  
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "User is correct"
      })
    };
  };
