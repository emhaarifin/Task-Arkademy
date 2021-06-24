function cekPalindrom(value) {
    for (let i = 0; i < value.length / 2; i++) {
        if (value.charAt(i) != value.charAt(value.length - i - 1)) {
            return "Bukan Palindrom";
        }
    }
    return "Palindrom";
}

console.log(cekPalindrom("siang"));
console.log(cekPalindrom("malam"));

