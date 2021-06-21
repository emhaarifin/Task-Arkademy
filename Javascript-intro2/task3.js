// Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan nilaiAkhir (number), serta dataArray (array). 
// Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan jumlah data dalam dataArray harus lebih dari 5.
// Fungsi tersebut akan mencari data didalam dataArray yang memiliki nilai diantara nilaiAwal dan nilaiAkhir, 
// mengurutkan hasil pencarian dan menampilkannya ke layar/console.

const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    const smallToBig = dataArray.filter(data => data > nilaiAwal && data < nilaiAkhir)
    if (nilaiAwal < nilaiAkhir && dataArray.length > 5) {
        console.log(smallToBig.sort((a, b) => a - b))
    } else if (nilaiAwal > nilaiAkhir) {
        console.log('Nilai akhir harus lebih besar dari nilai awal')
    } else {
        console.log('Jumlah angka dalam dataArray tidak ada');
    }
}
// Contoh: 
seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])
// Output:
// [8, 14, 17]

seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8])
// Output:
// “Nilai akhir harus lebih besar dari nilai awal”

seleksiNilai(5, 17, [2, 25, , 4])
// Output:
// “Jumlah angka dalam dataArray tidak ada”
