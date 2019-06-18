
class Animal{
    type: string;
    size: number;

    constructor (type, size) {
        this.type = type;
        this.size = size;
    }

    display (){
        let text: string;
        text = `The animail is ${this.type} and the size of ${this.size}`;
        document.getElementById("root").innerHTML=text;
    }
}


let cat = new Animal('cat', 15);
let dog = new Animal('dog', 22);


dog.display();