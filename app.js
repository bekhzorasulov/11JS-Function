// HIGH ORDER FUNCTIONS

//  1 misol
// const students = [
//     { name: "Quincy", percent: 96 },
//     { name: "Jason", percent: 84 },
//     { name: "Alexis", percent: 100 },
//     { name: "Sam", percent: 65 },
//     { name: "Katie", percent: 90 },
//     { name: "Anna", percent: 75 },
// ];

// function getNamesByGrade(students, grade) {
//     return students
//         .map((student) => {
//             if (student.percent > 60 && student.percent < 70) {
//                 return {...student, grade: 3 };
//             } else if (student.percent >= 70 && student.percent < 85) {
//                 return {...student, grade: 4 };
//             } else {
//                 return {...student, grad: 5 };
//             }
//         })
//         .filter((student) => student.grade == grade)
//         .map((student) => student.name);
// }
// const result = getNamesByGrade(students, 5);
// console.log(result);

// 2 misol
// const animals = [
//     "dog",
//     "chicken",
//     "cat",
//     "dog",
//     "chicken",
//     "chicken",
//     "rabbit",
// ];
// const result = animals.reduce((acc, curVal) => {
//     if (acc[curVal]) {
//         acc[curVal]++;
//     } else {
//         acc[curVal] = 1;
//     }
//     return acc;
// }, {});
// console.log(result);

// 3 misol
// const num = [1, 2, 3, 4, 5];
// const result = num.map((num) => num ** 2);
// console.log(result);

// 4 misol
// const num = [1, -4, 12, 0, -3, 29, -150];
// const result = num
//     .filter((num) => num > 0)
//     .reduce((acc, curVal) => {
//         return acc + curVal;
//     }, 0);
// console.log(result);

// 5 misol
// const getWords = "George Raymond Richard Martin";
// const result = getWords
//     .split(" ")
//     .map((item) => item[0])
//     .join("");
// console.log(result);

// 6 misol
// const students = [
//     { name: "John", age: 13 },
//     { name: "Mark", age: 56 },
//     { name: "Rachel", age: 45 },
//     { name: "Nate", age: 67 },
//     { name: "Jeniffer", age: 65 },
// ];
// const result = students.sort((a, b) => a.age - b.age);
// console.log(result.at(-1).age - result[0].age);

// 7 misol
// const num = [12, 45, 85, 13, 19, 28];
// const toq = num.filter((el) => el % 2 == 1);
// const juft = num.filter((el) => el % 2 == 0);
// console.log(toq, juft);

// 8 misol
// const elements = [12, 5, 46, 59, 46, 78, 12, 95, 32, 64, 78];

// function reDubl(elements) {
//     return elements.reduce((acc, curVal) => {
//         if (!acc.includes(curVal)) {
//             acc.push(curVal);
//         }
//         return acc;
//     }, []);
// }
// console.log(reDubl(elements));

// 9 misol
// let products = [{
//         id: 6,
//         name: "Smarthpone",
//         price: 12000,
//         rating: 4.5,
//         discount: 20,
//     },
//     {
//         id: 2,
//         name: "Acer",
//         price: 10000,
//         rating: 4.3,
//         discount: 10,
//     },
//     {
//         id: 1,
//         name: "Mac book",
//         price: 17000,
//         rating: 4.7,
//         discount: 40,
//     },
//     {
//         id: 4,
//         name: "HP",
//         price: 21000,
//         rating: 4.1,
//         discount: 30,
//     },
//     {
//         id: 5,
//         name: "Dell",
//         price: 35000,
//         rating: 4.9,
//         discount: 30,
//     },
// ];
// let result = products.sort((a, b) => a.id - b.id);
// console.log(result);

// let result = products.sort((a, b) => a.price - b.price);
// console.log(result);

// let result = products.sort((a, b) => a.rating - b.rating);
// console.log(result);

// let result = products.sort((a, b) => a.discount - b.discount);
// console.log(result);

// let result = products.sort((a, b) => a.name.localeCompare(b.name));
// console.log(result);

// 10 misol
// let result = products.sort((a, b) => b.rating - a.rating)[0];
// console.log(result);

// 11 misol
// let result = products.sort((a, s) => a.price - s.price)[0];
// console.log(result);

// 12 misol
// let result = products.reduce((acc, curVal) => {
//     return acc + curVal.price;
// }, 0);
// console.log(result);

// 13 misol
// let result = products.map((product) => product.name);
// console.log(result);

// 14 misol
// let result = products.find((product) => (product.id = 5)).name;
// console.log(result);

// 15 misol
// let result = products.filter((product) => product.id !== 4);
// console.log(result);

// 16 misol
// function isWords(text) {
//     return text.split(" ").every((word) => word);
// }
// let result1 = isWords("JavaScript");
// let result2 = isWords("JavaScript123");
// console.log(result1);
// console.log(result2);

// 17 misol
// const text = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];

// function getTruthyFalsy(text) {
//     return {
//         truthy: text.filter(Boolean),
//         falsy: text.filter((item) => !item),
//     };
// }
// console.log(getTruthyFalsy(text));

// 18 misol
// let text = "Men Abdulaziz Programmerman";
// let result = text.split(" ").map((el) => el.length);
// console.log(result);

// 19 misol