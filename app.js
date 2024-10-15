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