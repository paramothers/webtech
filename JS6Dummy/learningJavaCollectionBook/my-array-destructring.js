let myArray = ["a", "b", "c"];
class MyArrayDestructure {  

  demoArrayDestrutor() {

    let [one, two, three] = myArray;
    console.log(one);
    console.log(two);
    console.log(three);
  }

  demoSkipDestrutor() {

    let [a1, , a2] = myArray;
    console.log(a1);
    console.log(a2);
  }

  demoRestElement() {
      
    let [first, ...others] = myArray;
    console.log(first);
    console.log(others);
  }
}

let myarr = new MyArrayDestructure();
myarr.demoArrayDestrutor();
myarr.demoSkipDestrutor();
myarr.demoRestElement();
