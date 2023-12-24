let htmlTabContentText = '';

async function fetchAll() {
    if(htmlTabContentText == ''){   // falls schonmal gefetched nicht nötig nochmal zu fetchen
        try {
            const response = await fetch('http://127.0.0.1:5500/Uebung_8/8.3.json');
            const data = await response.json();   // json ist nämlich auch eine asynchrone Funktion
            
            htmlTabContentText = data;
            
            return htmlTabContentText; // Rückgabewert der Funktion
          } catch (error) {
            console.error('Fehler beim Abrufen der Daten:', error);
            throw error; // Fehler weitergeben
          }
    } else {
        return htmlTabContentText;
    }
  }


  async function gethtmlheadingscontent(){
    await fetchAll();
    return htmlTabContentText.html.headings.content;
  }

  async function gethtmlheadingsreferences(){
    await fetchAll();
    return htmlTabContentText.html.headings.references;
  }

  async function gethtmlparagraphcontent(){
    await fetchAll();
    return htmlTabContentText.html.paragraph.content;
  }

  async function gethtmlparagraphreferences(){
    await fetchAll();
    return htmlTabContentText.html.paragraph.references;
  }


  