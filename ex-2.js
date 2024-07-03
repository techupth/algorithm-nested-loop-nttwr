// เริ่มเขียนโค้ดตรงนี้
function printStar(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += "*" + "\t";
    }
    result += star + "\n";
  }
  return result;
}

//console.log(printStar(5));
