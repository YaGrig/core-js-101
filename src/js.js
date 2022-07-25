// // // // function timeSpanToString(startDate, endDate) {
// // // //   const first = startDate.getTime();
// // // //   const second = endDate.getTime();
// // // //   console.log(startDate, first, endDate, second);
// // // //   const result = parseInt(Math.abs(second - first), 10);
// // // //   const hours = Math.floor((result / (1000 * 60 * 60)) % 24);
// // // //   const min = Math.abs((result / ((1000 * 60))) % 60);
// // // //   const seconds = Math.abs((result / ((1000))) % 60);
// // // //   // console.log('what', Math.floor(result / (1000 * 3600)));
// // // //   return `${hours}:${min}:${seconds}:${result}`;
// // // // }
// // // async function chainPromises(array, action) {
// // //   let ress = [];
// // //   const result = await new Promise((res, rej) => {
// // //     ress = array.map((item) => item.then((n) => n));
// // //     res(console.log(ress));
// // //   });
// // //   console.log(result);
// // //   return ress.reduce(action, 0);
// // // }
// // // const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
// // // const p = chainPromises(promises, (a, b) => a + b);
// // // console.log(p.then((res) => {
// // //   console.log(res); // => 6
// // // }));

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
//       }
//       return +item;
//     });
//   }
// }
function partialUsingArguments(func, ...args1) {
  return function curried(...args) {
    console.log(args, func.length, args.length + args1.length, func, args.length);
    if (args.length + args1.length >= func.length) {
      return func.apply(this, args1.concat(args));
    }

    return function continueCurrying(...args2) {
      console.log(args2);
      return curried.apply(this, args.concat(args2));
    };
  };
}
const fn = (x1, x2, x3, x4) => x1 + x2 + x3 + x4;
console.log(partialUsingArguments(fn, 'a')('b', 'c')('d'));

// function checkLuhn(cnn) {
//   const nDigits = cnn.length;
//   let sum = 0;
//   const parity = (nDigits - 2) % 2;
//   for (let i = 0; i < nDigits - 1; i++) {
//     let digit = Number(cnn[i]);
//     if (i % 2 === parity) { digit *= 2; }
//     if (digit > 9) { digit -= 9; }
//     sum += digit;
//   }
//   return (sum % 10 === 0);
// }
// console.log(checkLuhn(378734493671000));
