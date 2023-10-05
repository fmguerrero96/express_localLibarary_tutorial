const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const genereSchema = new Schema({
    name: { type: String, required: true, minLength: 3, maxLength: 100 }
});

// Virtual for genere's URL
genereSchema.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/catalog/genere/${this._id}`;
  });

// Export model
module.exports = mongoose.model("Genere", genereSchema);
