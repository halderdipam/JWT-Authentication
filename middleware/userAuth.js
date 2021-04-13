const jwt = require('jsonwebtoken');

function verifyUserToken(req, res, next) {

    // check header or url parameters or post parameters for token
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null)
      return res.sendStatus(401);
    if (!token) 
      return res.status(403).send({ auth: false, message: 'No token provided.' });
  
    // verifies secret and checks exp
    jwt.verify(token, 'dipam', function(err, user) {      
      if (err) 
        return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });    

        
      req.user = user;
      next();
    });
  
  }

module.exports = verifyUserToken