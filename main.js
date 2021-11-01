// let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
// let shoppingCart = fruits;
// shoppingCart.push("Banana");

// what's in fruits?
// alert( fruits.length ); 

// let styles = ["Jazz", "Blues", ]

// styles.push("Rock-n-Roll")
// let index = Math.floor(styles.length/2);
// styles[index] = "Classsis";
// console.log("index: ",index)
// let firsst = styles.shift(0);
// console.log("first: ",firsst)
// styles.unshift("Rap","Reggae")
// console.log("styles: ",styles)


// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// })

// arr[2](); // ?

// function input(){
//     let arr=[]
    
//     while(true){
//         let value = prompt("nhap mot so bat ky:");
//         if(value === "" || value===null || !isFinite(value)) break;
//         arr.push(+value);
//     }
//     let sum=0;
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i] ;
//     }
//     return sum ;
// }
//     console.log("input:", input())
// let arr = [1, -2, 3, 4, -9, 6];

// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let partialSum = 0;
  
//     for (let item of arr) { // for each item of arr
//       partialSum += item; // add it to partialSum
//       maxSum = Math.max(maxSum, partialSum); // remember the maximum
//       if (partialSum < 0) partialSum = 0; // zero if negative
//     }
  
//     return maxSum;
//   }

//   alert( getMaxSubSum(arr) ); // 5


function camallie(str){
    return str.split("-")
    .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
    .join("")
}

console.log( "camallie:",camallie("-background-color"))




