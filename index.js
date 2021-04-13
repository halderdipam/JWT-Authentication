const express = require('express');
const app = express()
const dbsequlize = require('./db/sequelize')
const db = require('./db');
const userRouter = require('./routes/userRoutes')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(function(req, res, next) {
//     res.set(
//         {'Content-Type': 'text/plain'}
  
//     );
//     next();
// })

    

// app.use(function(req, res, next) {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "x-access-token, Origin, Content-Type, Accept"
//     );
//     next();
//   })

// const userCtrl = require('./controller/userController')

app.get('/', (req,res)=>{
res.send({data:'Hello Dipam'})
})
app.use(userRouter)

// app.post('/api/signup', userCtrl.signUp);
// app.post('/api/signin', userCtrl.signIn);



const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listing on port ${port}..`))

