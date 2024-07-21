const cityName = document.querySelector('.city')
const feel = document.querySelector('.feel')
const degree = document.querySelector('.degree')
const speedOfWind = document.querySelector('.speed')
const degreeOfHumidity = document.querySelector('.degree2')
const input = document.querySelector('.input')
const search = document.querySelector('.search')
const containerItem = document.querySelector('.containeriteam')
const cloudImage = document.querySelector('.cloudImage')

let key = 'af18b7d1ed986dce1bf86f4e66faae1b'
search.addEventListener('click', searchWeather)
function searchWeather() {

    if (input.value) {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}`
        let p = fetch(url)
        // console.log(p)
        p.then((response) => {
            // console.log(response)
            response.json().then((data) => {
                containerItem.classList.remove('hidden');
                cloudImage.classList.remove('hidden')
                cityName.innerText = data.name
                const { description } = data.weather[0]
                // console.log(description)
                feel.innerText = description
                const { feels_like } = data.main
                degree.innerText = Math.floor(feels_like - 274) + '°';

                // console.log(feels_like)

                const { speed } = data.wind
                speedOfWind.innerText = speed + 'km/h';
                // console.log(speed)

                const { humidity } = data.main
                degreeOfHumidity.innerText = humidity + '%';
                // console.log(humidity)


            })
        })
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });

    }
    else {
        console.log("please enter the city name")
    }



}

