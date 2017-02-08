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

  compareArrays: function(arr1, arr2){
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return arr1.length === arr2.length;
  },

  fizzBuzz: function(num){
    var fbArray = [];
    for (var i = 1; i <= num; i++) {
      var j = i - 1;
      if (i % 5 === 0 && i % 3 === 0) {
        fbArray[j] = "FIZZBUZZ";
      } else if (i % 5 === 0) {
        fbArray[j] = "BUZZ";
      } else if (i % 3 === 0) {
        fbArray[j] = "FIZZ";
      } else {
        fbArray[j] = i;
      }
    }
    return fbArray;
  },

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
}
