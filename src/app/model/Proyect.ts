export class Proyect {
    
    id?: number;
    name: string;
    url: string;
    description: string;
    start: string;
    finish: string;

    constructor(){
        this.name = "";
        this.url = "";
        this.description = "";
        this.start = "";
        this.finish = "";
    }
}