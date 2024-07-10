const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;




async function main() {
  await mongoose.connect( 'mongodb+srv://manojbajpeyi804:DD5bonc579IVehlS@cluster11.bazacqa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster11');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  app.get('/', (req,res) => {
    res.send('Hello World!');
})
}
main().then(()=>console.log("MongoDB Connected Succesfully")).catch(err => console.log(err));

app.listen(port);