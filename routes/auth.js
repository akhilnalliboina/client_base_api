const express= require('express')
const router = express.Router()


// @route      GET api/auth
// @desc       Get logged in user
// access      private
router.get('/',(req,res)=>{
    res.json({message:'get auth is running'})
}
)

// @route      POST api/auth
// @desc       Auth user and get token
// access      public
router.post('/',(req,res)=>{
    res.json({message:'post auth is running'})
}
)

module.exports=router