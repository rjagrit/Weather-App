const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2871137f8dmshcd0f21cd61bd6d8p1ba049jsnb5ea31ec815d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi',options)
    .then(response => response.json())
    .then(response=> console.log(response))
    .catch(err=>console.error(err));





 