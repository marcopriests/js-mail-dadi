// Mail

//creo l'array contenente le mail degli invitati
const invitati = ["reverendo-green@mail.com", "colonnello-mustard@mail.com", "professor-plum@mail.com", "miss-scarlett@mail.com", "dottoressa-orchid@mail.com", "contessa-peacock@mail.com"]

console.log("le email degli invitati sono: " + invitati)

//chiedo all'utente di inserire la sua mail e la salvo in una variabile
const mailUtente = prompt("Inserisci la tua mail")

console.log("La mail inserita dall'utente è: " + mailUtente)

//creo una variabile di controllo
let isChecked = false


//inizio il ciclo per controllare se la mail inserita dall'utente corrisponde a quelle nella lista degli invitati
for (let i = 0; isChecked == false && i < invitati.length; i++) {

    //Se la mail dell'utente corrisponde ad una presente nella lista, trasformo la variabile di controllo in TRUE
    if (mailUtente == invitati[i]) {
        isChecked = true
    }

}

//effettuo il controllo basandomi sull'esito della variabile di controllo
if (isChecked) {
    
    //se la mail dell'utente è in lista, stampo questo messaggio
    console.log("Benvenuto alla festa!")
    
} else {

    //se la mail dell'utente non è in lista, stampo questo messaggio
    console.log("Mi dispiace, non può entrare.")

}


// Dadi

//dichiaro la variabile che conterrà il numero dell'utente
const numUtente = Math.floor(Math.random() * 6) + 1

//comunico il suo numero all'utente
alert("Il tuo numero è: " + numUtente)

//dichiaro la variabile che conterrà il numero della cpu
const numComputer = Math.floor(Math.random() * 6) + 1

console.log(numUtente)
console.log(numComputer)

//effettuo il controllo per verificare quale dei due numeri è maggiore oppure se si è verificato un pareggio
if (numUtente > numComputer) {

    //se il numero dell'utente è maggiore, stampo questo messaggio:
    console.log("Congratulazioni hai vinto! il tuo numero era " + numUtente + " mentre quello del tuo avversario " + numComputer)

} else if (numUtente == numComputer) {

    //se si è verificato un pareggio, stampo questo messaggio:
    console.log("Pareggio! Entrambi i numeri erano " + numUtente)

} else {

    //se il numero dell'utente è minore, stampo questo messaggio:
    console.log("Mi dispiace, hai perso. il tuo numero era " + numUtente + " mentre quello del tuo avversario " + numComputer)
    
}
