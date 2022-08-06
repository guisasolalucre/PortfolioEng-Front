export class Education {

    id?: number;
    career: string;
    institution: string;
    ubication: string;
    start: string;
    finish?: string;

    constructor(){
        this.career = "";
        this.institution = "";
        this.ubication = "";
        this.start = "";
        this.finish = "";
    }


}