function identity(a){
    return a;
}

function identity_function(a){
    return identity(a);
}

export function add(a,b){
    return a+b;
}

export function mul(a,b){
    return a*b;
}

export function addf(x){
    return function refun(y){
        return x+y;
    }
}

function applyf(fun){
    return function fun1(x){
        return function fun2(y){
            return fun(x,y);
        }
    }
}



