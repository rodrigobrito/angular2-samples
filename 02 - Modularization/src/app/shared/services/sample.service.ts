export class SampleService {
    static counter = 0;
    id = 0;

    constructor() {        
    }

    increment() : void {
        this.id = ++SampleService.counter;
        console.log(`Sample with id ${this.id}`);
    }
 }