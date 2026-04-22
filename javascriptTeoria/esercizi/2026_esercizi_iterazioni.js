// ============================================================
//  ESERCIZI SUGLI ITERATORI IN JAVASCRIPT
//  10 esercizi di base  +  5 avanzati
//
//  Come usare questo file:
//  - Leggi il testo dell'esercizio nel commento
//  - Scrivi il tuo codice nello spazio indicato
//  - Controlla il risultato atteso nel commento "// →"
//  ============================================================


// ── Dati di partenza (non modificare) ───────────────────────

const numeri   = [3, 8, 15, 2, 42, 7, 19, 4, 31, 11];
const parole   = ["mela", "banana", "kiwi", "arancia", "uva", "limone"];
const studenti = [
    { nome: "Alice",   voto: 8  },
    { nome: "Bruno",   voto: 5  },
    { nome: "Carla",   voto: 9  },
    { nome: "Davide",  voto: 6  },
    { nome: "Elena",   voto: 7  },
    { nome: "Filippo", voto: 4  },
];


// ============================================================
//  ESERCIZI DI BASE
// ============================================================


// ── Esercizio 1 ─────────────────────────────────────────────
// Usa for...of per stampare ogni numero dell'array "numeri"
// preceduto dalla scritta "Numero: ".
// → "Numero: 3", "Numero: 8", ...

console.log("--- Esercizio 1 ---");

// Scrivi qui il tuo codice ↓

for(num of numeri){
    console.log("numero: "+num);
}

// ── Esercizio 2 ─────────────────────────────────────────────
// Usa for...in per stampare ogni indice e il valore corrispondente
// dell'array "parole", nel formato: "parole[0] = mela"
// → "parole[0] = mela", "parole[1] = banana", ...

console.log("--- Esercizio 2 ---");

// Scrivi qui il tuo codice ↓

for(index in parole){
    console.log("parola["+index+"] = "+parole[index]);
}

// ── Esercizio 3 ─────────────────────────────────────────────
// Usa forEach per calcolare la somma di tutti i numeri
// nell'array "numeri" e stampare il risultato finale.
// → Somma totale: 142

console.log("--- Esercizio 3 ---");

let somma = 0;

// Scrivi qui il tuo codice ↓

numeri.forEach(numero=>{
      somma+=numero;
})
console.log(somma);

// ── Esercizio 4 ─────────────────────────────────────────────
// Usa map per creare un nuovo array "maiuscole" dove ogni parola
// di "parole" è scritta in maiuscolo.
// → ["MELA", "BANANA", "KIWI", "ARANCIA", "UVA", "LIMONE"]
// Suggerimento: usa il metodo .toUpperCase()

console.log("--- Esercizio 4 ---");

// Scrivi qui il tuo codice ↓
let maiuscole = parole.map(parola=>parola.toUpperCase());
console.log("array in maiuscolo:",maiuscole);

// ── Esercizio 5 ─────────────────────────────────────────────
// Usa filter per creare un nuovo array "pari" contenente
// solo i numeri pari dell'array "numeri".
// → [8, 2, 42, 4]
// Suggerimento: un numero è pari se n % 2 === 0

console.log("--- Esercizio 5 ---");

// Scrivi qui il tuo codice ↓
let pari = numeri.filter(n=>n%2===0);
console.log("array di pari:" ,pari);

// ── Esercizio 6 ─────────────────────────────────────────────
// Usa filter per trovare tutte le parole di "parole"
// che hanno più di 4 lettere.
// → ["banana", "arancia", "limone"]

console.log("--- Esercizio 6 ---");

// Scrivi qui il tuo codice ↓
let lunghe = parole.filter(parola=>parola.length>4)
console.log(lunghe);

// ── Esercizio 7 ─────────────────────────────────────────────
// Usa find per trovare il primo numero maggiore di 20
// nell'array "numeri".
// → 42

console.log("--- Esercizio 7 ---");

// Scrivi qui il tuo codice ↓
let grande = numeri.find(n=>n>40);
console.log(grande);

// ── Esercizio 8 ─────────────────────────────────────────────
// Usa findIndex per trovare la posizione della parola "uva"
// nell'array "parole".
// → 4

console.log("--- Esercizio 8 ---");

