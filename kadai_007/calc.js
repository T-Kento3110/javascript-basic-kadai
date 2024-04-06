let num = 15;

console.log(num);

// 3の倍数、5の倍数、3と5の倍数、それ以外、でそれぞれ結果を出力する
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
}
else if (num % 3 === 0) {
  console.log('3の倍数です');
}
else if (num % 5 === 0) {
  console.log('5の倍数です');
} 
else {
  console.log(num);
}
