const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({

    first_name: { type: String, required: true, max: 100 },
    family_name: { type: String, required: true, max: 100 },
    birth_date: { type: Date },
    death_date: { type: Date }
});

AuthorSchema.virtual('name').get(()=> { return this.first_name+", "+this.family_name});
AuthorSchema.virtual('url').get(() => {return '/catalog/author/'+this._id});

module.exports = mongoose.model('Author', AuthorSchema);