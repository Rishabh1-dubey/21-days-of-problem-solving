// let a =100;
// let b=20;
// let c =5

// if(a>b){
//     console.log(a)
// }else if(b>c){
//     console.log(b)
// }else{
//     console.log(c)
// }


//check number is positibve or negetive or zero
//  function number(num){
//     if(num>0){
//         return "number is postive"
//     }else if(num<0) {
//         return "number is negetive"
//     }
//     return "Zero"

//  }
//  console.log(number(-6))

// Calculate Electricity Bill
// Input: Units = 230

// Output: Total Bill = ₹1500

// ✨ Applies multiple ranges using chained else if and cumulative logic.

// Example Logic:

// 0–100 units → ₹5 per unit
// 101–200 units → ₹7 per unit
// 201–300 units → ₹10 per unit
// Above 300 units → ₹12 per unit
// 🔍 Teaches: cumulative calculation + condition chaining.

function countBill(num){
    if(num<100) return num * 5
    else if(101<num<200) return num *7
    else if(201<num<300) return num *10
    else{
        return num*12
    }
}
console.log(countBill(200))