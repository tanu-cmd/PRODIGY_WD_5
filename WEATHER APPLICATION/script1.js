document.querySelector('.search button').addEventListener('click', () => {
    const API_KEY = 'f475b9ae7877a051f115cb1ca285e1f1';
    const city = document.querySelector('.search input').value.trim();

    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            const icon = document.querySelector('.weather .image img');
            const temp = document.querySelector('.weather .temp');
            const description = document.querySelector('.weather .description');
            const humidity = document.querySelector('.weather .humidity');
            const wind = document.querySelector('.weather .wind');

            icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            temp.textContent = `Temperature: ${data.main.temp} °C`;
            description.textContent = `Description: ${data.weather[0].description}`;
            humidity.textContent = `Humidity: ${data.main.humidity} %`;
            wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
});
