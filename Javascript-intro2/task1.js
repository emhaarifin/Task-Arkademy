// Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta contoh penggunaannya

// 1. For.. of digunakan untuk melakukan iterasi terhadap isi value dari array atau string
const names = ["Muhammad", "Arifin"]
for (const name of names) {
    console.log(name);
}

// const fullName = "Muhammad Arifin"
// for (const character of fullName) {
//     console.log(character)
// }

// 2. includes() digunakan untuk memeriksa spesifik string dalam variable dan mengembalikan true atau false
const ingredient = ['Gula', 'Air', 'Kopi']
const findIngredient = ingredient.includes('Gula')
console.log(findIngredient)

// 3. some() digunakan untuk memerika apakah beberapa elemen ada dalam array dan mengembalikan true atau false
const age = [20, 19, 18]
const filterAge = age.some((person) => person < 19)
console.log(filterAge);

// 4. filter() digunakan untuk membuat array baru dengan semua nilai yang lulus tes
const prices = [25, 30, 15, 55, 40, 10]
const filterPrice = prices.filter((price) => price > 25)
console.log(filterPrice)

// 5. find() digunakan mengembalikan nilai dari elemen pertama dalam array yang lulus tes
const number = [3, 10, 18, 20];
const checkNumber = number.find((num) => num > 5)
console.log(checkNumber);

// 6. indexOf() digunakan untuk mencari value yang ditentukan dari array, dan mengembalikan posisinya.
const fruits = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple", "Mango"];
const whereFruit = fruits.indexOf("Apple");
console.log(whereFruit)

// 7. Secara default, sort()fungsi mengurutkan nilai sebagai strings .
// Ini bekerja dengan baik untuk string ("Apple" datang sebelum "Banana").
const fruit = ["Banana", "Orange", "Apple", "Mango"]
console.log(fruit.sort());

// Namun, jika angka diurutkan sebagai string, "25" lebih besar dari "100", karena "2" lebih besar dari "1".
// Karena itu, sort()metode ini akan menghasilkan hasil yang salah saat mengurutkan angka.
const points = [25, 100, 50]
console.log(points.sort());

//untuk mengatasinya perlu melakukan komparasi
const pointFromSmall = points.sort((a, b) => a - b)
console.log(pointFromSmall);

const pointFromBig = points.sort((a, b) => b - a)
console.log(pointFromBig);

// 8. split() digunakan untuk memisahkan string menjadi array
const learning = "Saya belajar Javascript"
const learn = learning.split(" ")
console.log(learn);

// 9. toLowerCase() digunakan untuk mengubah semua karakter menjadi huruf kecil
const str = "Hello World!";
const res = str.toLowerCase();
console.log(res);

// 10. repeat() digunakan untuk mengulangi sebuah string
const string = 'Hello !'
console.log(string.repeat(3));


