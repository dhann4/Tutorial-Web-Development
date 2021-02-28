// manipulasi array
// 1. menambah isi array
// var arr = [];
// arr[0] = "nama";
// arr[1] = 1;
// arr[2] = true;
// console.log(arr);

// 2. menghapus isi array
// var arr = ['nama','user','hewan']
// arr[1] = undefined;
// console.log(arr);var arr = ['nama','user','hewan']
// arr[1] = undefined;
// console.log(arr);

// 3. menampilkan isi array
// console.log(arr);var arr = ['nama','user', 'hewan']
// for(var i = 0; i < arr; i++ ) {
//    console.log('no ke-'+ i + ':' + arr[i]);
// }



// array method
// -> length
// -> join
// -> push, pop, shift, unshift
// -> slice, splice
// -> forEach, map
// -> sort
// -> filter, find

// 1.length
// console.log(arr);var arr = ['nama','user', 'hewan']
// for(var i = 0; i < arr.length; i++ ) {
//    console.log('no ke-'+ i + ':' + arr[i]);
// }

// 2. join
// var arr = ['nama', 'user', 'hewan'];
// console.log(arr.join());

// 3. push & pop
// digunakan untuk menambah atau menghapus elemen
// terakhir dalam array

// push digunakan untuk menambah elemen
// terakhir dalam array
// var arr = ['nama', 'user', 'hewan'];
// arr.push('boomm!!');
// console.log(arr.join());

// pop digunakan untuk menghapus elemen 
// terakhir dalam array
// var arr = ['nama', 'user', 'hewan'];
// arr.pop();
// console.log(arr.join());

// 4. unshift & shift
// sama persis seperti push & pop,
// tapi unshift & shift digunakan untuk elemen pertama

// unshift
// var arr = ['nama', 'user', 'hewan'];
// arr.unshift('boom!!!');
// console.log(arr.join());

// shift
// var arr = ['nama', 'user', 'hewan'];
// arr.shift();
// console.log(arr.join());

// 5. slice & splice
// digunakan untuk menambah atau menghapus elemen
// di tengah dalam array

// splice
// rumus untuk splice
// splice(indexAwal, mauDihapusBerapa,
//       elemenBaru1, elemenBaru2,...);
// var arr = ['nama', 'user', 'hewan'];
// arr.splice(1, 2, 'doddy','fitri');
// console.log(arr.join());

// slice
// rumus untuk slice
// slice(indexAwal, indexAkhir);
// perlu diperhatikan juga, untuk slice index awal
// akan terbawa pada index yang baru, sedangkan
// index akhir tidak akan terbawa
// var arr = ['nama', 'user', 'hewan', 'doddy','fitri'];
// var arr2 = arr.slice(1,3);
// console.log(arr.join());
// console.log(arr2.join());

// 6. forEach & map
// forEach
// var nama = ['nama','user','doddy']
// angka.forEach(function(e, i) {
//    console.log('nama ke-' + i + 'adalah' + e);
// });

// map
// var angka = [1,2,3,4,5]
// var angka2 = angka.map(function(e) {
//    return e * 2;
// });
// console.log(angka2.join(' - '));

// 7. sort
// untuk penggunaan sort harus di perhatikan
// yang akan di urutkan adalah angka pertamanya
// misal kita punya 1,2,10,20
// dalam sort yang akan di urutkan adalah
// 1,10,2,20
// jika ingin mengurutkan dengan sesuai maka
// kita harus menambahkan function
// var angka = [1,2,5,10,20,3,6,8,4,7]
// console.log(angka.join(' - '));
// angka.sort();
// angka.sort(function(a, b) {
//    return a-b;
// });
// console.log(angka.join(' - '));

// 8. filter & find
// digunakan untuk mencari elemen pada array
// untuk find, hanya mengembalikan 1 nilai dan tidak
// menghasilkan array
// sedangkan filter, bisa mengembalikan banyak nilai
// dan bisa menghasilkan array

// filter
// var angka = [1,2,5,10,20,3,6,8,4,7]
// var angka2 = angka.filter(function(x) {
//    return x == 5;
   // kita juga bisa mencari angka yang lebih besar
   // atau lebih kecil
   // return x > 5
   // return x < 5
// });
// console.log(angka2.join(' - '))

// find
// var angka = [1,2,5,10,20,3,6,8,4,7]
// var angka2 = angka.find(function(x) {
//    return x == 5;
   // untuk find jika kita suruh mencari angka lebih
   // besar dari 5 maka yang akan di tampilkan adalah
   // nilai yang pertama kali di temukannya
   // contoh 6
// });
// console.log(angka2)