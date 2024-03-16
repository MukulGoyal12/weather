let API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
let form= document.querySelector('form');
let search= document.querySelector('#search');
let weather= document.querySelector('#weather');

form.addEventListener('submit', (event)=>{
    getWeather(search.value);
    event.preventDefault();
})

let getWeather= async(city)=>{
    weather.innerHTML=`<h2>Loading...</h2>`
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    let response= await fetch(url);
    console.log(response);
    let data= await response.json();
    return showWeather(data);
}

let showWeather = (data)=>{

    if(data.cod==404){
        weather.innerHTML=`<h2>City Not Found </h2>`
        return;
    }

    weather.innerHTML=`
    <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">          
    </div>
    <div class="temp">
        <h1>${data.main.temp}°C</h4>
        <h2>${data.weather[0].main}</h2>
    </div>
    `
}