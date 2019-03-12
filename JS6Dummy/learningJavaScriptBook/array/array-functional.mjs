
export const someFunction = () => {

    let ageArray = [34,56,19,97,95,76];

    if(ageRatings.some(isForAdultsOnly))
    console.log(" verify your age ");
    console.log(ageArray.some(isAdult));
    console.log(ageRatings.find(isAdult));
    console.log(ageRatings.findIndex(isAdult));

    const localConstant = "paramasivam."
}

const ab = "bye";
export const secondFunction = () => {

    const as = " hai ";
    console.log(as);
    console.log(ab);    
    console.log(localConstant);    
}

const isAdult = (age) => { return age > 18 }

const AGE_OF_MAJORITY = 18;
let ageRatings = [6, 6, 6, 0, 12, 16, 0, 18, 6, 20, 6];
let isForAdultsOnly = ageRating => ageRating === AGE_OF_MAJORITY;

