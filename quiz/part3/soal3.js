// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

let counter = 1;

while (counter <= 100) {
  if (counter % 2 == 0) {
    console.log(
      "Apabila angka counter adalah Genap, Tuliskan GENAP - ",
      counter
    );
  }
  if (counter % 2 !== 0) {
    console.log(
      "Apabila angka counter adalah Ganjil, Tuliskan GANJIL - ",
      counter
    );
  }
  counter++;
}
