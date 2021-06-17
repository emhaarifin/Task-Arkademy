const num = 5;

if (typeof num === 'number' && num > 0) {
  for (let i = num; i >= 1; i--) {
    let spc = ''
    for (let j = 1; j <= i; j++){
      spc += j    
    }
    console.log(spc);
  }
} else {
  console.log('Coba input angka positif');
}