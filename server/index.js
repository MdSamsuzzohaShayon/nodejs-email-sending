const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());



// ROUTES
app.get('/', (req, res, next)=>{
    res.send("elcome to my froma");
});
app.post("/api/forma", (req, res, next)=>{
    let data = req.body;
    console.log(data);


    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 456,
        auth:{
            user: 'mdshayon@hotmail.com',
            pass: 'Shayon1234'
        }
    });



    let mailOptions = {
        from : data.email,
        to: 'mdshayon0@gmail.com',
        subject: `Message from ${data.name}`,
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
            res.send(error);
        }else{
            res.send("success");
        }
    });


    smtpTransport.close();
})


app.listen(3001, ()=>console.log("server is running on port 3001"));

