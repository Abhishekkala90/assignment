const express=require('express');
let app=express();
let router=express.Router();

router.get("/",(req,res,next)=>{
    res.write("This API is working");
    res.end();
});
app.use(router);
app.listen(8083,()=>{
    console.log("server is up and running");
});