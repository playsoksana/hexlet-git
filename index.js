//https://www.codewars.com/kata/5314b3c6bb244a48ab00076c/train/javascript
// function luckCheck(ticket) {

//     const index = Math.floor(ticket.length / 2);
//       if(ticket.toUpperCase()!==ticket || ticket.toLowerCase()!==ticket) {
//         console.log(ticket);
//        throw new Error('')
//     }
//       if(Number(ticket)===0) {
//         console.log(ticket);
//        throw new Error('')
//     }
//     const resultSum = (str) => [...str].reduce((acc, el) => Number(acc) + Number(el));
//     console.log(ticket);
//     return resultSum(ticket.slice(0, index)) === resultSum(ticket.slice(ticket.length - index, ticket.length + 1))
// }

// console.log(luckCheck('xcvcxvcx'));



//https://www.codewars.com/kata/55983863da40caa2c900004e


//     function findNumber(arr, memo=[], results=[]) {
//         let cur;
//         for (var i = 0; i < arr.length; i++) {
//           cur = arr.splice(i, 1);
//           if (arr.length === 0)  results.push(memo.concat(cur));
//           findNumber(arr.slice(), memo.concat(cur), results);
//           arr.splice(i, 0, cur[0]);
//         }
//         return results;
//     }


// https://www.codewars.com/kata/529adbf7533b761c560004e5/train/javascript

function generateDiagonal(n, l, i = 0, d = [], r = [[1]]) {
  while (r.length < l + n + 1) {
    if (r.length > n) {
      d.push(r[r.length - 1][i]);
      i++
    }
    r.push(r[r.length - 1].reduce((acc, el, i, arr) => {
      acc.push(el + (arr[i + 1] ? arr[i + 1] : 0));
      return acc;
    }, [1]))
  }
  return (d.slice(0, l + 1))
}

console.log(generateDiagonal(3, 7));

// !!!!!!
// https://www.codewars.com/kata/576b072359b1161a7b000a17/solutions/javascript