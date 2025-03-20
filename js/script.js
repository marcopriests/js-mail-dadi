// Mail

// const invitati = ["reverendo-green@mail.com", "colonnello-mustard@mail.com", "professor-plum@mail.com", "miss-scarlett@mail.com", "dottoressa-orchid@mail.com", "contessa-peacock@mail.com"]

// console.log("le email degli invitati sono: " + invitati)


// const mailUtente = prompt("Inserisci la tua mail")

// console.log("La mail inserita dall'utente è: " + mailUtente)

// let isChecked = false

// for (let i = 0; isChecked == false && i < invitati.length; i++) {

//     if (mailUtente == invitati[i]) {
//         isChecked = true
//     }

// }

// if (isChecked) {
    
//     console.log("Benvenuto alla festa!")
    
// } else {

//     console.log("Mi dispiace, non può entrare.")

// }


// Dadi

//Variabile numero Utente
const numUtente = confirm(Math.floor(Math.random() * 6) + 1)

//variabile numero cpu
const numComputer = Math.floor(Math.random() * 6) + 1

console.log(numComputer)
