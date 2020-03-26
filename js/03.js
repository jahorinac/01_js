/*================================================
03.01 Danilo Vesovic - predavanje JS Class
================================================*/

// class MakePet{
//     constructor(name, type){
//         this.name = name;
//         this.type = type;
//     }
//
//     makeSound(){
//         console.log("Grrrr ....")
//     }
// }
//
// class Cat extends MakePet{
//     constructor(name, type, color){
//         super(name, type);
//         this.color = color;
//     }
//     makeSound() {
//         console.log("Mjauuuu ....")
//     }
// }
//
// class Dog extends MakePet{
//
// }
//
// let cat = new Cat("Gandalf", "cat", "blue");
// let dog = new Dog("Max", "dog");
//
// console.log(cat.color);
//
// cat.makeSound()

/*================================================
Danilo Vesovic - predavanje ES6 moduli
================================================*/
// //Konfiguracijiski dio
// const config = {
//     en: "Hello",
//     sr: "Zdravo"
// }
// //Funkcionalni dio
// function sayHi(language, name){
//     if(language == "en" || language == 'sr'){
//         console.log(`${config[language]} ${name}`)
//     }else{
//         console.log("Hola " + name);
//     }
// }
// //Egzekucioni dio
// sayHi("en", "Dovla")

//////////////////////////////////////
import sayHi from './es6_moduli/sayHi.js';

sayHi("en", "Dovla")
