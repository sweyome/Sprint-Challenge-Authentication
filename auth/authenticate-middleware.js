const bcrypt = require('bcryptjs');

const Users = require('../jokes/jokes-model.js');

/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const secrets = require('../config/secrets.js');
const jwt = require('jsonwebtoken');


require('dotenv').config()
module.exports = (req, res, next) => {


  if(req.headers.authorization.token){
    try{
      let decoded = jwt.verify(req.headers.token, secrets.jwtSecret);
      console.log(decoded)
      next();
    }catch (err){
      res.status(401).json({message: 'Invalid Token'})
    }

  }else{
    res.status(401).json({message: 'Missing Token'});
 
  }
};


