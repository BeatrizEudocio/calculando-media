const input = require("readline-sync")

console.log("Qual foi sua nota?")

const Nota01 = input.question("Qual foi sua 1 nota?")
const Nota02 = input.question("Qual foi sua 2 nota?")
const Nota03 = input.question("Qual foi sua 3 nota?")
const Nota04 = input.question("Qual foi sua 4 nota?")
const Nota05 = input.question("Qual foi sua 5 nota?")
const Nota06 = input.question("Qual foi sua 6 nota?")

const total = (parseInt (Nota01) + parseInt (Nota02) + parseInt (Nota03) + parseInt (Nota04) + parseInt (Nota05) + parseInt (Nota06))/6

console.log("Sua média é:")
console.log (total)

if (total >=7) {
    console.log("Aprovada")
} else if (total >=5 && total <7) {
    console.log("Recuperação")
} else if (total <5) {
    console.log("Reprovada")
}
