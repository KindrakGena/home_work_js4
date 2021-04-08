// 1) створити функцію яка приймає масив та виводить його

// let array = arrNum=> {
//     console.log(arrNum);
// }
// array([22,48,true,'ira',458,369,false,'kolya']);


// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

// function functionRun(length, max, min) {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.floor(Math.random()*(max-min)+min));
//     }
// return array;
// }
//
//
// let numRun = functionRun(20, 30, 1);
// console.log(numRun);
// array(numRun);

// 3) створити функцію яка приймає три числа та виводить найменьше.

// function numMin(num1, num2, num3) {
//     if (num1 < num2 && num1 < num3) {
//         return num1;
//     } else if (num2 < num1 && num2 < num3) {
//         return num2;
//     } else {
//         return num3;
//     }
// }
//
// let minNumber = numMin(+prompt('one'), +prompt('two'), +prompt('three'));
// console.log(minNumber);

// 4) створити функцію яка приймає три числа та виводить найбільше.

// function numMax(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         return num1;
//     } else if (num2 > num1 && num2 > num3) {
//         return num2;
//     } else {
//         return num3;
//     }
// }
//
// let maxNumber = numMax(+prompt('one'), +prompt('two'), +prompt('three'));
// console.log(maxNumber);

// 5) створити функцію яка повертає найбільше число з масиву
// let arrNum = (arr) => {
//      let a = 0;
//      for (let i = 0; i < arr.length; i++) {
//          if (a < arr[i]) {
//              a = arr[i];
//
//          }
//
//      }
// return a
//  }
//
//  let maxNum = arrNum([22, 65, 148, 4, 68, 82, 34, 31]);
//  console.log(maxNum);


//6) створити функцію яка повертає найменьше число з масиву


// let minimum= (array) => {
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (min > array[i]) {
//             min = array[i]
//           }
//     }
//     return min;
// }
// let numMin = minimum([22, 65, 148, 4, 68, 82, 34, 31]);
// console.log(numMin);


// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// function sum(arr) {
//     let sumator = 0;
//     for (let arrElement of arr) {
//         sumator += arrElement;
//     }
// return sumator
// }
//
// let sumNum = sum([22, 65, 148, 4, 68, 82, 34, 31]);
// console.log(sumNum);

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

//
//  function sum(arr) {
//      let sumator = 0;
//      for (let arrElement of arr) {
//          sumator += arrElement;
//      }
//      return sumator / arr.length
//  }
//
//  let sumNum = sum([22, 65, 148, 4, 68, 82, 34, 31]);
//  console.log(sumNum);

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//
// let userObject = [
//      {
//          "id": 1,
//          "name": "Leanne Graham",
//          "username": "Bret",
//          "email": "Sincere@april.biz",
//      },
//      {
//          "id": 2,
//          "name": "Ervin Howell",
//          "username": "Antonette",
//          "email": "Shanna@melissa.tv",
//      },
//      {
//          "id": 3,
//          "name": "Clementine Bauch",
//          "username": "Samantha",
//          "email": "Nathan@yesenia.net",
//      },
//      {
//          "id": 4,
//          "name": "Patricia Lebsack",
//          "username": "Karianne",
//          "email": "Julianne.OConner@kory.org",
//      }
//  ];
//
//
//
//    function objectValue (userObject) {
//        let keyObj =[];
//        for (let i = 0; i < userObject.length; i++) {
//            for (let key in userObject[i]) {
//                keyObj.push(key)
//            }
//        }
//        return keyObj
//    }
//
//    let arrayValue = objectValue (userObject);
//    console.log(arrayValue);


//ворити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

// let userObject = [
//     {
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//     },
//     {
//         "id": 2,
//         "name": "Ervin Howell",
//         "username": "Antonette",
//         "email": "Shanna@melissa.tv",
//     },
//     {
//         "id": 3,
//         "name": "Clementine Bauch",
//         "username": "Samantha",
//         "email": "Nathan@yesenia.net",
//     },
//     {
//         "id": 4,
//         "name": "Patricia Lebsack",
//         "username": "Karianne",
//         "email": "Julianne.OConner@kory.org",
//     }
// ];
//
//
//
//   function objectValue (userObject) {
//       let keyObj =[];
//       for (let i = 0; i < userObject.length; i++) {
//           for (let key in userObject[i]) {
//               keyObj.push(userObject[i][key])
//           }
//       }
//       return keyObj
//   }
//
//   let arrayValue = objectValue (userObject);
//   console.log(arrayValue);


//11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// let array1 = [1,2,3,4];
// let array2 = [2,3,4,5];
//
// function sumArr(array1, array2) {
//     let sum =[];
//     for (let i = 0; i < array2.length; i++) {
//        sum.push(array1[i] + array2[i])
//
//     }
//     return sum;
// }
//
// let arraySum = sumArr (array1 , array2);
// console.log(arraySum);

// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let minMax = (array) => {
//     let min = array[0];
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i];
//         } else if (array[i] > max) {
//             max = array[i];
//         }
//     }
//     console.log(min);
//     return max;
// }
// let numMax = minMax([22, 65, 148, 4, 68, 82, 34, 31, -20, -5]);
// console.log(numMax);
//
//
// Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let array1 = [9, 8, 0, 4];
//
// function changeElmArr(arr, index) {
//     let array = [...arr];
//     if (index < array.length - 1) {
//         let temp = array[index];
//         array[index] = array[index + 1];
//         array[index + 1] = temp;
//     }
//     return array;
// }
//
// let change= changeElmArr(array1, 1);
// console.log(array1);
// console.log(change);

//Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let arrayZero1 = [1, 0, 6, 0, 3];
// let arrayZero2 = [0, 1, 2, 3, 4];
// let arrayZero3 = [0, 0, 1, 0];
//
// let zero = (arr) => {
//     let newArr = [...arr];
//     for (let i = newArr.length - 1; i >= 0; i--) {
//         if (newArr[i] === 0) {
//             newArr.splice(i, 1);
//             newArr.push(0)
//         }
//
//     }
//     return newArr;
// }
//
// let changeZero = zero(arrayZero2);
// console.log(changeZero);


// Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
//
// function normalize(n1) {
//     let name1 = n1.trim().split(' ')
//
//         let nameNorm = name1[i] + ' ' + name1[name1.length - 1];
// console.log(nameNorm);
//
//
//
//     return nameNorm
// }
//
// let normalizeStr = normalize(n1);
// console.log(normalizeStr);