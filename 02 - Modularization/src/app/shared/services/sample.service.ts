export class SampleService {

    private id : number = 0;
    private localVar : number = 0;

    public static counter = 0;
    public static instances = 0;    

    constructor() { 
        this.id = SampleService.counter;
        SampleService.instances++;
        console.log(`Shared service initialized. Instance: ${SampleService.instances}`);           
    }

    increment() : void {
        this.id = ++SampleService.counter;
        this.localVar++;
        console.log(`Instance: ${SampleService.instances}. Local var: ${this.localVar}`);
    }
 }