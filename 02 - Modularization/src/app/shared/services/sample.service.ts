export class SampleService {
    static counter = 0;
    static instances = 0;
    id = 0;

    constructor() { 
        SampleService.instances++;
        console.log("Shared service initialized." + SampleService.instances);   
    }

    increment() : void {
        this.id = ++SampleService.counter;
        console.log(`Sample with id ${this.id} and instance ${SampleService.instances}`);
    }
 }