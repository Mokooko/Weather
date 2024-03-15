const cityInput = document.querySelector(".input");
const btn = document.querySelector(".btn");
// console.log(cityInput, btn)

/* addEventListener 
 ! olay ne oldugunda gerceklesecek ?
 ! olay gerceklestiginde ne olacak
 */
btn.addEventListener("click", () => {
    //console.log("tiklandi")

    //console.dir(cityInput)
    const cityName = cityInput.value;

    // console.log(cityName)

    getData(cityName);
});

function getData(name) {
    //console.log(name)
    const API = "fcc572f052a74d6f3cd0bb9105e241fd";
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`;

    //console.log(fetch(baseUrl))
    fetch(baseUrl)
        .then((res) => res.json())

        .then((data) => {
            const {name, sys:{ country}, main:{temp , feels_like, humidity}, weather: [{description}], wind:{speed}} = data;
           // console.log(name, country,temp, feels_like,humidity,description,speed)

            //verileri js`e cekme

            const city = document.querySelector(".city")
            const temperature = document.querySelector(".temp")
            const hum = document.querySelector(".humidity")
            const wind = document.querySelector(".wind")
            const weatherDesc = document.querySelector(".weather")
            const feeling = document.querySelector(".feeling")
            console.log(city,temperature,hum,wind,weatherDesc,feeling)

            //

            city.textContent = `${name},${country}`
            temperature.innerText = `${temp.toFixed(1)}°`
            hum.textContent = `Nem: %${humidity}`
            wind.innerHTML = `  Ruzgar: ${speed}km/s`
            weatherDesc.innerHTML = `${description}`
            feeling.innerHTML = `Hissedilen:${feels_like.toFixed(1)}`
            


        })

        .catch((err) => console.log(err));

        //inputun icini bosaltir
        cityInput.value = "";

        //inputa odaklanir
        //cityInput.focus();
}
