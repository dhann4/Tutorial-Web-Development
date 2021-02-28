// pengelolaan penumpang
// 1. penumpang naik
//    -> tambahPenumpang()
// 2. penumpang turun
//    -> hapusPenumpang()


// -> tambahPenumpang()
//    -> namaPenumpang
//    -> array penumpang

// rules:
// -> jika angkot kosong, penumpang naik
//    duduk di kursi pertama
// -> penumpang berikutnya duduk di kursi
//    selanjutnya secara berurutan
// -> jika ada kursi kosong(karena penumpang
//    turun), penumpang yang naik berikutnya
//    duduk di kursi kosong terlebih dahulu
// -> asumsi kursi tidak akan penuh dan
//    akan bertambah terus jika ada
//    penumpang naik
// -> nama penumpang tidak boleh sama, untuk
//    menghindari kebingungan ketika nanti
//    penumpang turun


// -> hapusPenumpang()
//    -> namaPenumpang
//    -> array penumpang

// rules:
// -> jika angkot kosong, tampilkan pesan bahwa
//    amgkot kosong
// -> jika ada penumpang yang namanya sesuai, hapus
//    nama penumpang pada array dengan memberi nilai
//    undefined
// -> jika tidak ada penumpang yang namanya sesuai,
//    tampilkan pesan kesahalahnya


var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
   // jika angot kosong
   if( penumpang.length == 0 ) {
      // tambah penumpang di awal array
      penumpang.push(namaPenumpang);
      // kembalikan isi array & keluar dari function
      return penumpang;
   } else {
      // telusuri seluruh kursi dari awal
      for( var i = 0; i < penumpang.length; i++ ) {
         // jika ada kursi kosong
         if( penumpang[i] == undefined ) {
            // tambah penumpang di kursi tersebut
            penumpang[i] = namaPenumpang;
            // kembalikan isi array & keluar dari
            // function
            return penumpang;
         }
         // jika sudah ada nama yang sama
         else if( penumpang[i] == namaPenumpang ) {
            // tampilkan pesan kesalahannya
            alert(namaPenumpang + ' Sudah ada di dalam angkot');
            // kembalikan isi array & keluar dari function
            return penumpang;
         }
         else if( i == penumpang.length - 1 ) {
            // tambah penumpang di akhir array
            penumpang.push(namaPenumpang);
            // kembalikan isi array & keluar dari function
            return penumpang;
         }
      }
   }
}

var hapusPenumpang = function(namaPenumpang, penumpang) {
   if( penumpang.length == 0 ) {
      alert('angkot masih kosong.');
      return penumpang;
   } else {
      for( var i = 0; i < penumpang.length; i++ ) {
         if( penumpang[i] == namaPenumpang ) {
            penumpang[i] = undefined;
            return penumpang;
         } else if( i == penumpang.length - 1 ) {
            alert(namaPenumpang + ' tidak ada di dalam angkot!');
            return penumpang;
         }
      }
   }
}

// pengelolaan Angkot