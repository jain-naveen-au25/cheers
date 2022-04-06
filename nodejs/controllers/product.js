exports.getData=(req,res)=>{
    res.send('router is working properly')
}
exports.post=(req,res)=>{
    data=req.body
    if (!data){
        res.json({
            success:false,
            data:"data not found"
        })

    }
    else{
        res.json({
            success:true,
            data:data
        })
    }
}
