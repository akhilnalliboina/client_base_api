const express= require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.json({message:'get clients is running'})
}
)

router.post('/',(req,res)=>{
    res.json({message:'post clients is running'})
}
)

router.put('/:id',(req,res)=>{
    res.json({message:'put clients is running'})
}
)

router.delete('/:id',(req,res)=>{
    res.json({message:'delete clients is running'})
}
)

module.exports=router