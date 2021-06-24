// function splitString(str) {
//     let resultArray = [];              
//     let tempString = '';               
//     let finalResult = "";
//     for(let i = 0; i < str.length;i++){ 
//         if(str[i] !== ' '){            
//           tempString += str[i];
//         } else if (tempString){
//            resultArray[resultArray.length] = tempString;
//            tempString = "";
//           }
//     }
//     if(tempString){                 
//        resultArray[resultArray.length] = tempString;    
//     }
//     for(let i = resultArray.length-1; i>= 0; i--) {
//         finalResult = finalResult + resultArray[i] + " ";
//     }
//     return finalResult;
// }

// console.log(splitString("Saya belajar javascript"));


function reverseWords(string) {
   let words = [];
   let currentWord = '';
   let stringLength = string.length + 1;

   for (var i = 0; i < stringLength; i++) {
      if (string[i] !== " " && i !== string.length) {
         currentWord += string[i];
      } else if (i === string.length) {
         words.unshift(currentWord);
      } else {
         words.unshift(currentWord);
         currentWord = '';
      }
   }
   return words.join(" ");
}

console.log(reverseWords('Saya belajar Javascript'))