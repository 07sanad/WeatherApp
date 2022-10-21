const form = document.querySelector('.input form');
form.addEventListener('submit', address)



function address() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)   
    };    
};

function showPosition(position) {
    lat = position.coords.latitude;
    long  = position.coords.longitude;
    console.log(position);
    getAddress();
};

function getAddress(query) {
    const base = `https://api.openweathermap.org/data/2.5/weatherlat=${lat}&lon=${long}&appid=${api}&units=metric`;
    
    console.log(base);
    fetch(base).then((weather) => {
        return weather.json();
      });    
} 

