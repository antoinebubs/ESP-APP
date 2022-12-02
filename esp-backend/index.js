const express = require("express");
const app = express();
const mongoose = require("mongoose")
const port = 8080;
const conn_str = 'mongodb+srv://antoinebubs:TBVAWYQ3IxxndXd2@cluster0.etvhkg0.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(
conn_str,
{ 
useNewUrlParser: true, 
useUnifiedTopology: true 
},(err) => {
if (err) {
console.log("error in connection");
} else {
console.log("mongodb is connected");
}});
//create a server object:
app.listen(port, () => {
console.log("starting the server");
}); 
//the server object listens on port 8080