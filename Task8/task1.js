function makeBuffer() {
    
    var strArr = [];

    return function (a) {
        if (!arguments.length) {
            return strArr.join('');
        }
        strArr.push(a);

    }
}

var buffer = makeBuffer();
// buffer('замыкания');
// buffer('использовать');
// console.log(buffer());
buffer(0);
buffer(1);
buffer(0);
console.log(buffer());
console.log('end task 1');