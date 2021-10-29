class Person {
    constructor (name, age, isMarried) {
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
        this.asJSON = JSON.stringify(this);
        people.push(this);
    }
}
let people = [];
let viggo = new Person("Viggo", 19, false);
window.onload = function () {
    Main();
    console.log(viggo.asJSON);
    localStorage.setItem("Viggo", viggo.asJSON);
    let result = JSON.parse(localStorage.getItem("Viggo"));
    console.log(result);
}

function Main() {
    
}