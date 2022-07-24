var express = require("express");
var router = express.Router();

const credential = {
    email: "nafiz@email.com",
    password: "nafiz1234"
}


//login
router.post('/login', (req, res) => {
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email;
        res.end("Login Successful");
        //res.redirect('/dashboard');
    }else{
        res.end("Invalid email or password")
    }
});

module.exports = router;