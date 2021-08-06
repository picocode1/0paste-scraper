const fs = require('fs');
const request = require('request');


/*
    Stats:
     Total files: 279.733
     Total Found: 219.056

    Download in data.rar
*/



var delay = 5 //Delay in MS between requests
var i = 0; //Increment counter
var final_number = 1000000

function Checker(token){
    var options = {
        url: `http://0paste.com/${token}.txt`,
    }
    function callback(error, response, body) {
        if (body == undefined || body == null){
            return console.log('Undefined data')
        }
        if (body.length < 5) {
            return console.log('Not enough data')
        }
        console.log('Checking:', token, response.statusCode)

        fs.writeFile(`data/${token}.txt`, body, function (err) {
            if (err) return console.log(err);
        });
    }
    request(options, callback);
}



function CheckLoop() {
	setTimeout(function() {
		Checker(i), ++i < final_number && CheckLoop()
	}, delay)
}
CheckLoop();