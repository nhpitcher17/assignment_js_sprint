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

  reversed: function(){
    // your code here
  },

  loudSnakeCase: function(){
    // your code here
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
