export abstract class Mission {
    private id = Date.now();

    constructor(
        public beggining : string,
        public ending : string,
        public module : number | undefined,
    ) {}
}