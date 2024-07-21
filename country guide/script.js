const image = document.querySelector('.image')
const countryName = document.querySelector('.countryName')
const countryCapital = document.querySelector('.countryCapital')
const countryContinent = document.querySelector('.countryContinent')
const countryPopulation = document.querySelector('.countryPopulation')
const countryCurrency = document.querySelector('.countryCurrency')
const countryLanguage = document.querySelector('.countryLanguage')
const button = document.querySelector('.button')
const text = document.querySelector('.text')
const errorMessage = document.querySelector('.error')
const display=document.querySelector('.display')


button.addEventListener('click', getRequest)
function getRequest() {
    if (text.value) {
        const url = `https://restcountries.com/v3.1/name/${text.value}?fullText=true`
        const p = fetch(url)
        p.then((data) => {
            // console.log(data)
            data = data.json()
            // console.log(data)
            data.then((mainData) => {
                let [country] = mainData
                // console.log(mainData)
                // console.log(country)
                // console.log(country.name.common)
                display.classList.remove('hidden')
                errorMessage.innerText=''
                image.src = country.flags.png;
                countryName.innerText = country.name.common
                countryCapital.innerText = country.capital
                countryContinent.innerText = country.continents
                countryPopulation.innerText = country.population
                const currencies = Object.values(country.currencies).map(currency => `${currency.name} (${currency.symbol})`);
                // console.log(currencies)
                countryCurrency.innerText = currencies.join(', ');
                const languages = Object.values(country.languages);
                countryLanguage.innerText = languages.join(' , ');

            })
            .catch((error) => {
                errorMessage.innerText = 'Please enter the correct country name';
                console.error('Fetch error:', error);
            });
            
        })


    }
    else{
        text.value = ''; 
    }



}



