$(function () {   
    localStorage.removeItem('weatherConditions'); 
$('a').on('click', (e) => {
    var publickey = 'a054b45fb805b78dc23c2437a3780e43';
    var privatekey = '85a50e79c35f0189b869623a9a24c574a9918356';
    var ts = new Date().getTime();
    var stringToHash = ts + privatekey + publickey;
    var hash = md5(stringToHash);
    var baseUrl = 'https://gateway.marvel.com:443/v1/public/characters?name=Storm';
    var stormURL = baseUrl + '&ts=' + ts + '&apikey=' + publickey + '&hash=' + hash;
    $.getJSON( stormURL )
    .done(function( response ) {
        var stormURL = response.data.results[0].urls[1].url;
        var stormName = response.data.results[0].name;
        localStorage.setItem('stormURL', JSON.stringify(stormURL));
        localStorage.setItem('stormName', JSON.stringify(stormName));
        var publickey = 'a054b45fb805b78dc23c2437a3780e43';
        var privatekey = '85a50e79c35f0189b869623a9a24c574a9918356';
        var ts = new Date().getTime();
        var stringToHash = ts + privatekey + publickey;
        var hash = md5(stringToHash);
        var baseUrl = 'https://gateway.marvel.com:443/v1/public/characters?name=Iceman';
        var iceURL = baseUrl + '&ts=' + ts + '&apikey=' + publickey + '&hash=' + hash;
        $.getJSON( iceURL )
        .done(function( response ) {
            var iceURL = response.data.results[0].urls[1].url;
            var iceName = response.data.results[0].name;
            localStorage.setItem('iceURL', JSON.stringify(iceURL));
            localStorage.setItem('iceName', JSON.stringify(iceName));
            var publickey = 'a054b45fb805b78dc23c2437a3780e43';
            var privatekey = '85a50e79c35f0189b869623a9a24c574a9918356';
            var ts = new Date().getTime();
            var stringToHash = ts + privatekey + publickey;
            var hash = md5(stringToHash);
            var baseUrl = 'https://gateway.marvel.com:443/v1/public/characters?name=Thor';
            var thorURL = baseUrl + '&ts=' + ts + '&apikey=' + publickey + '&hash=' + hash;
            $.getJSON( thorURL )
            .done(function( response ) {
                var thorURL = response.data.results[0].urls[1].url;
                var thorName = response.data.results[0].name;
                localStorage.setItem('thorURL', JSON.stringify(thorURL));
                localStorage.setItem('thorName', JSON.stringify(thorName));
                var weatherURL = 'http://www.apixu.com/doc/Apixu_weather_conditions.json';                                
                $.getJSON ( weatherURL )
                .done(function( response ) {
                    console.log(response);
                    var weatherConditions = response[Math.floor(Math.random()*48)].day;
                    localStorage.setItem('weatherConditions', JSON.stringify(weatherConditions));
                    if (weatherConditions === 'Moderate rain'||weatherConditions === 'Moderate or heavy sleet showers'||weatherConditions === 'Light drizzle'||weatherConditions === 'Patchy freezing drizzle possible'||weatherConditions === 'Fog'||weatherConditions === 'Heavy rain at times'||weatherConditions === 'Partly cloudy'||weatherConditions === 'Light rain shower'||weatherConditions === 'Moderate or heavy rain shower'||weatherConditions === 'Mist'||weatherConditions === 'Cloudy'||weatherConditions === 'Light rain') {
                        window.location.href="storm.html";
                    } else if (weatherConditions === 'Blowing snow'||weatherConditions === 'Blizzard'||weatherConditions === 'Patchy snow possible'||weatherConditions === 'Light showers of ice pellets'||weatherConditions === 'Patchy sleet possible'||weatherConditions === 'Patchy freezing drizzle possible'||weatherConditions === 'Light freezing rain'||weatherConditions === 'Ice pellets'||weatherConditions === 'Moderate or heavy showers of ice pellets'||weatherConditions === 'Light sleet showers'||weatherConditions === 'Heavy snow'||weatherConditions === 'Moderate or heavy sleet'||weatherConditions === 'Moderate or heavy snow showers'||weatherConditions === 'Freezing fog'||weatherConditions === 'Moderate or heavy snow showers'||weatherConditions === 'Patchy heavy snow'||weatherConditions === 'Heavy freezing drizzle'||weatherConditions === 'Light snow'||weatherConditions === 'Light snow showers'||weatherConditions === 'Moderate snow'||weatherConditions === 'Patchy moderate snow') {
                        window.location.href="iceman.html";
                    } else if (weatherConditions === 'Thundery outbreaks possible'||weatherConditions === 'Patchy light rain with thunder'||weatherConditions === 'Patchy light snow with thunder'||weatherConditions === 'Torrential rain shower'||weatherConditions === 'Moderate or heavy rain with thunder') {
                        window.location.href="thor.html";
                    } else {
                        console.log('ghost-rider');
                    }
                });
            });
        });
    });
});
});