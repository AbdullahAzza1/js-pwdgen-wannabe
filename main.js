// let nomeUtente = "abdullah";
// let cognomeUtente = "azza";
// let colorePreferito = "blu";


const nomeUtente = prompt("inserisci il tuo nome", "abdullah");
const cognomeUtente = prompt("inserisci il tuo cognome", "azza");
const colorePreferito = prompt("inserisci il tuo colore preferito", "blu");


document.getElementById("titolo").innerHTML = "la tua password e " + nomeUtente + cognomeUtente + colorePreferito;