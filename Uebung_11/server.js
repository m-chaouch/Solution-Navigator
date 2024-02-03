// import express from "express";  // importieren des Express-Moduls (funktioniert leider nicht)
const express = require("express");


const app = express();  // Instanz von der Express application erstellen
const port = 8080;  // port festlegen, auf dem der Server stehen soll

app.get('/', (req, res) => {    //  definierung einer Route
    res.send('Server ist online!');
});


//  Die Schnittstelle - Interaktion über URL Parameter
app.get("/Hello/:name", (req, res) => {     
    const name = req.params.name;       // hol den Parameter

    if(name) {
        const greeting = `Hello ${name}!`;
        res.send(greeting);
    } else {
        res.status(400).send("Der Name wurde nicht angegeben!");
    }
});


app.listen(port, () => {        // startet den Server
    console.log(`Server is running on port ${port}`);
});

// Der Server wird mit node server.js gestartet
