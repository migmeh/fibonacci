
function fibonacci(num){

   var a = 1, b = 0, temp;

    while (num-1 >= 0){
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}



module.exports.fibonacci = fibonacci;

