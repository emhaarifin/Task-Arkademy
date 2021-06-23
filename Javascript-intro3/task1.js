const checkWeekDays = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            resolve(new Error('Test'))
            let check = dataDay.find((item) => {
                return item === day
            })
            if (check) {
                resolve(check)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}



//Ketika parameter yang diisi pada function cekHariKerja dinyatakan cocok
// Maka akan menjalankan .then untuk mendapatkan return dari function
// Jika tidak cocok, maka akan menjalankan .catch untuk mendapatkan error handling
checkWeekDays('minggu')
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
// console.log('Check 1');
// checkWeekDays('senin')
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// console.log('Check 2');


// // Untuk menggunakan try catch, function diharuskan bersifat async dan terdapat await untuk mendapat value dari function promise
// const checkDay = async () => {
//     // try digunakan untuk memerika code didalamnya
//     try {
//         const rabu = await checkWeekDays('rabu')
//         // jika sukses datanya akan diolah
//         console.log(rabu)
//         // jika gagal, akan dimasukkan ke dalam catch untuk menampil error dan code dibawahnya tidak akan diperiksa
//         await checkWeekDays('sabtu')
//         console.log('senin')
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// checkDay()