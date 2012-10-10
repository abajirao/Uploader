var queryString = require ("querystring");

function start(response, postData){
	console.log("Request handler 'start' was called. ");

	var body = '<html>' +
		'<head>' +
		'<meta charset=UTF-8 />' +
		'</head>' +
		'<body>'+
		'<form action="/upload" method="post">' +
		'<textarea name="text" rows="20" cols="60"></textarea>'+
		'<input type="submit" value="Submit Text" />'+
		'</form>'+
		'</body>'+
		'</html>';

		response.writeHead(200, {"Content-type": "text/html"});
		response.write(body);
		response.end();
	
}

function upload(response, postData){
	console.log("Request handler 'upload' was called. ");
	response.writeHead(200, {"Content-type":"text/plain"});
	response.write("You've sent : " +postData);
	response.end();
}

exports.start = start;
exports.upload = upload;