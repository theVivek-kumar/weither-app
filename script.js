//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const weatherApi = {
    key:"6d96dbda29b0fcf4e3659ed6dcb6060a",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather?"
}

const searchInputBox = document.getElementById('input-box');
searchInputBox.addEventListener('keypress',(Event) => {
    
    if(Event.keyCode ==13){
    console.log(searchInputBox.value);
    }


});


function getWeatherreport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}`)
    .then(weather => {
        return weather .json();

    }).then(showWeatherReport);
       
    function showWeatherReport(weather)
    {
        console.log(weather);
        let city = document.getElementById('city');
        city.innerText = `${weather.name},${weather.sys.country}`;

        let temperature = document.getElementById('temp');
        temperature.innerText = `${Math.round(weather.main.temp)} &geg;C`;
        
        let minMaxTemp = document.getElementById('min-max');
        minMaxTemp.innerHTML=`${Math.floor(weather.main.temo_min)}&deg;C(min)/${math.ceil(weather.main,temp_max)}&deg;C(max)`;

        let weatherType = document.getElementById('weather');
        weatherType.innerText =`${weather.weather[0].main}`;
        let date = document.getElementById('date');
        let todayDate = new date();
        date.innerText = dateManage(todayDate);




    }
    function dateManage(dateArg){
        let days =["sunday","monday","tuesday","wednusday","thursday","friday","saturday"];

        let months = []
    }
}


