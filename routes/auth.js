const express= require('express')
const router = express.Router()

router.post('/',(req,res)=>{
    res.json({message:'post auth is running'})
}
)

module.exports=router