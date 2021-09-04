const input = document.getElementById("input");
const btn = document.getElementById("btn");
const showCity = document.getElementById("city-name");
const temp = document.getElementById("temp");
const desc = document.getElementById('desc');
const display = document.getElementById('img-display');
const iconDisplay = document.getElementById('icon-display');
const warning = document.getElementById('warning');

input.focus();

const url = 'https://api.openweathermap.org/data/2.5/weather?q=dhaka&units=metric&appid=93d71f6bc1ab4092643bae17067ef4c9';
const img = document.createElement('img');
fetch(url)
    .then(response => response.json())
    .then(data => {
        const dName = data.name;
        const dTemp = data.main.temp;
        const dDesc = data.weather[0].main;
        const dicon = data.weather[0].icon;
        showCity.innerText = dName;
        temp.innerText = dTemp;
        desc.innerText = dDesc;

        img.src = 'https://openweathermap.org/img/wn/'+dicon+'@2x.png';
        display.appendChild(img);
})


btn.addEventListener("click", function () {
    warning.innerText = '';
    const city = input.value;
    if (city != '' && city != null) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=93d71f6bc1ab4092643bae17067ef4c9')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const cityName = data.name;
                const temperature = data.main.temp;
                const descrip = data.weather[0].main;
                const icon = data.weather[0].icon;

                showCity.innerText = cityName;
                temp.innerText = temperature;
                desc.innerText = descrip;

                
                img.src = 'https://openweathermap.org/img/wn/' + icon + '@2x.png';
                display.appendChild(img);

            })
            .catch(err => {
                const small = document.createElement('small');
                small.innerText = 'city not found. please try again!'
                warning.appendChild(small);
            });
        
    } else {
        const small = document.createElement('small');
        small.innerText = 'invalid input'
        warning.appendChild(small);
    }

    input.value = "";
    input.focus();
});