// Scrivi qui il tuo codice ↓
let pos = parole.findIndex(parola=>parola==="uva");
console.log(pos);


// ── Esercizio 9 ─────────────────────────────────────────────
// Usa map per creare un nuovo array "lunghezze" che contiene
// la lunghezza (numero di lettere) di ogni parola in "parole".
// → [4, 6, 4, 7, 3, 6]

console.log("--- Esercizio 9 ---");

// Scrivi qui il tuo codice ↓
let lunghezze = parole.map(parola=>parola.length);
console.log(lunghezze);


// ── Esercizio 10 ────────────────────────────────────────────
// Crea una matrice 3×3 con i valori da 1 a 9 disposti per righe
// (riga 0: [1,2,3], riga 1: [4,5,6], riga 2: [7,8,9])
// poi stampala riga per riga con un ciclo for...of.

console.log("--- Esercizio 10 ---");

// Scrivi qui il tuo codice ↓

const mat =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for(let numeri of mat){
    console.log(numeri);
}

// ============================================================
//  ESERCIZI AVANZATI
// ============================================================


// ── Avanzato 1 ──────────────────────────────────────────────
// Usa map per trasformare l'array "studenti" in un nuovo array
// di stringhe nel formato: "Alice ha preso 8"
// → ["Alice ha preso 8", "Bruno ha preso 5", ...]

console.log("--- Avanzato 1 ---");

// Scrivi qui il tuo codice ↓
let descrizioni = studenti.map(studente=>{
    return studente.nome + " ha preso "+ studente.voto
})
console.log(descrizioni);


// ── Avanzato 2 ──────────────────────────────────────────────
// Usa filter per ottenere solo gli studenti promossi (voto >= 6),
// poi usa map sul risultato per estrarre solo i loro nomi.
// Nota: puoi concatenare i due metodi uno dopo l'altro.
// → ["Alice", "Carla", "Davide", "Elena"]

console.log("--- Avanzato 2 ---");

// Scrivi qui il tuo codice ↓
 let promossi = studenti.filter(studente=>studente.voto >= 6);
 promossi=promossi.map(studente=>studente.nome);
console.log(promossi);


// ── Avanzato 3 ──────────────────────────────────────────────
// Usa forEach per calcolare la media dei voti degli studenti.
// Stampa il risultato arrotondato a due decimali.
// → Media: 6.50
// Suggerimento: somma tutti i voti con forEach, poi dividi
// per studenti.length e usa .toFixed(2)

console.log("--- Avanzato 3 ---");

// Scrivi qui il tuo codice ↓

let s = 0;

studenti.forEach(studente => {
  s += studente.voto;
});

let media = (s / studenti.length).toFixed(2);

console.log(media);

// ── Avanzato 4 ──────────────────────────────────────────────
// Hai una matrice 4×4 inizializzata a zero.
// Usa cicli for annidati per riempirla con la tavola
// pitagorica: mat[i][j] = (i+1) * (j+1).
// Poi stampala riga per riga con for...of.
// → riga 0: 1  2  3  4
//    riga 1: 2  4  6  8
//    riga 2: 3  6  9  12
//    riga 3: 4  8  12 16

console.log("--- Avanzato 4 ---");

// Scrivi qui il tuo codice ↓
const N = 4, M = 4;
const griglia = new Array(N);
for (let k = 0; k < N; k++) {
    griglia[k] = new Array(M).fill(0);
}

for (let k=0;k<N;k++){
    for(let i=0;i<N;i++){
        griglia[k][i]=(k+1)*(i+1);
    }
    
}
for(let riga of griglia){
    console.log(riga);
}


// ── Avanzato 5 ──────────────────────────────────────────────
// Usa find per trovare il primo studente con voto insufficiente
// (voto < 6), poi usa findIndex per trovare la sua posizione
// nell'array. Stampa:
// "Primo insufficiente: Filippo (posizione 5)"

console.log("--- Avanzato 5 ---");

// Scrivi qui il tuo codice ↓

let insufficente =studenti.find(studente=>studente.voto<6);
let i=studenti.findIndex(studente=>studente==insufficente);
i=i+1;
console.log("il primo insufficente è "+insufficente.nome +" posizione: "+ i);



