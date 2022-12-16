const express = require("express");
const app = express();
const mongoose = require("mongoose")
const port = 8080;
const conn_str = 'mongodb+srv://antoinebubs:TBVAWYQ3IxxndXd2@cluster0.etvhkg0.mongodb.net/?retryWrites=true&w=majority'
const router = require('./routes')

mongoose.connect(
    conn_str,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.log("error in connection");
        } else {
            console.log("mongodb is connected");
        }
    });
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    if (req.method === 'OPTIONS') {
        // Just ignore theses requests, gain some cpu time
        return res.status(200).send();
    }
    return next();
});

app.use('/api/users', router.userRoutes)
//create a server object:


app.listen(port, () => {
    console.log("starting the server");
});

//the server object listens on port 8080
