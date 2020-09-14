const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');


require('dotenv').config();


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());


// SIMPLE NODEMAILER EXAMPLE
// https://nodemailer.com/about/



// ROUTES
app.post("/api/forma", (req, res, next)=>{
    // WE CAN GET DATA FROM POSTMAN OR REACTJS 
    let data = req.body;
    console.log(data);


    // https://nodemailer.com/smtp/#2-pooled-connections
    let smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        // port: 456,

        // auth is the authentication object
        // type indicates the authetication type, defaults to ‘login’, other option is ‘oauth2’
        // user is the username 
        // pass is the password for the user if normal login is used
        auth:{
            user: data.email,
            pass: process.env.PASSWORD
        }
    });



    let mailOptions = {
        from : data.email,
        // https://myaccount.google.com/lesssecureapps?pli=1
        to: 'mdshayon0@gmail.com',
        subject: `Message from ${data.firstName} ${data.lastName}`,
        html: `
            <h3>informations</h3>
            <ul>
                <li>First Name ${data.firstName}</li>
                <li>Last Name ${data.lastName}</li>
                <li>Email ${data.email}</li>
            </ul>

            <br/>
            <br/>
            <br/>

            <h3>Message</h3>
            <p>${data.message}</p>

        `
    };


    smtpTransport.sendMail(mailOptions, (error, response)=>{
        if(error){
            console.log("Error", error);
            res.send(error);
        }else{
            console.log("Email sent");
            res.send("Success");
        }
    });


    smtpTransport.close();
})


const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>console.log("server is running on port 3001"));

