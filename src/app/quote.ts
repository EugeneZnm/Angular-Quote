export class Quote {

    // 2 defining properties of class Quote
    constructor( public id: number, public saying: string, public author: string,
        public publisher: string, public cool: number, public sucks: number, public dateCreated: Date) { }
}
