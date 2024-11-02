function shallowClone(obj){
    return Object.assign({}, obj);
}

const original = { a:1, b:1 , c:2};
const clone = shallowClone(original);
console.log(clone);//{a:1, b:1, c:2}
clone.b.c = 3;
console.log(original)