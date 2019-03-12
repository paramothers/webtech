export const simpleObject = () => {

    console.dir(userDetail);

    console.log(userDetail.age);
    console.log(userDetail['name']);
    userDetail.address = "Porpathintha Nallur";

    // console.log(JSON.stringify(userDetail));

    // console.log(Object.keys(userDetail));

    // console.log(Object.values(userDetail));
    console.log(Object.entries(userDetail));
    
    
    
}

const userDetail = {

    age: 23,
    name: 'paramasiam',
    qualification: 'B.E',
    vichele: ["cycle", "car", "bike"]
}



