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


function account(){
    this.balance =0;
}
account.prototype.deposit = 
function(amount){
    this.balance += amount;
};