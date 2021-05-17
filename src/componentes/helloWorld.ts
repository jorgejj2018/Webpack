export class Helloworld{
    name:string
    constructor(name:string){
        this.name = name
    }
    
    greet():string{
        return `Hola Mundo Con ${this.name}`;
    }
}