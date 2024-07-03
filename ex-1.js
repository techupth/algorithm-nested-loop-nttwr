// เริ่มเขียนโค้ดตรงนี้
function printPattern(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    let nums = "";
    for (let j = 1; j <= i; j++) {
      nums += j + "\t";
    }
    result += nums + "\n";
  }
  return result;
}

//console.log(printPattern(3));
