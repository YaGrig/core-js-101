// // // function timeSpanToString(startDate, endDate) {
// // //   const first = startDate.getTime();
// // //   const second = endDate.getTime();
// // //   console.log(startDate, first, endDate, second);
// // //   const result = parseInt(Math.abs(second - first), 10);
// // //   const hours = Math.floor((result / (1000 * 60 * 60)) % 24);
// // //   const min = Math.abs((result / ((1000 * 60))) % 60);
// // //   const seconds = Math.abs((result / ((1000))) % 60);
// // //   // console.log('what', Math.floor(result / (1000 * 3600)));
// // //   return `${hours}:${min}:${seconds}:${result}`;
// // // }
// // async function chainPromises(array, action) {
// //   let ress = [];
// //   const result = await new Promise((res, rej) => {
// //     ress = array.map((item) => item.then((n) => n));
// //     res(console.log(ress));
// //   });
// //   console.log(result);
// //   return ress.reduce(action, 0);
// // }
// // const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
// // const p = chainPromises(promises, (a, b) => a + b);
// // console.log(p.then((res) => {
// //   console.log(res); // => 6
// // }));

// function isCreditCardNumber(ccn) {
//   const string = ccn.toString();
//   const lastdigit = string.substr(-1);
//   let digits = string.substring(0, string.length - 1).split('');
//   console.log(digits, digits.length);
//   if (digits.length % 2 === 0) {
//     digits = digits.map((item, index) => {
//       if (index % 2 !== 0) {
//         const itemA = (+item * 2).toString();
//         if (itemA.length === 2) {
//           return +itemA[0] + +itemA[1];
//         } if (itemA.length !== 2) { return +itemA; }
//       }
//       return +item;
//     });
//   } else {
//     digits = digits.map((item, index) => {
//       if (index % 2 === 0) {
//         const itemA = (+item * 2).toString();
//         if (itemA.length === 2) {
//           return +itemA[0] + +itemA[1];
//         } if (itemA.length !== 2) { return +itemA; }
// // // // // //       }
// // // // // //       return +item;
// // // // // //     });
// // // // // //   }
// // // // // // }
// // // // // // function getPolynom(...args) {
// // // // // //   switch (args.length) {
// // // // // //     case 1:
// // // // // //       return args[0];
// // // // // //     case 2:
// // // // // //       const [a, b] = args;
// // // // // //       return (x) => x * a - b;

// // // // // //     default:
// // // // // //       return null;
// // // // // //   }
// // // // // // }
// // // // // console.log(getPolynom(2,3,5))
// // // // // function getIdGeneratorFunction(startFrom) {
// // // // //   let count = 0;
// // // // //   return function sum (){
// // // // //     const result = startFrom + count
// // // // //     count++;
// // // // //     return result;
// // // // //   }
// // // // // };
// // // // const getId0 = getIdGeneratorFunction(0);
// // // // const getId4 = getIdGeneratorFunction(4);
// // // // const getId10 = getIdGeneratorFunction(10);
// // // // console.log(getId4(), getId4(), getId10(),getId0());

// // // function sortCitiesArray(arr) {
// // //   const array =  arr.sort((a, b) => {
// // //     const x = a.country; const y = b.country;
// // //     if (x < y) return -1;
// // //     if (x > y) return 1;
// // //     return 0;
// // //   }).map((item, index) => {
// // //     if(arr[index+1] && item.country === arr[index+1].country){
// // //       console.log('what');
// // //     }
// // //   })
// // // }

// // // console.log(sortCitiesArray([
// // //         { country: 'Russia',  city: 'Moscow' },
// // //         { country: 'Belarus', city: 'Minsk' },
// // //         { country: 'Poland',  city: 'Warsaw' },
// // //         { country: 'Russia',  city: 'Saint Petersburg' },
// // //         { country: 'Poland',  city: 'Krakow' },
// // //         { country: 'Belarus', city: 'Brest' }
// // //       ]))

// // function getIdentityMatrix(n) {
// //   const arr = Array(n).fill().map((item, index) => {
// //     const array = Array(n).fill(0);
// //     array[index] = n;
// //     return array;
// //   });
// //   return arr;
// // }
// // console.log(getIdentityMatrix(5));
// function getIntervalArray(start, end) {
//   return Array.apply(null, Array(end - start + 1)).map((i, j) => j + start);
// }
// console.log(getIntervalArray(1, 5));
