// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4 = "wow JavaScript is so cool";
let exampleFirstWord4 = word4.substring(0, 3);
let exampleSecondWord4 = word4.substring(4, 14);
let exampleThirdWord4 = word4.substring(15, 17);
let exampleFourthWord4 = word4.substring(18, 20);
let exampleFifthWord4 = word4.substring(21, 25);

console.log(
  "First Word: " +
    exampleFirstWord4 +
    ", with length: " +
    exampleFirstWord4.length,
  "Second Word: " +
    exampleSecondWord4 +
    ", with length: " +
    exampleSecondWord4.length,
  "Third Word: " +
    exampleThirdWord4 +
    ", with length: " +
    exampleThirdWord4.length,
  "Fourth Word: " +
    exampleFourthWord4 +
    ", with length: " +
    exampleFourthWord4.length,
  "Fifth Word: " +
    exampleFifthWord4 +
    ", with length: " +
    exampleFifthWord4.length
);
