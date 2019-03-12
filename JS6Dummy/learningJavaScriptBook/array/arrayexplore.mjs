export const userName = ["a", "b", "c"];

export const myArray = () => {
  console.log("size of userNAme ", userName.length);
  userName.map(a => console.log(a));
  userName.push("you");
  console.log("size of userNAme ", userName.length);
  userName.map(a => console.log(a));
  console.log(userName.pop());
  userName.map(a => console.log(a));
  userName.splice(1, 0, "Paramasivam");
  userName.splice(0, 1, "Applice");
  userName.map(a => console.log(a));
  console.log("spliced element ", userName.splice(1, 1));
};

export const myArrayFunctions = () => {
  let studentNames = ["p", "a", "f", "b", "h", "r"];

  console.log(studentNames);
  // console.log(studentNames.sort());
  console.log(studentNames.join("\n"));

  console.log(studentNames.indexOf("param"));

  console.log("param.".split(""));
  console.log(studentNames.reverse());

  console.log(
    "param"
      .split("")
      .reverse()
      .join("")
  );
};

export const arrayReferenceFunction = () => {
  let alpha = ["a", "b"];
  console.log(alpha);

  alpha.push("c", "d", "e");
  console.log(alpha);

  alpha.unshift("d");
  console.log(alpha);

  alpha.shift();
  console.log(alpha);

  let beta = alpha.slice(2, 3);
  console.log(beta);

  alpha.splice(2, 2, "param");
  console.log(alpha);

  alpha.fill("&");
  console.log(alpha);

  console.log([16, 10, 2, 12, 1].sort((a, b) => a - b));
};

const chatParticipant = ["aa", "bbAdmin", "cc", "ddAdmin"];
const isAdmin = name => {
  return name.endsWith("Admin");
};

const compareParticipants = (a, b) => {
  if (isAdmin(a)) return -1;
  if (isAdmin(b)) return 1;
  return a > b;
};

export const sortingParticipants = () => {
  console.log(chatParticipant.sort(compareParticipants).join("\n"));
};

const employePassword = name =>
  name
    .split("")
    .reverse()
    .join("") + name.length;

export const generatePassword = () => {
  let employees = [
    "Adelgunde",
    "Heribert",
    "Mechthild",
    "Friedlinde",
    "Tusnelda",
    "Oswine"
  ];

  let passwords = employees.map(employePassword);
  console.log(passwords);
};

const productsList = ["aaaa", "bbbb", "cccc", "aaaa", "cccc", "dddd"];

const filterByLetter = (letter, productsList) => {
  return productsList.filter(product => product.startsWith(letter));
};

const filterSample = letter => {
  let filtered = filterByLetter(letter, productsList);
  console.log(letter);
  console.log("----------");
  console.log(filtered.join("\n"));
  console.log("\n");
};

export const forEveryLetter = () => {
  "abcd".split("").forEach(letter => filterSample(letter));
};

export const reduceExplore = () => {
  let marks = [23, 56, 7, 87, 87];
  console.log(marks.reduce(myadd));
};

const myadd = (a, b) => a + b;
