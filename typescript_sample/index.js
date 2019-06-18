var Animal = /** @class */ (function () {
    function Animal(type, size) {
        this.type = type;
        this.size = size;
    }
    Animal.prototype.display = function () {
        var text;
        text = "The animail is " + this.type + " and the size of " + this.size;
        document.getElementById("root").innerHTML = text;
    };
    return Animal;
}());
var cat = new Animal('cat', 15);
var dog = new Animal('dog', 22);
dog.display();
