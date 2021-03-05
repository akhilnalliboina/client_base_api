const express= require('express')
const router = express.Router()

// @route      POST api/users
// @desc       create User
// access      public
router.post('/',(req,res)=>{
    res.json({message:'post users is running'})
}
)

module.exports=router