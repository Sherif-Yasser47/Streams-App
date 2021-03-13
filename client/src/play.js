const findTheLongest = (str) => {
   let strArr =  str.split(" ")
   let maxLength = 0;
   for (let i = 0; i < strArr.length; i++) {
      if (strArr[i].length > maxLength) {
          maxLength = strArr[i].length
      }
   }
   return maxLength;
}