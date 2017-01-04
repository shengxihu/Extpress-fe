var express = require('express')
var app = express()
var query = require("querystring");
var fs = require("fs");
 
app.use(express.static('../'))
app.get('/', function(req, res) {
   res.sendfile('../index.html')
})

app.post('/', function (req, res) {
        var postdata = "";
        req.addListener("data",function(postchunk){
            postdata += postchunk;
        })

        //POST结束输出结果
        req.addListener("end",function(){
            res.end()
            console.log(postdata)
        })
});
 
app.listen(3000)