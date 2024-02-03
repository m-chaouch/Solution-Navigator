<?php
// Überprüfen, ob das Formular gesendet wurde
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    
    $dataFilePath = "user_data.txt";    //path zu unserer Datei mit den Daten

    
    function checkAccount($filePath, $email) {
        $accounts = file($filePath, FILE_IGNORE_NEW_LINES); // Inhalt der Datei wird gelesen und in accounts gespeichert
        foreach ($accounts as $account) {
            list($existingEmail) = explode(', ', $account); // Zeile wird in ein array aufgeteilt. Nur das erste Element wird der Variablen $existingEmail zugewisen
            if ($existingEmail == $email) {
                return true;
            }
        }
        return false;
    }

    function registerAccount($filePath, $email, $password){
        $fileLock = fopen($filePath, "a");  //öffnet die Datei zum schreiben, "a" = append -> positioniert den Dateizeiger am Ende der Datei
        flock($fileLock, LOCK_EX);  // wir sperren den Zugriff auf unsere Datei mit diesem mutex -> race conditions werden damit vermieden
        fwrite($fileLock, "$email, $password\n");   //Daten in die Datei schreiben (wichtig: neue Zeile -> einfacher für checkAccount nachher)
        flock($fileLock, LOCK_UN);  // der mutex wird wieder entsperrt
        fclose($fileLock);  // die datei wird geschlossen
    } 


    if (!empty($email)){
        if(checkAccount($dataFilePath, $email)){
            echo '<p style="color: red;">Ein Konto mit dieser Email existiert bereits!</p>';
        } else {
            registerAccount($dataFilePath, $email, $password);
            echo '<p style="color: green;">Registrierung erfolgreich</p>';
        }
    
    }
}
?>