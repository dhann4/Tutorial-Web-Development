// while(true) {
// 	console.log('hello');
// }
// atau
// while(false) {
// 	console.log('hello');
// }
// jangan pernah lakukan looping seperti itu, karena akan menyebabkan infinite loop / looping forever (pengulangan tanpa batas)
// cara mengatasi nya adalah

// menghentikan dengan aksi yang di lakukan user
// var ulang = true;
// while(ulang) {
// 	console.log('hello');
// 	ulang = confirm('lagi?');
// }
// saat user menekan tombol ok, maka pengulangan akan terjadi
// dan jika user menekan tombol cancel, maka pengulangan akan terhenti

// menghentikan dengan program itu sendiri
// var nilaiAwal = 1;
// while(nilaiAwal <= 5) {
// 	console.log('Hello ' + nilaiAwal + 'x');
// nilaiAwal++;
// }