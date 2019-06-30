export default (text = "Param...Padhu World Default") =>{

    console.log("Hi param");
    const elem = document.createElement("div");
    elem.innerHTML = text;
     return elem;
};