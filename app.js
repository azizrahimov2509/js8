// uyga vazifa 
/*1. isEmpty() nomli funksiya yozing. Unga Object berib yuborganimda ichida propertylari bo’lsa false, hech qanday propertysi bo’lmasa true qaytarsin. a. Yordam: Object.keys*/

// let object = {
//     Ali: 120,
//     Olya: 123,
//     Anya: 124,
// }

// function isEmpty(obj){
//     if(Object.keys(obj).length){
//         return false
//        }else{
//         return true
//        }
// }

// console.log(isEmpty(object));

// 2-kisqartirilgan usul

// function isEmpty(obj){
//     return Object.keys(obj).length === 0;
// }
// console.log(isEmpty(object));
////////////////////////////////////////////////////////////////////////////////////////////////////////



/* 2. Quyida berilgan Object dagi shaxslar daromadlarini jamini xisoblab chiqaruvchi funksiya yozing. Funksiya PURE (toza) bo’lishi shart! 
let salaries = { John: 100, Ann: 160, Pete: 130 }*/

// let object = {
//     Ann:300,
//     Alice:400,
//     JOhn:500
// }

// function wages(obj){
//         let count = 0 
//         for(let key in obj){
//           count+=obj[key];
//         }
//         return count;
// }

// console.log(wages("Total salary is ", object));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*3. Obyekt propertylarini 2ga ko’paytiradigan funksiya yozing. Funksiya PURE (toza) bo’lishi shart! 
a. Yordam: typeof // funksiyani chaqirishdan avval let menu = { width: 200, height: 300, title: "My menu" }; multiplyNumeric(menu); // chaqirishdan keyin menu = { width: 400, height: 600, title: "My menu" }; */

// let menu = {
//     width: 300,
//     height: 500,
//     title: "My menu",
// };

// function multiplyNumeric(obj) {
//     let newObj = {};
//     for (let key in obj) {
//         newObj[key] = typeof obj[key] === "number" ? obj[key]*=2 : obj[key];
//     }
//     return newObj;
// }

// console.log(multiplyNumeric(menu));



/* 4. let arr = [5,2,1,-10,8]; ifodasini teskari tartibda sortlang*/

// let arr = [5,2,1,-10,8];
// console.log("Bu tug'ri tartibda sortlangan ", arr.sort());
// console.log("Bu esa teskari tartibda sortlangan ",arr.sort((a,b)=>b-a));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 5.inputNumber() funksiyasini yozing, kiritilgan input, raqam bo’lmagan qiymat bo’lguncha prompt orqali input so’rasin. Va kiritilgan raqamlarni bitta arrayga push qilib borsin. Qachonki raqam emas qiymat kirtilsa prompt ishdan to’xtab yig’ilgan raqamlar Arrayini ret*/

// function inputNumber(){
//     let arr = [];
//    do{
//     let number = +prompt("Raqam kiriting: ");
//     if(isNaN(number)){
//         break;
//     }
//     arr.push(number)
//    }while(true);
//    return arr;
// }

// console.log(inputNumber());
