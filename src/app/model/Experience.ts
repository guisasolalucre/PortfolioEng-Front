export class Experience {

    id?: number; 
    job: string;
    company: string;
    ubication: string;
    start: string;
    finish: string;
    description: string;

    constructor(){
        this.job = "";
        this.company = "";
        this.ubication = "";
        this.start = "";
        this.finish = "";
        this.description = "";
    }
}