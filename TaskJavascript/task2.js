// Menghitung rata-rata UN berserta gradenya
const mtk = 110;
const bin = 100;
const bing = '';
const ipa = '';
let validate = [
  {name: 'Matematika', value: mtk},
  {name: "Bahasa Indonesia", value: bin},
  {name: 'Bahasa Indonesia', value: bing},
  {name: "IPA", value: ipa}
]

const emptyField = validate.find(field => field.value === '');
if(!emptyField) {
  let rata = (mtk + bin + bing + ipa) / validate.length
  console.log(`Rata-rata UN = ${rata}`)
  if(rata >= 90 && rata <= 100) {
    console.log('Grade = A');
  } else if (rata >= 80 && rata <= 89) {
    console.log('Grade = B');
  } else if (rata >= 70 && rata <= 79) {
    console.log('Grade = C');
  } else if (rata >= 60 && rata <= 69) {
    console.log('Grade = D');
  } else if (rata >= 0 && rata <= 59) {
    console.log('Grade = E');
  }
} else {
  console.log(`Kolom ${emptyField.name} wajib di isi`)
}