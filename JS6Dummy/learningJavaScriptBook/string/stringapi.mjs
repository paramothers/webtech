export const stringIndex = () => {
  let yourFullName = "Paramasivam Kaliyamoorthi";
  let lastNameIndex = yourFullName.indexOf(" ");
  let lastName = yourFullName.substr(lastNameIndex + 1);
  console.log(lastName);
};

export const stringTrim = () => {
  let fullName = " Paramasivam Kaliyamoorthi";

  fullName = fullName.trim();

  let firstName = fullName.substr(0, fullName.indexOf(" "));
  let lastName = fullName.substr(fullName.indexOf(" ") + 1);
  console.log(firstName + "." + lastName.charAt(0));
};

export const replace = () => {
  let productName = "Office Tea Cup";
  let productDescription =
    "Office Tea Cup fgdfgdfgdfg d dfgd gdgd Office Tea Cup fggdf dfgdfgd";
  let search = /Office Tea Cup/g;
  let productDescription2 = productDescription.replace(search, "Home TEA cup");

  console.log(productDescription);
  console.log(productDescription2.includes("Home TEA cup"));
  console.log(productName.repeat(3));
};

export const newFunction = () => {
  console.log("hai parm");
};

export const printName = (firstName, secondName) => {

    console.log(`${firstName} .${secondName.charAt(0).toUpperCase()}`);    
}

export const calculateBalance = (principle, interest) => principle * interest

export const emptyString = () => {

  console.log(typeof "");
  
}

const addCall = (a,b) => a + b;

console.log(`Addiont of 1 ,3 are ${addCall(2,5)}`);


