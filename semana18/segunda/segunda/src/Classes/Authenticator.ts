import * as jwt from "jsonwebtoken";

export class Authenticator {
    private static EXPIRES_IN = "1 day";

    public generateToken( 
        userId : AuthenticationData 
    ) : string {
        return jwt.sign (
            userId,
            process.env.JWT_KEY as string,
            {
                expiresIn: Authenticator.EXPIRES_IN
            }
        )
    }
    
    public getData ( token : string ) : AuthenticationData { 
        const userData = jwt.verify(
            token,
            process.env.JWT_KEY as string,
        ) as any

        return{
            id: userData.id,
        }
    }
}

export interface AuthenticationData {
    id : string
}
