function fibonacci(){
    var count=0;
    var left = 0;
    var right = 1;
    var fib = 0;
    console.log(left);
    console.log(right);
    while (count < 1998){
        fib = BigInt(left) + BigInt(right);
        console.log(fib);
        left = right;
        right = fib;
        ++count;
    }
}