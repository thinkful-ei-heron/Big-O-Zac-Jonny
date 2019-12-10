function TOH(disc,A,B,C, count){
    if(disc > 0){
        count[0] += 1;
        TOH(disc -1,A,C,B, count);
        console.log('Disc '+disc+' from '+A+' to '+C);
        TOH(disc -1,B,A,C, count);
    }
    return count[0];
}
''+''+''
//console.log(TOH(3,'A','B','C',[0]));
//console.log(TOH(4,'A','B','C',[0]));
console.log(TOH(5,'A','B','C',[0]));
function countingSheep(n) {
    for (let i = 0; i < n; i++) {
        console.log('Another Sheep Jumps Over the Fence');
    }
    console.log('All sheep jumped over the fence');
}

function powerCalculator(base, exp) {
    let product = 1;
    if(exp < 0){
        return 'exponent should be >= 0'
    }
    for (let i = 0; i < exp; i++) {
        product *= base;
    }
    return product;
}

//console.log(powerCalculator(10, 10));

function reverseString(str){
    return str.reverse();
}

function trangularNumber(n){
    let Sum = 0;
    for(let i = 1; i <= n ; i++){
        Sum+=i;
    }
    return Sum;
}
//console.log(trangularNumber(2000));

function stringSplitter(str,split){
    return str.split(split);
}
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
//console.log(compute(1));
function factorial(num){
    let product = 1;
    for(let i=1; i <= num;i++){
        product *= i
    }
    return product;
}
//console.log(factorial(500));