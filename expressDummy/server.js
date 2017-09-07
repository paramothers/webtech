let express =  require("express");
let app = express();

app.get("/",(req,res)=>{
    res.end("Hello World 23");
});


app.get("/abc*cd", (req, res)=>{
    
    res.send(" get requst for abced");
});


let server = app.listen(8081,()=>{
    console.log("listending https://%s:%s", server.address().address, server.address().port);
});