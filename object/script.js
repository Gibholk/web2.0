     let user = {}
     user.name = "Jhon",
     user.surname = "Smith",
     user.name = "Pete"
     delete user.name;
     
 function isEmpty(object){
     for(let key in object ){
     return true;
 }
 return false;
}

let salaries = {
    john: 100,
    Ann: 160,
    Pete: 130
};
for(let key in salaries){
    num +=salaries[key]
}
console.log(num)