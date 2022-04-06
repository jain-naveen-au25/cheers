let express=require('express')
let {getData,postData}=require('./routes/product')

let app = express()
app.use(express.json())
app.use('/api/',getData)
app.use('/api/',postData)
app.listen(3000,()=>{
    console.log('app is running')
})
