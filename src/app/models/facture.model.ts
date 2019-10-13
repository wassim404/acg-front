export class Facture {
    id:number;
    reference:string;
    client:string;
    date:Date;
 
    constructor(    reference:string,
        client:string
     ) {
            this.reference=reference;
            this.client=client;
            this.date=new Date();

    }
}
