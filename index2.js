let resultCountries = document.getElementById("resultCountries");

let searchInputEl = document.getElementById("searchInput");

let spinnerEl = document.getElementById("spinner")

let countryList = [];

function createAndAppendCountry(country) {
    spinnerEl.classList.add('d-none');
    let containerEl = document.createElement("div");
    containerEl.classList.add("d-flex", 'flex-row', 'col-11', 'col-md-5', 'ml-auto', 'mr-auto', 'countryContainer');
    resultCountries.appendChild(containerEl);
    let flagEl = document.createElement("img");
    flagEl.classList.add('image');
    flagEl.src = country.flag;
    containerEl.appendChild(flagEl);
    let subContainer = document.createElement("div");
    subContainer.classList.add("subContainer");
    containerEl.appendChild(subContainer);
    let countryName = document.createElement('h1');
    countryName.classList.add("countryName");
    countryName.textContent = country.name;
    subContainer.appendChild(countryName);
    let population = document.createElement("p");
    population.textContent = country.population;
    subContainer.appendChild(population);


}

function displaySearchResults(jsondata) {

    for (let country of countryList) {
        createAndAppendCountry(country);
    }
}

function getresults() {
    spinnerEl.classList.remove('d-none');
    let options = {
        method: "GET"
    }
    let url = "https://apis.ccbp.in/countries-data";
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsondata) {
            countryList = jsondata;
            displaySearchResults(jsondata);
        })
}
let searchCountry = function(event) {
    resultCountries.textContent = '';
    let searchCountry = event.target.value;

    for (let country of countryList) {
        let countryName = country.name;
        if (countryName.includes(searchCountry))
            createAndAppendCountry(country);
    }
}

getresults();
searchInputEl.addEventListener('keyup', searchCountry);
