let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let cookieParser = require("cookie-parser");
let multer = require("multer");
let fs = require("fs");

let user = {
    "user4":{
        "name":"user name 4",
        "age": 23,
        "weight": 78,
        "id":4
    }
}

// let urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (req, res) => {
    res.end("Hello World 23");
});


app.get("/abc*cd", (req, res) => {

    res.send(" get requst for abced");
});

// Use of Middle ware
//express.static module used to server static contents
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/home/ubuntu/webtech/expressDummy/uploadedfile' }).single('file'));
app.use(cookieParser());


app.get("/index.html", (request, response) => {

    response.sendFile(__dirname + "/" + "index.html");
});

app.get("/processGet", (request, response) => {

    let reply = {
        firstName: request.query.userName,
        age: request.query.userAge,
    };

    console.log(reply);

    response.end(JSON.stringify(reply));

});


app.post("/processPOST", (request, response) => {

    console.log("cokkie " + request.cookies);

    let reply = {

        userName: request.body.userName,
        age: request.body.useAge
    };

    console.log(reply);

    response.end(JSON.stringify(reply));

});

app.post('/fileupload', (request, response) => {

    console.log(request.files.file.name);
    console.log(request.files.file.path);
    console.log(request.files.file.type);

    let destFileName = __dirname + request.files.file.name;

    fs.readFile(request.files.file.path, (error, data) => {

        fs.writeFile(destFileName, data, (error) => {
            if (error) {

                console.log(error);
            }
            else {

                var reply = {
                    message: "file saved succfully",
                    filename: request.files.file.name
                };
            }
            console.log(response);
            response.end(JSON.stringify(reply));
        });
    });

});


app.get("/listUsers", (request, response) => {

    fs.readFile(__dirname + "/json/users.json", "utf8", (error, data) => {

        if (!error) {

            console.log(data);
            response.end(data);
        }
    });
});

//curl -H "Content-Type: application/json" -X POST -d '{"username":"xyz","password":"xyz"}' https://localhost:8081/addUser

app.get("/addUser", (req, res)=>{
    
    fs.readFile(__dirname+"/json/users.json", "utf8", (error, data)=>{
        
        if(data){
            
            let jsonData = JSON.parse(data);
            jsonData["user4"] = user["user4"];
            console.log(jsonData);
            res.end(JSON.stringify(jsonData));
        }
    });
});


app.get("/:id",(request, response)=>{
    
    fs.readFile(__dirname+"/json/users.json", "utf8",(error,data)=>{
        
        if(data){
            let jsonData = JSON.parse(data);
            let userTemp = JSON.stringify(jsonData["user"+request.params.id]);
            console.log(userTemp);
            response.end(userTemp);
        }
    })
});


app.get("/deleteUser/:id", (request, response)=>{
    
    fs.readFile(__dirname+"/json/users.json", "utf8", (error,data)=>{
        if(data){
            
            let json = JSON.parse(data);
            delete json["user"+request.params.id];
            response.end(JSON.stringify(json));
        }
    });
});

let server = app.listen(8081, () => {
    console.log("listending https://%s:%s", server.address().address, server.address().port);
});
