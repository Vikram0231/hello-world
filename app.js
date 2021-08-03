//jshint esversion:6
const express = require("express");

const app = express();


app.get("/run_script",function(req,res){
    const { spawn } = require('child_process');
    const childPython = spawn('python',['../param_with_shp.py']);
    childPython.stdout.on('data', (data) =>{
         console.log(`stdout: ${data}`);
     });

     childPython.stderr.on('data', (data) =>{
         console.error(`stderr: ${data}`);
     });

     childPython.on('close', (code) =>{
         console.log(`child process exited with code ${code}`);
     });

    res.send("Code run succesfull");

});


app.listen(3000, function() {

  console.log("Server started on port 3000");
});