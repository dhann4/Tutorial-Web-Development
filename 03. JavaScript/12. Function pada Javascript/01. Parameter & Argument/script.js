// parameter adalah
// variable yang ditulis di dalam kurumh pada saat function di
// buat, digunakan untuk menampung nilai yang di kirimkan saat
// function di panggil.
// argument adalah
// nilai yang dikirimkan ke parameter saat fungsi dipanggil.
// contoh
// function tambah(a, b) {
// 	return a + b;
// }
// var coba = tambah(5, 10)
// di bagian tambah(a, b) di dalam kurung nya ada a dan b,
// itu disebut parameter.
// sedangkan di bagian tambah(5, 10) di dalam kurung nya ada
// angka 5 dan 10, itu di sebut dengan argument.
// contoh sederhana
function tambah(a, b) {
	return a + b;
}
// cara 1
// var a = parseInt(prompt('Masukkan Nilai'));
// var b = parseInt(prompt('Masukkan Nilai'));
// var hasil = tambah(a, b);
// alert('hasil dari : ' + a + ' + ' + b + ' = ' + hasil);

// cara 2
// dengan menggunakan function lagi
// function kali(a, b) {
// 	return a * b;
// }
// var hasil = kali(tambah(1, 2), tambah(3, 4));
// alert(hasil)
// artinya adalah, sebelum masuk ke fungsi kali
// jalankan dulu fungsi tambah yaitu
// tambah(1, 2) dan tambah(3, 4)
// 1+2 = 3, 3+4 = 7
// lalu setelah itu fungsi kali di jalankan dengan mengkalikan
// hasil dari fungsi tambah yaitu, 3 * 7 = 21

// lalu bagaimana jika parameter dan argument-nya tidak sesuai?
// misalnya jika parameter-nya ada tiga, sedangkan argument-nya
// ada dua atau sebaliknya.
// maka yang terjadi adalah:
// -> jika parameter lebih sedikit dari argument,
//    maka argument kelebihannya akan di abaikan
// contoh
// function tambah(a, b) {
// 		return a + b;
// }
// var coba = tambah(5, 10, 20);
// yang terjadi adalah nilai 20 akan di abaikan.

// lalu jika parameter lebih banyak dari argument,
// maka parameter kelebihannya akan diisi dengan nilai undefined
// contoh
// function tambah(a, b, c) {
// 	return a + b;
// }
// var coba = tambah(5, 10);
// maka nilai dari parameter c adalah undefined
// sebenarnya untuk pemahaman dari parameter dan argument cukup
// sampai di sini saja. Tapi khusus untuk Javascript ada lagi
// yang namanya arguments, yaitu array yang berisi nilai yang
// dikirimkan saat fungsi dipanggil

// contoh
// tambah(5, 10, 20, "hi", false);
// semua itu di tampung di dalam arguments / semi-function yang
// artinya fungsi tersebut ada tapi tidak terlihat
// lalu arguments nya bagaimana?
// arguments = [5, 10, 20, "hi", false];
// contoh untuk arguments, yaitu adanya tanda [], semua itu
// bisa di bilang sebagai indexs

// contoh sederhana
// function tambah() {
// 	var hasil = 0;
// 	for( var i = 0; i < arguments.length; i++ ) {
// 		hasil += arguments[i];
// 	}
// 	return hasil;
// }
// var coba = tambah(1,2,3);
// alert(hasil)