const api= 'a38b9eab07aec10c48c0273b5defd989';
  
window.addEventListener('load', address);

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
    fetch(base).then((response) => {
        return response.json();
      });    
} 

