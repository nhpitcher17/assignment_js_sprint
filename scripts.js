// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){
    var largest;
    var i = 0;
    while (largest === undefined) {
    if (typeof arr[i] === 'number') {
      largest = arr[i];
    }
    i++;
    }
    for (var i = 1; i < arr.length; i++) {
      if (typeof arr[i] === 'number' && largest < arr[i]) {
        largest = arr[i];
      }
    }
    return largest;
  },

  reversed: function(str){
    return str.split("").reverse().join("");
  },

  loudSnakeCase: function(str){
    var wordsArray = str.split(" ");
    for (var i = 0; i < wordsArray.length; i++) {
      wordsArray[i] = wordsArray[i].replace(/[^0-9a-z]/gi, "");
    }
    wordsArray = wordsArray.filter(function(x) {
      return x.length > 0;
    });

    wordsArray = wordsArray.map(function(x) {
      return x[0].toUpperCase() + x.slice(1);
    });
    
    return wordsArray.join("_");
  },

  compareArrays: function(){
    // your code here (replace the return)
    return "Finish compareArrays first!"
  },

  fizzBuzz: function(){
    // your code here
  },

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
}
