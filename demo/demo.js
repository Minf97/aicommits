var axios = require('axios');

var config = {
	method: 'post',
	url: 'http://125.122.25.32:3001/v1/chat/completions',
	headers: {
		'Authorization': 'Bearer sk-LZeD5wZAt4LHWBdvF064C7D509434a6f9cAb6843596e012d',
	},
	data: {
		"model": "gpt-4o-mini",
		"stream": true,
		"messages": [
			{
				"role": "system",
				"content": "You are a helpful assistant."
			},
			{
				"role": "user",
				"content": "Hello!"
			}
		]
	}
};

axios(config)
	.then(function (response) {
		console.log(JSON.stringify(response.data));
	})
	.catch(function (error) {
		console.log(error);
	});
