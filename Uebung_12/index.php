<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Übung 12</title>
    <link href='https://fonts.googleapis.com/css?family=Noto Sans Mono' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/atom-one-light.min.css">  
    <script type=module src="/main.js"></script>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <my-nav></my-nav>
<div class="pagecontent">
        <h2 class="taskheading">12.1 Registrierung mit PHP</h2>
        <p class="task">
            Erstellen Sie mit PHP ein Registrierungsformular.
            Speichern Sie die eingegebenen Daten persistent in einer Datei.
            Schreiben Sie Ihre PHP-Scripte so, dass es dabei zu keinen <a href="https://de.wikipedia.org/wiki/Wettlaufsituation" target="_blank">Nebenläufigkeitsartefakten</a>
            (z.B. <a href="https://de.wikipedia.org/wiki/Verlorenes_Update">Lost Update</a>) kommen kann, egal wie viele Nutzer sich gleichzeitig registrieren.
        </p>
        <br>
        <hr>
        <br>
    
        <button id="solutionButton" class="solutionButton">Lösung anzeigen</button>
    <div class="solution" style="display: none;">
            <h2>Registrierung</h2>
            <form method="post">
            <?php
                include("registration.php");
            ?>
                <label for="email">E-Mail:</label>
                <input type="email" name="email" required><br>
                <label for="password">Passwort:</label>
                <input type="password" name="password" required><br>
                <input type="submit" value="Registrieren">
    
            </form>
        
            <br>
            <h3 class="task">HTMl Code:</h3>
            <pre>
                <code>
                    &lt;!DOCTYPE html&gt;<br />
                    &lt;html lang=&quot;de&quot;&gt;<br />
                    &lt;head&gt;<br />
                        &lt;meta charset=&quot;UTF-8&quot;&gt;<br />
                        &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;<br />
                        &lt;title&gt;&Uuml;bung 12&lt;/title&gt;<br />
                    &lt;/head&gt;<br />
                    &lt;body&gt;<br />
                        &lt;h2&gt;Registrierung&lt;/h2&gt;<br />
                        &lt;form method=&quot;post&quot;&gt;<br />
                        &lt;?php<br />
                            include(&quot;registration.php&quot;);<br />
                        ?&gt;<br />
                            &lt;label for=&quot;email&quot;&gt;E-Mail:&lt;/label&gt;<br />
                            &lt;input type=&quot;email&quot; name=&quot;email&quot; required&gt;&lt;br&gt;<br />
                            &lt;label for=&quot;password&quot;&gt;Passwort:&lt;/label&gt;<br />
                            &lt;input type=&quot;password&quot; name=&quot;password&quot; required&gt;&lt;br&gt;<br />
                            &lt;input type=&quot;submit&quot; value=&quot;Registrieren&quot;&gt;<br />
                        <br />
                        &lt;/form&gt;<br />
                    &lt;/body&gt;<br />
                    &lt;/html&gt;<br />
                </code>
            </pre>
        
        
            <h3 class="task">PHP Code:</h3>
            <pre>
                <code>
                    <?php echo highlight_file('registration.php', true); ?>
                </code>
            </pre>
    </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script>
        <script>hljs.highlightAll();</script>
</div>
</body>
</html>
    