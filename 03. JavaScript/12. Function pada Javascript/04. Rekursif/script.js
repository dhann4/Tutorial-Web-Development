// rekursif, adalah sebuah fungsi yang memanggil dirinya sendiri
// penggunaan rekursif juga harus berhati-hati, karena rekursif
// hampir sama dengan pengulangan yang dimana kita bisa terjebak
// di dalam pengulangan tanpa batas / infinity loop
// maka dari itu, rekursif harus berakhir dan menghasilkan nilai
// yang di sebut Base Case, yaitu kondisi
// akhir dari rekursif yang menghasilkan nilai

// contoh:
// function cetakAngka(n) {
// 	if( n === 0 ) {
// 		return;
// 	}
// 	console.log(n);
// 	cetakAngka(n-1);
// }
// cetakAngka(10)
// kodisi if itulah yang di sebut dengan Base Case

// contoh klasik atau yang biasa di gunakan dalam rekursif
// ini adalah faktorial
// 5! = 5 x 4 x 3 x 2 x 1
// function faktorial(n) {
// 	if( n === 0 ) return 1;
// 	return n * faktorial(n-1);
// }
// hasilnya adalah
// faktorial(5)
// 5 * faktorial(4)
// 5 * (4 * faktorial(3))
// 5 * (4 * (3 * faktorial(2)))
// 5 * (4 * (3 * (2 * faktorial(1))))
// 5 * (4 * (3 * (2 * 1)))
// 5 * (4 * (3 * 2))
// 5 * (4 * 6)
// 5 * 24
// 120

// semua looping bisa dibuat rekursif, tapi tidak sebaliknya.
// implementasi rekursif:
// -> menggantikan looping
// -> fibonacci
// -> pencarian dan penelusuran pada struktur data list dan tree
// -> digunakan untuk bahasa pemrograman yang tidak memiliki pengulangan
