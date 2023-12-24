import { addf, add, mul } from './Uebung_4.1.js';


function curry(binaryFunc, x){
    return function(y){
        return binaryFunc(x,y);
    }
}


function inc1(x){
    return curry(addf(1),x)(0);
}



function methodize(binaryFunc) {
    return function (y) {
        return binaryFunc(this, y);
    };
}



function demethodize(unaryMethod) {
    return function (x, y) {
        return unaryMethod.call(x, y);
    };
}


function twice(binaryFunc) {
    return function (x) {
        return binaryFunc(x, x);
    };
}


function composeu(func1, func2) {
    return function (x) {
        return func2(func1(x));
    };
}


function composeb(func1, func2) {
    return function (x, y, z) {
        return func2(func1(x, y), z);
    };
}




function once(func) {
    let called = false;
    let result;
    return function (...args) { // Rest Parameter-Syntax, weil wir nicht wissen, wie viele Argumente für die Funktion kommen!
        if (!called) {

            called = true;
            result = func(...args);
            return result;
        }else{
            throw new Error("Der Aufruf dieser Funktion darf nur EINMAL erfolgen!!");
        }



    };
}



function revocable(func) {
    let revoked = false;

    const invoke = (...args) => {   // siehe once Begründung
        if (!revoked) {
            return func(...args);
        } else {
            throw new Error("Die Funktion wurde zurückgenommen.");
        }
    };

    const revoke = () => {
        revoked = true;
    };

    return { invoke, revoke };
}

function vector() {
    const privateArray = [];
    return {
        append(value) {
            privateArray.push(value);
        },
        store(index, value) {
            if (index >= 0 && index < privateArray.length) {    // kann ja sein, dass man einen falschen Index angibt
                privateArray[index] = value;
            }
        },
        get(index) {
            if (index >= 0 && index < privateArray.length) {
                return privateArray[index];
            }
        }
    };
}
