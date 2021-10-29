
/*
Complete the code for the squareList function using any combination of map(), filter(), and reduce().
 The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) 
 when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].*/

const squareList = arr => {
    // Only change code below this line
    let posarr = arr.filter(num => (parseInt(num, 10) === num) && num > 0);
    //using .filter to remove non-integers by parsing integer and comparing number to itself and testing gt 0    
    arr  = posarr.map(x => x * x);
    //using new array using the map methord to square the remaining elements
    return arr;
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
  console.log(squaredIntegers);
  
  
  // [16, 1764, 36]

  // another solution 

  const squareList = (arr) => {// Only change code below this line
    return arr
            .filter(num => num > 0 && num % parseInt(num) === 0)
            .map(num => Math.pow(num, 2));
    
  };