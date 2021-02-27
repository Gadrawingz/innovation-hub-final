const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "innovation_hub",
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());


app.post("/api/insert", (req, res)=> {

    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const username = req.body.username;
    const telnumber = req.body.telnumber;
    const password = req.body.password;

    const sqlAdd =
      "INSERT INTO admins (firstname, lastname, username, email, password, telnumber,date_created) VALUES(?,?,?,?,?,?,?)";
    connection.query(sqlAdd, [firstname, lastname, username, email, password, telnumber, '2021-03-11'], (err, result) => {
        if(err) {
            console.log(err);
        } else {
            alert("A new record is added!");    
        }
        
    });
});



app.get('/admins', (res, req) => {
    connection.query("SELECT * FROM admins", (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


app.listen(4050, () => {
    console.log('App is running on port 4050');
});