export class CustomError extends Error {
    constructor(
        public readonly message : string, 
        public readonly errorCode : number 
        ) {
            super(message)
        }
}