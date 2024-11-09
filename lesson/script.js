// function shallowClone(obj){
//     return Object.assign({}, obj);
// }

// const original = { a:1, b:1 , c:2};
// const clone = shallowClone(original);
// console.log(clone);
// clone.b.c = 3;
// console.log(original);


// function rectengle(width, height){
//     this.width = width;
//     this.height = height;
// }
// rectengle.prototype.getArea = function(){
//     return this.width * this.height;
// };
// rectengle.prototype.getPerimeter =
// function(){
//     return 2 * (this.width + this.height);
// };


// function account(){
//     this.balance =0;
// }
// account.prototype.deposit = 
// function(amount){
//     this.balance += amount;
// };


// const number = [1, 2, 3, 4, 5];
// const fruits = ["apple", "banana","orange"];
// const people = [
//     {name: "John"},
//     {name:"Alice"},
//     {name:"Bob"},
// ];
// const words = ["hello","world","javascript"];
// const numbers = Array.of(1, 2, 3, 4, 5);
// const thirdElement = numbers[2];
// console.log(thirdElement);
// const Number = [1, 2, 3, 4,5];
// const firstElement = numbers[0];
// console.log(firstElement);


function sumArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length;
        i++){
            sum += numbers[i];
        }
        return sum;
}