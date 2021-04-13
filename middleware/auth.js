// const { User } = require('../model')

// let auth =async (req,res,next)=>{
//     let token = req.headers['authorization'];
//     await User.findByToken(token,(err,user)=>{
//         if(err) throw err;
//         if(!user) return res.json({
//             error :true
//         });

//         req.token= token;
//         req.user=user;
//         next();

//     })
// }

// module.exports={auth};