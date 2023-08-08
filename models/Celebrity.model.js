//  Add your code here
const { Schema, model } = require("mongoose");

const celebrityModel = new Schema(
  {
    name: {
        type: String,
        required: true
    }, 
    occupation: {
        type: String,
        required: true
    },
    catchPhrase: {
        type: String,
        default: "This celebrity has no catch phrase"
    } 
  },
  {
    timestamps: true
  }
);

const Celebrity = model("Celebrity", celebrityModel);

module.exports = Celebrity;
