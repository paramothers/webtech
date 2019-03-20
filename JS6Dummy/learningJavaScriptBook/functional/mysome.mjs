const mySomeFunction = (myArray, targetFunction) => {

    let atLeastOneKid = false;
    myArray.forEach( (element) => {

        atLeastOneKid = atLeastOneKid || targetFunction(element);
    });

    return atLeastOneKid;
}

const isAtleastUnderAge = (age) => age < 18

export const callMySomeFunction = () => {

    let age = [17,45,64,67,87];
    let result = mySomeFunction(age, isAtleastUnderAge);
    console.log("at least one Kid ", result);
    
}