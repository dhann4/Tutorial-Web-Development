// Scope adalah bagaimana sebuah variable dapat diakses dalam program
// dalam pemrograman ada dua buah scope.
// -> block scope
// -> function scope

// block scope
// digunakan oleh bahasa pemrogaraman C & Java
// contoh program dalam bahasa C
// int i = 2;
// if(i % 2 == 0) {
// 	bool genap = true;
// }
// if(genap) {
// 	printf("genap!");
// }
// maka hasilnya adalah error karena {} adalah block scope,
// jika kita lihat lagi
// if(i % 2 == 0) {
// 	bool genap = true;
// }
// kenapa terjadi error, ini gara-gara variable yang dibuat di dalam
// block scope {}, hanya berlaku di dalam block itu saja dan tidak
// bisa di gunakan di luar block nya

// jika kita masukkan programnya dalam bahasa javascript, maka
// var i = 2;
// if(i % 2 == 0) {
// 	var genap = true;
// }
// if(genap) {
// 	console.log('genap!');
// }
// maka hasilnya akan muncul karena javascript tidak menganut
// block scope dan javascript menganut function scope

// contoh pada javascript
// global scope / window scope
// var a = 1;
// artinya variable a tersebut bersifat global yang bisa digunakan
// dimanapun di dalam program kita

// contoh:
// function tes() {
// }
// test();
// artinya kita sudah membuka function scope, dan variable apapun
// yang kita buat di dalam function di atas, lalu variable-nya
// hanya berlaku di dalam function itu saja.

// contoh:
// function tes() {
// 	var b = 2;
// }
// test();
// console.log(b)
// jika begini yang tampil di console browser adalah error,
// karena b is not defined. itu terjadi karena console.log-nya
// kita taruh di luar function, itulah kenapa javascript termasuk
// bahasa yang menganut function scope.

// lalu jika begini, apa yang terjadi ?
// function tes() {
// 	var b = 2;
//  console.log(a)
// }
// test();
// tentu saja variable a akan muncul, karena kita tau bahwa
// variable a itu bersifat global, dan kita bisa akses di dalam
// function.
// jadi, jika di luar kita tidak bisa mengakses variable local
// tapi di dalam function kita dapat mengakses variable global.

// lalu ada juga yang dinamakan dengan name conflict, yaitu
// kita memiliki dua buah variable yang namanya sama
// tapi scope-nya berbeda
// contoh:
// var a = 1;
// function tes() {
// 	var a = 2;
// 	console.log(a)
// }
// test();
// console.log(a)
// maka yang tampil di console browser adalah,
// var global yang variable-nya
// adalah a memiliki nilai 1
// dan var local yang variable-nya
// adalah a memiliki nilai 2
// karena a di luar function berbeda dengan a yang ada di dalam
// function.

// kita bisa mengakses variable yang berada di luar function
// dengan cara kita menambahkan window.a di dalam console.log yang
// berada di dalam function
// contoh:
// var a = 1;
// function tes() {
// 	var a = 2;
// 	console.log(window.a)
// }
// test();
// artinya, yang kita maksud bukanlah variable local
// tapi variable window atau variable global

// jika seperti ini
// contoh:
// var a = 1;
// var a = 2;
// function tes() {
// 	var a = 2;
// 	console.log(a)
// }
// test();
// console.log(a)
// itu namanya menimpa variable a yang sebelumnya memiliki nilai 1
// kita timpa sekarang memiliki nilai 2

// ada lagi
// contoh:
// var a = 1;
// function tes() {
// 	a = 2;
// }
// test();
// console.log(a)
// sekarang var di dalam function kita hilangkan, dan kita tampilkan
// apa yang akan tampil, apakah 1 atau 2 ?
// jawabannya adalah 2,
// karena jika kita pakai var, itu akan mengacu ke variable global
// sedangkan jika tidak memakai var yang akan terjadi adalah
// pertama javascript akan mengecek, apakah di dalam function
// ada var nya?, lalu di cek lagi apakah di dalam function tersebut
// ada deklrasi variable a (var a;), jika ada maka akan di buat
// sebagai variable local, lalu jika tidak ada ?
// kalau tidak ada, maka function tersebut akan mengintip keluar
// ke variable globalnya, ada gak (a-nya)?
// ternyata ada si a-nya dan udah ada isinya yaitu angka satu,
// maka angka dua(di local) ini akan menimpa angka satu(global).
// sehingga hasilnya adalah dua.

// dan jika variable global-nya kita hapus, maka yang terjadi adalah
// pertama javascript akan mengecek, apakah di dalam function
// ada var nya?, lalu di cek lagi apakah di dalam function tersebut
// ada deklrasi variable a (var a;), jika ada maka akan di buat
// sebagai variable local, lalu jika tidak ada ?
// kalau tidak ada, maka function tersebut akan mengintip keluar
// ke variable globalnya, ada gak (a-nya)?
// ternyata gak ada si a-nya, maka javascript-nya
// secara otomatis akan membuat variable a di luar function
// maka, a yang berada di dalam function juga akan berubah menjadi
// variable global.

// nah perlu di perhatikan juga, jika kita membuat variable a
// di dalam function pastikan kita selalu menambahkan
// keyword var (var a = 1;)
// kenapa harus menambahkan keyword var?, karena jika kita tidak
// menuliskan keyword var, akan dibuat sebuah variable global.
// dengan melakukan itu maka istilah nya akan mengotori global
// scope-nya atau mengotori lingkup global nya sehingga sekarang
// secara tiba-tiba variable global-nya dibuat secara otomatis
// sedangkan tujuan kita hanya ingin membuat variable di dalam
// function saja.