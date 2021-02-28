// cara penulisan untuk alert adalah
// alert('kata yang ingin di munculkan dalam popup');

// lalu kita juga bisa menuliskan banyak alert contoh nya
// alert('Hello World');
// alert('nama');
// alert('saya');
// alert('user');



// cara penulisan prompt adalah
// prompt('masukkan nama');
// agar tulisan yang user masukkan dapat di akses atau di tampilkan
// kita memasukkan prompt nya ke dalam sebuah variable
// var nama = prompt('Masukkan nama');
// alert(nama);


// dan terakhir adalah confirm yang di gunakan untuk meminta konfirmasi dari user
// cara penulisannya adalah
// confirm('Kamu yakin?');

// var tes = confirm('kamu yakin??');
// if( tes === true ) {
// 	alert('user menekan tombol OK!');


// } else {
// 	alert('user menekan tombol cancel');

// };



// lalu bisa di gunakan sebagai pengulangan
alert('Selamat Datang..');
var lagi = true;

while( lagi ) {
	var nama = prompt('masukkan nama');
	alert('halo ' + nama);

	lagi = confirm('coba lagi ?');
}

alert('Terima Kasih..');
