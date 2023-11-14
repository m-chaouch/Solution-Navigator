function fibonacci(n){
    var table = [0,1];
    for(var i = 2; i < n; i++){   // n-2 da wir schon 0 und 1 in der fibonacci-Tabelle haben. Am Ende hat man dann n viele fibonaccizahlen
        table[i] = table[i-1] + table[i-2];
    }
    console.log(table);
}

function fibonacci2000(){
    return fibonacci(2000);
}


/*
 * 1. Was ist die größte Fibonacci-Zahl, die sich noch als Integer sicher speichern lässt (Number.MAX_SAFE_INTEGER)? Die wievielte Zahl in der Fibonacci-Folge ist das?
 */

function fibonaccimaxInteger(n){
    var table = [0,1];
    for(var i = 2; i < n; i++){   // n-2 da wir schon 0 und 1 in der fibonacci-Tabelle haben. Am Ende hat man dann n viele fibonacci-Zahlen.
        table[i] = table[i-1] + table[i-2];
        if(table[i] > Number.MAX_SAFE_INTEGER){  
            console.log("Die Position der Fibonacci-Zahl, die sich noch als Integer speichern lässt:" + (i-1));
            console.log("Die Fibonacci-Zahl, die sich noch als Integer speichern lässt:" + table[i-1]+ "\n");
            break;
        }
    }
}

fibonaccimaxInteger(2000);



/**
 * 2. Was ist die größte Fibonacci-Zahl, die sich noch als Number speichern lässt (Number.MAX_VALUE)? Die wievielte Zahl in der Fibonacci-Folge ist das?
 */

function fibonaccimaxNumber(n){
    var table = [0,1];
    for(var i = 2; i < n; i++){   // n-2 da wir schon 0 und 1 in der fibonacci-Tabelle haben. Am Ende hat man dann n viele fibonacci-Zahlen.
        table[i] = table[i-1] + table[i-2];
        if(table[i] > Number.MAX_VALUE){  
            console.log("Die Position der Fibonacci-Zahl, die sich noch als Number speichern lässt:" + (i-1));
            console.log("Die Fibonacci-Zahl, die sich noch als Number speichern lässt:" + table[i-1] + "\n");
            break;
        }
    }
}

fibonaccimaxNumber(2000);



/**
 * 3. Wechseln Sie zu BigInt, um alle 2000 Fibonacci-Zahlen korrekt anzuzeigen.
 */

function fibonacciBigInt(n){
    var table = [0,1];
    for(var i = 2; i < n; i++){   // da wir schon 0 und 1 in der fibonacci-Tabelle haben, mit 2 anfangen. Am Ende hat man dann n viele fibonacci-Zahlen.
        table[i] = BigInt(table[i-1]) + BigInt(table[i-2]);
        if(table[i] > BigInt(Number.MAX_VALUE)){  
            console.log("Die Position der Fibonacci-Zahl, die sich noch als BigInt speichern lässt:" + (i-1));
            console.log("Die Fibonacci-Zahl, die sich noch als BigInt speichern lässt:" + table[i-1]);
            break;
        }
    }
}

/**
 * Optional: Was ist die größte Fibonacci-Zahl, die Sie mit BigInt korrekt berechnet haben? An welcher Stelle in der Fibonacci-Folge steht diese?
 */

fibonacciBigInt(2000);