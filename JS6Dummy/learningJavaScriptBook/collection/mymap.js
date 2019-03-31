const m = new Map();
m.set('first',1);
console.log(m.get('first'));

console.log(m.has('first'));

m.set('foo',1)
m.set('foo',2)
m.set('bar',3)

console.log(m.size);
m.clear();
console.log(m.size);

const map2 = new Map([
    [1,'one'],
    [2,'two'],
    [3,'three'],
]);

const m3 = new Map().set(1, 'one').set(2, 'two').set(3, 'three')
console.log(m3.size);
console.log(map2.size);

for(const k of m3.keys()){
  console.log(m3.get(k));
}
console.log('----');
for(const v of m3.values()) {
    console.log(v);
}
console.log('----');
for(const entry of m3.entries()) {

    console.log(entry[0], entry[1]);    
}
console.log('----');

for(const [ka, va] of m3.entries()){

    console.log(ka, va); 
}
m3.delete(1)
console.log('----');

for(const [ka, va] of m3){

    console.log(ka, va); 
}

const m4 = [...m3.keys()];
const m5 = [...m3]

console.log(m4);
console.log(m5);