const { Schema, model } = require("mongoose");

const movieModel = new Schema(
  {
    title: {
        type: String,
        required: true
    }, 
    genre: {
        type: String,
        required: true
    },
    plot: {
        type: String,
    },
    cast: {
        type: Array,
        required: true
    }, 
  },
  
  {
    timestamps: true
  }
);

const Movie = model("Movie", movieModel);

module.exports = Movie;


