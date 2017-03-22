export class SampleService {
    public static counter = 0;
    private localVar: number = 0;

    constructor() {  
        console.log("Local service module, initialized") ;     
    }

    increment() : void {
        SampleService.counter++;
        this.localVar++;
        console.log(`Sample with increment ${SampleService.counter} - Local module - ${this.localVar}`);
    }
 }