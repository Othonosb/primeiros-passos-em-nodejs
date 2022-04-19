//const { Person } = require("./person");
const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/connect");


dotenv.config();

connectToDatabase();


//require('./modules/http.js');
// require("./modules/path");
//require("./modules/fs");
//require("./modules/express");

//const person = new Person("Othon Botelho");










