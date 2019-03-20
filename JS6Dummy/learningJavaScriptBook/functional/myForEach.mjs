const forEach = (myArray, fn) => {
  for (const el of myArray) {
    fn(el);
  }
};

const myMap = (myArray, fn) => {
  // const result = new Array(myArray.length);
  const result = [];
  for (const el of myArray) {
    result.push(fn(el));
  }
  return result;
};

const myFilter = (myArray, fn) => {
  const result = [];
  for (const el of myArray) {
    fn(el) ? result.push(el) : undefined;
  }
  return result;
};

const myConcatAll = (myArray, fn) => {

    let result = [];
    for(const value of myArray){
        result.push.apply(result,value);
    }

    return result;
}

const myReduce  = (myArray, fn) =>{

    let accumulator = 0;
    for(const value of myArray)
       accumulator = fn(accumulator, value);
    return accumulator;
}

const demoMyMap = () => {
  let result = myMap([1, 2, 3, 4], el => el * el);
  console.log(result);
};

const demoMyForEach = () => {
  let result = forEach([1, 2, 3, 4], el => el * el);
  console.log(result);
};

let apressBooks = [
  {
    id: 111,
    title: "C# 6.0",
    author: "ANDREW TROELSEN",
    rating: [4.7],
    reviews: [{ good: 4, excellent: 12 }]
  },
  {
    id: 222,
    title: "Efficient Learning Machines",
    author: "Rahul Khanna",
    rating: [4.5],
    reviews: []
  },
  {
    id: 333,
    title: "Pro AngularJS",
    author: "Adam Freeman",
    rating: [4.0],
    reviews: []
  },
  {
    id: 444,
    title: "Pro ASP.NET",
    author: "Adam Freeman",
    rating: [4.2],
    reviews: [{ good: 14, excellent: 12 }]
  }
];

let apressBooks2 = [
  {
    name: "beginners",
    bookDetails: [
      {
        id: 111,
        title: "C# 6.0",
        author: "ANDREW TROELSEN",
        rating: [4.7],
        reviews: [{ good: 4, excellent: 12 }]
      },
      {
        id: 222,
        title: "Efficient Learning Machines",
        author: "Rahul Khanna",
        rating: [4.5],
        reviews: []
      }
    ]
  },
  {
    name: "pro",
    bookDetails: [
      {
        id: 333,
        title: "Pro AngularJS",
        author: "Adam Freeman",
        rating: [4.0],
        reviews: []
      },
      {
        id: 444,
        title: "Pro ASP.NET",
        author: "Adam Freeman",
        rating: [4.2],
        reviews: [{ good: 14, excellent: 12 }]
      }
    ]
  }
];

const myBookFilter = book => book.rating[0] > 4.2;
const myBookDetailsFilter = book => book.bookDetails;
const bookObjectDetstruction = book => {
  return {
    title: book.title,
    author: book.author
  };
};

const doMyObjectDeStructiong = () => {

  let bookDetailResult = myMap(apressBooks2, myBookDetailsFilter);
  let concatedArray = myConcatAll(bookDetailResult);
  let filteredBookDetails = myFilter(concatedArray, myBookFilter);
  let result = myMap(filteredBookDetails, bookObjectDetstruction);

  console.dir(result);

  //   let result2 = myMap(apressBooks, ({ title, author }) => {
  //     return {
  //       title,
  //       author
  //     };
  //   });

  //   console.dir(result2);
};

const myFilterDemo = () => {
  return myFilter([1, 2, 3, 4], value => value < 2);
};

const typeofDemo = () => {
  console.log(typeof null);
  console.log(typeof []);
  console.log(typeof {});
  console.log(typeof undefined);
};

const myReduceDemo = () => {

    let restult = myReduce([1, 2, 3, 4], (acc, value) => acc + value)
    console.log(restult);    
}

const arrayUtils = {
  map: myMap,
  forEach: forEach,
  demoMyForEach: demoMyForEach,
  demoMyMap: demoMyMap,
  doMyObjectDeStructiong: doMyObjectDeStructiong,
  myFilterDemo: myFilterDemo,
  typeofDemo: typeofDemo,
  myReduceDemo: myReduceDemo
};

export { arrayUtils };
