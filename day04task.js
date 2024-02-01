//1.Do the below programs in anonymous function & IIFE
//a)print odd numbers in an array
//anonymous function:
var temp=[]
function foo(arr){
   for(i=0;i<arr.length;i++){
       if(arr[i]%2==1)
       temp.push(arr[i])
   } 
   return(temp)
}
console.log(foo([1,2,3,4,5]))
//IIFE:
(function foo(arr){
    var temp=[]
   for(i=0;i<arr.length;i++){
       if(arr[i]%2==1)
       temp.push(arr[i])
   } 
   console.log(temp)
})([1,2,3,4,5])

//b)convert all the strings to title caps in a string array
//anonymous function:
function foo (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(foo("my name is john doe"))
//IIFE:
(function foo (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    console.log(str.join(' '));
})("my name is john doe")

//c)sum of all numbers in array
//anonymous function:
function foo (array){
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
        sum = sum + array[i];
    }
    return sum;
}
console.log(foo([1,2,3,4,5]))
//IIFE:
(function foo (array){
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
        sum = sum + array[i];
    }
    console.log(sum)
})([1,2,3,4,5])
//d)return all the prime numbers in array
//anonymous function:
function foo(numArray){
    numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0)
            return false;
        }
        return true;
        });
console.log(numArray);
}
console.log(foo([1,2,3,4,5]))
//IIFE:
(function foo(numArray){
    numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0)
            return false;
        }
        return true;
        });
console.log(numArray);
})([1,2,3,4,5])

//f)return median of two sorted arrays of the same size
//g)remove duplicates from an array
//anonymous function:
function foo (array){
    let dup = [...new Set(array)];
    return (dup);
}
console.log(foo([1,2,3,1,2,4,5]))
//IIFE:
(function foo (array){
    let dup = [...new Set(array)];
    console.log(dup);
})([1,2,3,1,2,4,5])
//h)rotate an array by k times
//anonymous function:
function foo(arr , k){
    k = k % arr.length;
    if(k < 0){
        k += arr.length;
    }
    reverse(arr, 0, arr.length - k - 1);
    reverse(arr, arr.length - k, arr.length - 1);
    reverse(arr, 0, arr.length - 1);
}
console.log(foo([1,2,3,4,5],2))
//IFFE:
(function foo(arr , k){
    k = k % arr.length;
    if(k < 0){
        k += arr.length;
    }
    reverse(arr, 0, arr.length - k - 1);
    reverse(arr, arr.length - k, arr.length - 1);
    reverse(arr, 0, arr.length - 1);
})([1,2,3,4,5],2)

//2.Do the programs in arrow function
//a)print odd numbers in array
oddNumbers = (array) => {
    for(var i = 0 ; i< array.length ; i++){
        if(array[i]%2!=0){
            console.log(array[i])
        }
    }
}
//b)Convert all the strings to title caps in a string array
titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }   
//c)Sum of all numbers in an array
sum = (array)=>{
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return sum;
          }
//d)Return all the prime numbers in an array
primeNumber = (numArray) => {
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
}   
