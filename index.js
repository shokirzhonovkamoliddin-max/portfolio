const elForm = document.querySelector(".form");
const elInput = document.querySelector(".input");
const elCard = document.querySelector(".card");

elForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputName = elInput.value.trim();
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${inputName}&units=metric&appid=c67e3943b1537eb384b2ac2193719538`;

    getWeather(api);
});

const getWeather = (url) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if (request.status === 200 && request.readyState === 4) {
            const data = JSON.parse(request.responseText);
            showWeather(data);
        }
    });

    request.open("GET", url);
    request.send();
};

function showWeather(weather) {
    console.log(weather);

    const { name } = weather;
    const degree = weather.main.temp;

    elCard.innerHTML = `
        <h2>Shahar : ${name}</h2>
        <p class="degree">Degree: ${Math.round(degree)} C</p>
    `;
}

