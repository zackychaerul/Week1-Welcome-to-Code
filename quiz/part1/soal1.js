// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya.
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang),
// yaitu nama dan peran. Variabel peran harus memiliki isi data,
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game".
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir.
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)
/**
 * Simpan nama pemain dalam variabel nama dengan nilai "zacky".
Simpan peran pemain dalam variabel peran dengan nilai "penyihir".
Periksa apakah variabel nama kosong:
Jika ya, tampilkan pesan "nama wajib disi".
Periksa apakah variabel peran kosong:
Jika ya, tampilkan pesan "pilih peranmu untuk memulai game".
Jika peran adalah "ksatria", maka tampilkan:
"halo ksatria zacky, kamu dapat menyerang dengan senjatamu!"
Jika peran adalah "tabib", maka tampilkan:
"halo Tabib zacky , kamu akan membantu temanmu yang terluka"
Jika peran adalah "penyihir", maka tampilkan:
"halo Penyihir zacky , ciptakan keajaiban yang membantu kemenanganmu!"
 */

let nama = "zacky",
  peran = "penyihir";

if (nama == "") {
  console.log("nama wajib disi");
}
if (peran == "") {
  console.log("pilih peranmu untuk memulai game");
}
if (peran == "ksatria") {
  console.log(`halo ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
} else if (peran == "tabib") {
  console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
} else if (peran == "penyihir") {
  console.log(
    `halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`
  );
}

//code disini gunakan console.log untuk outputny
