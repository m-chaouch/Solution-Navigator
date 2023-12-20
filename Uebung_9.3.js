function checkGameWinner(matrix){
    let Winner = "";
    Winner = checkHorizontal(matrix) || checkVertical(matrix) || checkDiagonalTD(matrix) || checkDiagonalDT(matrix);    //"" ist falsy, also wird hier nur was in Winner eingetragen, wenn jemand gewinnt
    console.log(Winner);
    return Winner;
}

function checkHorizontal(matrix){
    let p1 = 0;
    let p2 = 0;
    for(let z=0; z < matrix.length; z++){
        for(let s=0; s < matrix[0].length; s++){
            if(matrix[z][s] == 1){  // Bei Einsen hat der Spieler 1 an diesen Stellen Symbole gesetzt
                ++p1;
            }
            if(matrix[z][s] == 2){  // Bei Zweien hat der Spieler 2 an diesen Stellen Symbole gesetzt
                ++p2;
            }
        }
        if(p1==3){  // 3 Platzierungen von p1 in einer Zeile -> p1 gewinnt
            return "X wins!";
        }
        if(p2==3){  // 3 Platzierungen von p2 in einer Zeile -> p2 gewinnt
            return "O wins!";
        }
        //Es gab in dieser Zeile keinen Gewinner
        p1=0;
        p2=0;
    }
    //einfacher
    return "";
}

function checkVertical(matrix){
    let p1 = 0;
    let p2 = 0;
    // Zeilenweise eine Spalte x durchgehen
    for(let s=0; s < matrix[0].length; s++){   
        for(let z=0; z < matrix.length; z++){    
            if(matrix[z][s] == 1){
                ++p1;
            }
            if(matrix[z][s] == 2){
                ++p2;
            }
        }
        if(p1==3){  // 3 Platzierungen von p1 in einer Spalte -> p1 gewinnt
            return "X wins!";
        }
        if(p2==3){  // 3 Platzierungen von p2 in einer Spalte -> p2 gewinnt
            return "O wins!";
        }
        //Es gab in dieser Spalte keinen Gewinner
        p1=0;
        p2=0;
    }
    return "";
}

function checkDiagonalTD(matrix){   // Prüfe diagonal von oben links nach unten rechts
    /**     1 / /
     *      / 1 /
     *      / / 1
     */
    if(matrix[0][0]==1 && matrix[1][1]==1  && matrix[2][2]==1 ){
        return "X wins!"
    }

    /**     2 / /
     *      / 2 /
     *      / / 2
     */

    if(matrix[0][0]==2 && matrix[1][1]==2  && matrix[2][2]==2 ){
        return "O wins!"
    }
    return "";
}

function checkDiagonalDT(matrix){     // Prüfe diagonal von unten links nach oben rechts
    /**     / / 1
     *      / 1 /
     *      1 / /
     */

    if(matrix[0][2]==1 && matrix[1][1]==1  && matrix[2][0]==1 ){
        return "X wins!"
    }

    /**     / / 2
     *      / 2 /
     *      2 / /
     */
    if(matrix[0][2]==2 && matrix[1][1]==2  && matrix[2][0]==2 ){
        return "O wins!"
    }
    return "";
}