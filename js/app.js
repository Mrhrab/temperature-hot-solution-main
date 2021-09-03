const API_KEY = `dea886c37d1f3a16b632491cbff947c1`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayTEmperatureData(data));
}

const setInnerTExt = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTEmperatureData = temperature => {
    setInnerTExt('city', temperature.name);
    setInnerTExt('temperature', temperature.main.temp);
    setInnerTExt('condition', temperature.weather[0].main);
    // set weather icon
    const url =`http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
    
}