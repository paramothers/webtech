console.log("Inside of notes");
// console.log(module);

module.exports.age = 23;

module.exports.addNote = () => {
    console.log(`from addNote method`);
    return 'new note';
}

module.exports.add = (note) =>{
    console.log(`Note has added ${note}`);
}