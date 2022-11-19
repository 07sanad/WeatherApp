

const api = {
  key: "585486ed6c421140c34e0a0213bc2ae8",
  base: "https://api.openweathermap.org/data/2.5/",
};
const searchbox = document.querySelector(".search");
searchbox.addEventListener("keypress", search);

function search(evt) {
  if (evt.keyCode == 13) {
    getInput(searchbox.value);
  }
}

function getInput(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(showResults);
}

function showResults(weather) {
  console.log(weather);
  let city = document.querySelector(".location .cityName");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector(".location .date");
  date.innerText = dateBuilder(now); 

  

  let temp = document.querySelector(".location .current .temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>&#176c</span>`;

  let icon = document.querySelector(".location .icon");
  icon.innerHTML = weather.location.current.weather[0].icon;
 
  let weather_el = document.querySelector(".location .current .condition");
  weather_el.innerText = weather.weather[0].main;

}

function dateBuilder(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
  
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `  ${hour}:${minute}
  ${date} ${day} ${month} ${year} `;
}

const d = new Date();
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


/*function getInfo() {
  const newName = document.getElementById('serach-box');
  const cityName = document.getElementById('cityName');
  cityName.innerHTML = '--'+newName.value+'--'


fetch(
  "https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=4a901e8d77801c07bedad821c533748c"
).then(response => response.json())
.then(data =>{
    for (let i = 0; i < 5; i++) {
      document.getElementById("day" + (i + 1) + "Min").innerHTML =
        "Min:" +
        Number(data.list[i].main.temp_min - 299.94).toFixed(1) +
        "&#176c"; 
    }
    for (let i = 0; i < 5; i++) {
      document.getElementById("day" + (i + 1) + "Max").innerHTML =
        "Max:" +
        Number(data.list[i].main.temp_max - 299.94).toFixed(1) +
        "&#176c";
    }
    for (let i = 0; i < 5; i++) {
      document.getElementById("day" + (i + 1) + "Min").innerHTML =
        "Min:" +
        Number(data.list[i].main.temp_min - 303.53).toFixed(1) +
        "&#176c";
    }
    for (let i = 0; i < 5; i++) {
      document.getElementById("img" + (i + 1)).src =
        " http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+'.png'; 
    }
})
.catch(error => alert('error found!'))
}

const d =new Date();
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];

function CheckDay(day) {
  if (day +d.getDay() > 6) {
    return day +d.getDay() -7;
  } 
  else{
    return day +d.getDay();
  }
}
for (let i = 0; i < 5; i++) {
  document.getElementById('day'+ (i+1)).innerHTML = weekday[CheckDay(i)]
}

*/