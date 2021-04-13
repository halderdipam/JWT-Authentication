const { User } = require('../model')
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const userValidation = require('../validation/validate')



module.exports.signUp = async (req, res,next) => {
   
    const { error } = userValidation(req.body)

    if(error){
       return res.status(400).send(error.message)
    }

    let password = bcrypt.hashSync(req.body.password, Number.parseInt(10));


    await User.create({
        name: req.body.name,
        email: req.body.email,
        password: password
    }).then(User => {


        // let token = jwt.sign({ User: User }, 'dipam', {
        //     expiresIn: 24 * 60 * 60
        // });
      res.locals.user={id:User.id,name:User.name,email:User.email}
      next()
        // res.send({
        //     User: User,
        //     token: token
        // });

    }).catch(err => {
        res.status(500).send({ message: err.message });
    });

}



module.exports.signIn = async (req, res,next) => {

    let { email, password } = req.body;


    await User.findOne({
        where: {
            email: email
        }
    }).then(User => {

        if (!User) {
            res.status(404).json({ msg: 'User not registered' });
        } else {

            if (bcrypt.compareSync(password, User.password)) {

            
                // let token = jwt.sign({ User: User }, 'dipam', {
                //     expiresIn: 24 * 60 * 60
                // });
                res.locals.user={name:User.name,email:User.email}
                // res.send({
                //     User: User,
                //     token: token
                // })
                next()

            } else {

                // Unauthorized Access
                res.status(401).send({ msg: "Unauthorized Access" })
            }

        }

    }).catch(err => {
        res.status(500).send({ message: err.message });
    })

}

module.exports.signOut = async (req,res) => {
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err);
        res.sendStatus(200);
    });

}

module.exports.signInGet = async (req, res) => {
    await User.findAll({})
    .then( user  =>  res.status(200).send({user:user}))
    .catch(err =>  res.status(500).send({ message: err.message }))
    

}