function testLet() {
  let a = 50;
  if (true) {
    let a = 40;
    console.log(a);
  }
  console.log(a);
}

for(var i = 0 ; i < 5; i ++){
  console.log(i);
}

console.log(i);
// testLet();


const colors = [];

colors.push('white');
colors.push('blue');
colors = 'cute';
console.log(colors);