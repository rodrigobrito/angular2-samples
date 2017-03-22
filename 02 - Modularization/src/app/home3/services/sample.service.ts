export class SampleService {
    static counter = 0;
    id = 0;

    constructor() {  
        console.log("Diferent sample service, initialized") ;     
    }

    increment() : void {
        this.id = ++SampleService.counter;
        console.log(`Sample with id ${this.id} - XXXX`);
    }
 }