const mongoose = require('mongoose');
const moment =  require("moment");
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({

    first_name: { type: String, required: true, max: 100 },
    family_name: { type: String, required: true, max: 100 },
    birth_date: { type: Date },
    death_date: { type: Date }
});

AuthorSchema.virtual('name').get(function(){ return this.first_name+", "+this.family_name});
AuthorSchema.virtual('url').get(function() {return '/catalog/author/'+this._id});
AuthorSchema.virtual('formatedBirthDate').get(function(){ return this.birth_date ? moment(this.birth_date).format('YYYY-MM-DD'):''});

AuthorSchema.methods.speak = function(){
    console.log('Authoer is speaking');
}

module.exports = mongoose.model('Author', AuthorSchema);