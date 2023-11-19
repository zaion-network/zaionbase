const bambini = 25;

const torte = 4;

const fette_torte = 6;

let fette_totali = undefined;
// bastano torte?
// fette_totali > bambini => true

function svolgimento(
  bambini: number,
  torte: number,
  fette_torte: number,
  fette_totali: undefined | number
) {
  fette_totali = torte * fette_torte;
  return fette_totali > bambini;
}

let result = svolgimento(bambini, torte, fette_torte, fette_totali);
console.log(result);
