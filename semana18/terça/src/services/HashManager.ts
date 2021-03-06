import * as bcrypt from "bcryptjs";


export class HashManager {

    public async hash(password : string) : Promise<string> {

        const rounds = Number(process.env.BCRYPT_COST);
        const salt = await bcrypt.genSalt(rounds);
        const result = await bcrypt.hash(password , salt);
        console.log(result);
        return result;
    }

    public async compare(
        password : string, 
        hash : string
    ) : Promise<boolean>{
        return await bcrypt.compare(password , hash);
    }

}