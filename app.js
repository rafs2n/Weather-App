const input = document.getElementById("input");
const btn = document.getElementById("btn");
const cityName = document.getElementById("city-name");
const temp = document.getElementById("temp");
const desc = document.getElementById('desc');


btn.addEventListener("click", function () {
    const city = input.value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=93d71f6bc1ab4092643bae17067ef4c9')
    .then(response => response.json())
        .then(data => {
            const cityName = data.name;
            const temp = data.main.temp;
            console.log(cityName);
            console.log(temp);
    })
});
