// Mail

//creo un array con le email degli invitati alla festa
const invitati = ["reverendo-green@mail.com", "colonnello-mustard@mail.com", "professor-plum@mail.com", "miss-scarlett@mail.com", "dottoressa-orchid@mail.com", "contessa-peacock@mail.com"]

console.log("le email degli invitati sono: " + invitati)


const mailUtente = prompt("Inserisci la tua mail")

console.log("La mail inserita dall'utente è: " + mailUtente)

let isChecked = false

for (let i = 0; i < invitati.length; i++) {

    if (mailUtente == invitati[i]) {
        console.log("Benvenuto alla festa!")
    } else {
        console.log("Mi dispiace, non può entrare.")
    }
}