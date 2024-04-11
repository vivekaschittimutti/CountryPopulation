let inputEl = document.getElementById("searchInput");
let resultCountries = document.getElementById("resultCountries");
let spinnerEl = document.getElementById("spinner");

function allcountries(eachCountry) {
    let resultContainerEl = document.createElement("div");
    resultContainerEl.classList.add('countryContainer');
    resultContainerEl.classList.add("d-flex", "flex-row", "col-md-5", "col-lg-5", 'mb-3', "ml-2");
    resultCountries.appendChild(resultContainerEl);
    let {
        name,
        population,
        flag
    } = eachCountry;
    let searchCountryValue = inputEl.value;

    let flagEl = document.createElement("img");
    flagEl.src = flag;
    flagEl.classList.add("countryflag");
    resultContainerEl.appendChild(flagEl);
    let rowContainer = document.createElement("div");
    rowContainer.classList.add('rowContainer');
    resultContainerEl.appendChild(rowContainer);
    let countrynameEl = document.createElement("h1");
    countrynameEl.textContent = name;
    countrynameEl.classList.add("countryName");
    rowContainer.appendChild(countrynameEl);
    let countryPopulationEl = document.createElement("p");
    countryPopulationEl.textContent = population;
    rowContainer.appendChild(countryPopulationEl);
}

function addCountry(country) {
    spinnerEl.classList.toggle("d-none");
    for (let item of country) {
        allcountries(item);
    }

}

function allcountries2(eachCountry) {

    let {
        name,
        population,
        flag
    } = eachCountry;
    let searchCountryValue = inputEl.value;
    if (name === searchCountryValue) {
        let resultContainerEl = document.createElement("div");
        resultContainerEl.classList.add('countryContainer');
        resultContainerEl.classList.add("d-flex", "flex-row", "col-md-6", 'col-lg-6');
        resultCountries.appendChild(resultContainerEl);
        let subcontainer = document.createElement("div");
        subcontainer.classList.add("m-2");
        resultContainerEl.appendChild('subcontainer');
        let flagEl = document.createElement("img");
        flagEl.src = flag;
        flagEl.classList.add("countryflag");
        subcontainer.appendChild(flagEl);
        let rowContainer = document.createElement("div");
        rowContainer.classList.add('rowContainer');
        subcontainer.appendChild(rowContainer);
        let countrynameEl = document.createElement("h1");
        countrynameEl.textContent = name;
        countrynameEl.classList.add("countryName");
        rowContainer.appendChild(countrynameEl);
        let countryPopulationEl = document.createElement("p");
        countryPopulationEl.textContent = population;
        rowContainer.appendChild(countryPopulationEl);
    }
}

function addCountry1(data) {
    spinnerEl.classList.toggle("d-none");
    for (let item of data) {
        allcountries2(item);
    }

}


function searchCountry(event) {
    spinnerEl.classList.toggle("d-none");
    if (event.key === "Enter") {
        resultCountries.textContent = '';
        let searchCountryValue = inputEl.value;
        let url = "https://apis.ccbp.in/countries-data?= " + searchCountryValue;
        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                addCountry1(data);
            });
    }
}

let options = {
    method: "GET"
}
spinnerEl.classList.toggle("d-none");
let url = "https://apis.ccbp.in/countries-data";
fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let country = data;
        addCountry(country);
    });
inputEl.addEventListener('keydown', searchCountry);
