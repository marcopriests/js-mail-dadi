Boolean - Web Development

2° Mese: JAVASCRIPT

Esercizio 6

Mail
Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. Non è consentito usare nessun metodo proprio degli array (come includes, per esempio). Si può fare? Certo che si basta ragionare un po’. Nota: Non è necessario provvedere alla validazione delle email

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

Consigli del giorno:

    scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
    javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
    si ma noi cosa vogliamo fare?
    torniamo a scrivere in italiano
    proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

Buon lavoro e buon divertimento!

Ragionamento Mail:

- creo un array di mail inventate da me
- dichiaro una variabile in cui salvo la mail che andrà ad inserire l'utente
- creo un ciclo per controllare se la mail inserita dall'utente corrisponde ad una contenuta nella lista
- effettuo un controllo per verificare se la mail inserita dall'utente corrisponde ad una presente nella lista 
    - se la mail corrisponde: stampo un messaggio "benvenuto alla festa"
    - se la mail non corrisponde stampo un messaggio: "mi dispiace ma non sei ammesso"
- creo una variabile di controllo e la inizializzo false
- aggiungo la variabile di controllo nella condizione di fine ciclo



Ragionamento Dadi:

- creo una variabile in cui comunico all'utente il numero randomico tra 1 e 6 scelto per lui.
- creo una variabile a cui assegno un valore numerico randomico tra 1 e 6. Sarà il numero del computer
- effettuo un controllo per verificare quale dei due valori è maggiore
    - se è maggiore il numero dell'utente, stampo: "Congratulazioni hai vinto! il tuo numero era X mentre quello del tuo avversario Y"
    - se è maggiore il numero del computer, stampo: "Mi dispiace, hai perso. il tuo numero era X mentre quello del tuo avversario Y"