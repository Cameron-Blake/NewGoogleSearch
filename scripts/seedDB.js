const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/googlebooks',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

const bookSeed =
{
     authors: "James Patterson",
     description:
       "Leading the Resistance, Whit and Wisty face their most daunting challenge yet in the jaw-dropping sequel to Witch & Wizard. - Publisher",
     image: "",
     link: "https://www.google.com/books/edition/The_Gift/iCpj07vEEIcC?hl=en&gbpv=1",
     title: "The Gift"
}


db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });