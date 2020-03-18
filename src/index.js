module.exports = function toReadable (number) {
    function Nr(n, flag) {
        if (n == 0 && flag) return "zero";
        if (n == 0) return "";
        if (n == 1) return "one";
        if (n == 2) return "two";
        if (n == 3) return "three";
        if (n == 4) return "four"; 
        if (n == 5) return "five";
        if (n == 6) return "six";
        if (n == 7) return "seven";
        if (n == 8) return "eight"; 
        if (n == 9) return "nine"; 
        if (n == 10) return "ten";
        if (n == 11) return "eleven";
        if (n == 12) return "twelve"; 
        if (n == 13) return "thirteen";
        if (n == 14) return "fourteen";
        if (n == 15) return "fifteen";
        if (n == 16) return "sixteen";
        if (n == 17) return "seventeen";
        if (n == 18) return "eighteen";
        if (n == 19) return "nineteen";
        if (n <= 29) return "twenty " + Nr(n%10);
        if (n <= 39) return "thirty " + Nr(n%10); 
        if (n <= 49) return "forty " + Nr(n%10);
        if (n <= 59) return "fifty " + Nr(n%10);
        if (n <= 69) return "sixty " + Nr(n%10);
        if (n <= 79) return "seventy " + Nr(n%10);
        if (n <= 89) return "eighty "  + Nr(n%10);
        if (n <= 99) return "ninety " + Nr(n%10);
        return "";
      }
      let array = String(number).split("").map(element => Number(element));
      let EndText = ""; 
      if (array.length == 3) {
        EndText += Nr(array[0]);
        EndText += " hundred";
        EndText += " " + Nr(Number(String(array[1]) + String(array[2])))
      }
      else 
        if (array.length == 2) {
          EndText += Nr(Number(String(array[0]) + String(array[1])));
        }
        else EndText += Nr(array[0], true);
      return EndText.trim();
    }
    

