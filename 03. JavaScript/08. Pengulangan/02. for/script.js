// syntax untuk for yaitu


// for(var nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++) {
// 	console.log('Hello World ' + nilaiAwal + 'x');
// }

// penggabungan while dan for loop

var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

while(noAngkot <= angkotBeroperasi) {
	
	console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');

noAngkot++;	
}

for(noAngkot; noAngkot <= jmlAngkot; noAngkot++) {

	console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');

}