// เริ่มเขียนโค้ดตรงนี้
function multiplicationTable(input) {
  let result = "";
  for (let i = 1; i <= input; i++) {
    let eachRow = "";
    for (let j = 1; j <= input; j++) {
      let eachNum = i * j;
      eachRow += eachNum + "\t";
    }
    result += eachRow + "\n";
  }
  return result;
}
console.log(multiplicationTable(5));
