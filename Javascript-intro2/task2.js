//Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan  callback function dengan data sebagai berikut:
const names = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope']

// Contoh:
// searchName(“an”, 3, callback)
// Output: 
// [“Alexandra”,”Amanda”,”Angela”]


function searchName(keywoard, limit, callback) {
    //ubah keyword menjadi lowercase supaya menghiraukan case sensitif
    keywoard = keywoard.toLowerCase();
    //menggunakan method filter untuk mengetahui nama yang menggandung huruf tertentu dan menghiraukan case sensitif
    let filterName = names.filter(name => name.toLowerCase().indexOf(keywoard) !== -1)
    filterName.length = limit
    callback(filterName);
}

function callback(filterName) {
    //menghapus nilai kosong dari arrray
    let emptyName = filterName.filter(nama => nama != null);
    if (emptyName.length == 0) {
        console.log('nama tidak ada')
    } else {
        console.log(emptyName)
    }
}

searchName('an', 3, callback)

