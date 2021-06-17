let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

//ubah data dengan spread operator
const updateData = {
    ...data,
    name: "Muhammad Arifin",
    email: "101muhammadarifin@gmail.com",
    hobby: ["Membaca", "Karawitan"]
};
console.log(updateData);

// Ambilah data “street dan city” tersebut menggunakan destructuring
const {address: {street: jalan}, address: {city}} = data;
console.log(`${jalan}\n${city}`);
