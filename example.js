'use strict';
const NPS = require('./sync');

// new NPS([
//   7,7,10,9,10,9,1,7,10,9,10,9,1,7,
//   10,9,10,9,1,7,10,9,10,9,7,7,10,
//   9,10,9,1,7,10,9,10,9,1,7,10,9,
//   10,9,1,7,10,9,10,9,7,7,10,9,10,
//   9,1,7,10,9,10,9,1,7,10,9,10,9,
//   1,7,10,9,10,9]).then((data)=>{
//   console.log(data);
// });
//
// var t = new NPS([0,5,9,9]).then((data)=>{
//   console.log(data);
// });
//
// var tt = new NPS([0,5,9,9]).then((datas)=>{
//   console.log(datas);
// });
//
// // var tt = new NPS(["lol",5,9,9]).then((datas)=>{
// //   console.log(datas);
// // }).catch((error)=>{
// //   console.log(error);
// // });
//
// t.then((data)=>{
//   console.log(data);
// });

var t = new NPS([9,9,10,6,8,9,9,10,6,8,9,9,10,6,8,9,9,10,6,8,9,9,10,6,8,9,9,10,6,8,9,9,10,6,8,9,9,10,6,8,9,9,10,6,8]);
var tt = new NPS([1,9,10]);
console.log(t.data);
console.log(tt.data);
