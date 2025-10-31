//prinnt 1 to N number

// let n =5;
// for(let i =0; i<=n; i++){
//     console.log(i)
// }

//  print n to 1
// let n =10;
// for (let i=0; i<n; i++){
//     console.log(n-i)
// }

//print all even number
// let n = 10;
// for (let i = 0; i < n/2; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

//sum of all natural number
// const n = 5;
// let sum = 0;

//  sum = n*(n+1)/2
// console.log(sum)

//factorail of N number
// let n =5;
// let fact =1;
// for(let i=1; i<=n; i++){
//     fact *= i
// }

// console.log(fact)

//sum of all even numberr
// let n = 10;
// //2+4+6+8+10 =30
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// Print all numbers divisible by 3 and 5 up to N

// let n = 30;
// for (let i = 0; i < n; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i);
//   }
// }
// Find the sum of all odd numbers up to N

// let n = 10;
// let square = 1;
// for (let i = 0; i < n; i++) {
//   square=Math.pow(i,3)
// }
// console.log(square);

let n = 100;

for (let i = 1; i * i <= n; i++) {
  let square = i * i;
  if (square % 2 === 0) {
    console.log(square);
  }
}
