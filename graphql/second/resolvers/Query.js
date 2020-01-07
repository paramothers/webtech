const { ObjectID } = require("mongodb");

module.exports = {
  totalPhotos: (parent, args, { db }) =>
    db.collection("photos").estimatedDocumentCount(),
  allPhotos: (parent, args, { db }) =>
    db
      .collection("photos")
      .find()
      .toArray(),

  photo: (parent, args, { db }) =>
    db.collection("photos").findOne({ _id: ObjectID(args.id) }),

  totalUsers: (parent, args, { db }) =>
    db.collection("users").estimatedDocumentCount(),

  allUsers: (parent, args, { db }) =>
    db
      .collection("users")
      .find()
      .toArray(),
  User: (parent, args, { db }) =>
    db.collection("users").findOne({ githubLogin: args.login })
};
