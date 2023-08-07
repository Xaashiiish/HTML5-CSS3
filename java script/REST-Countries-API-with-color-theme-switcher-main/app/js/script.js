
function thousandSeparator(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

// function to load data via API URL

async function loadData(api_url){
    try{
        const response = await fetch(api_url);
        const data = await response.json();
        return data;
    }
    catch (error){
        console.error(error);
    }
}

// load data of all countries
const api_url_all = 'https://restcountries.eu/rest/v2/all';
const allData = loadData(api_url_all);

// invoke function to display all countries data
allData.then(function (data){
    displayData(data);
});

//  function to display any data / any countries - used in searching as well
function displayData(data){

    // check state - dark mode or not (light mode)
    let state = document.querySelector('body').className;
    if (state === 'body-dark'){
        // console.log('dark mode is on');
        // do something with each country
        for (var i=0; i < data.length; i++){

            // create a li for each country
            const newLi = document.createElement('li');
            newLi.classList.add('element-dark');

            const flag = document.createElement('img');
            flag.src = data[i].flag;
            // add the text node to the newly created li
            newLi.appendChild(flag);

            // give li some content - country name
            const name = document.createElement('h1');
            const data_name = document.createTextNode(data[i].name);
            name.appendChild(data_name);
            // add the text node to the newly created li
            newLi.appendChild(name);


            // give li some content - population
            const population_div = document.createElement('div');
            const population = document.createElement('p');
            const data_population = document.createTextNode("Population: ");
            population.appendChild(data_population);
            population_div.appendChild(population);


            population_div.append(thousandSeparator(data[i].population));

            // add the text node to the newly created li
            newLi.appendChild(population_div);


            // give li some content - Region
            const region_div = document.createElement('div');
            const region = document.createElement('p');
            const data_region = document.createTextNode("Region: ");
            region.appendChild(data_region);
            region_div.appendChild(region);
            region_div.append(data[i].region);
            // add the text node to the newly created li
            newLi.appendChild(region_div);


            // give li some content - Capital
            const capital_div = document.createElement('div');
            const capital = document.createElement('p');
            const data_capital = document.createTextNode("Capital: ");
            capital.appendChild(data_capital);
            capital_div.appendChild(capital);
            capital_div.append(data[i].capital);
            // add the text node to the newly created li
            newLi.appendChild(capital_div);

            // append li with content to .countries ul
            document.querySelector('.countries ul').appendChild(newLi);
        }
    }
    else{
        // console.log('light mode is still on');
        // do something with each country
        for (var i=0; i < data.length; i++){

            // create a li for each country
            const newLi = document.createElement('li');

            const flag = document.createElement('img');
            flag.src = data[i].flag;
            // add the text node to the newly created li
            newLi.appendChild(flag);

            // give li some content - country name
            const name = document.createElement('h1');
            const data_name = document.createTextNode(data[i].name);
            name.appendChild(data_name);
            // add the text node to the newly created li
            newLi.appendChild(name);


            // give li some content - population
            const population_div = document.createElement('div');
            const population = document.createElement('p');
            const data_population = document.createTextNode("Population: ");
            population.appendChild(data_population);
            population_div.appendChild(population);


            population_div.append(thousandSeparator(data[i].population));

            // add the text node to the newly created li
            newLi.appendChild(population_div);


            // give li some content - Region
            const region_div = document.createElement('div');
            const region = document.createElement('p');
            const data_region = document.createTextNode("Region: ");
            region.appendChild(data_region);
            region_div.appendChild(region);
            region_div.append(data[i].region);
            // add the text node to the newly created li
            newLi.appendChild(region_div);


            // give li some content - Capital
            const capital_div = document.createElement('div');
            const capital = document.createElement('p');
            const data_capital = document.createTextNode("Capital: ");
            capital.appendChild(data_capital);
            capital_div.appendChild(capital);
            capital_div.append(data[i].capital);
            // add the text node to the newly created li
            newLi.appendChild(capital_div);


            // append li with content to .countries ul
            document.querySelector('.countries ul').appendChild(newLi);

        }
    }

    // ADD EVENT LISTENER FOR EACH COUNTRY - get data and anavigate to next page
    const targets = document.querySelectorAll('.countries ul li');

    targets.forEach(function(target){
        target.addEventListener('click', function(){
            targetCountry(target.querySelector('h1').innerHTML);
        })
    });

}

// search countries function
const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keyup', function(e){
    const searchString = e.target.value.toLowerCase();

    allData.then( function (data){

        const searchedCountries = data.filter(country => {
            return(country.name.toLowerCase().includes(searchString));  
        });

        // clear existing countries
        document.querySelector('.countries-inner-container ul').innerHTML = '';

        // display new searched countries
        displayData(searchedCountries);
    });

});


// filter by region
async function targetRegion(){

    var targetRegion = document.getElementById("regions").value;

    // request data from json data where region = targetRegion
    const api_url_region = 'https://restcountries.eu/rest/v2/region/' + targetRegion;
    const allData = loadData(api_url_region);

    // clear list of countries in countries container
    document.querySelector('.countries ul').innerHTML = '';

    // call displayData function to display data
    allData.then(function (data){
        displayData(data);
    });
}


const conditions = document.querySelector('.conditions');
const back_btn = document.querySelector('.back');

async function targetCountry(countryName){

    console.log(countryName);

    // hide search bar and filter - conditions div
    conditions.classList.add('hide');
    // hide all countries
    document.querySelector('.countries').classList.add('hide');

    // show search bar
    back_btn.classList.remove('hide');

    // show target country
    document.querySelector('.targetCountry').classList.remove('hide');

    // clear the children elements
    document.querySelector('.targetCountry-flag').innerHTML = '';
    document.querySelector('.targetCountry-name').innerHTML = '';
    document.querySelector('.targetCountry-content-left-right').innerHTML = '';
    document.querySelector('.targetCountry-content-borders').innerHTML = '';


    // request data from json data where name = countryName
    const api_url_name = 'https://restcountries.eu/rest/v2/name/' + countryName + '?fullText=true';

    console.log(api_url_name);

    const response = await fetch(api_url_name);
    const data = await response.json();

    // console.log(data);

    // create img tag
    const flag = document.createElement('img');
    flag.src = data[0].flag;
    document.querySelector('.targetCountry-flag').appendChild(flag);



    // NEW H1 TAG - NAME OF COUNTRY
    // create h1 tag - name and append to html
    const newh1 = document.createElement('h1');
    const data_name = document.createTextNode(data[0].name);
    newh1.appendChild(data_name);
    document.querySelector('.targetCountry-name').appendChild(newh1);



    // CONTENT LEFT
    // create new div for country content left
    const newDivContentLeft = document.createElement('div');
    newDivContentLeft.className = "targetCountry-content-left";

    // create p and b tag - native name

    const newp_native = document.createElement('p');

    const newb_native = document.createElement('b');
    const data_nativeName_bold = document.createTextNode("Native Name: ");
    newb_native.appendChild(data_nativeName_bold);
    newp_native.appendChild(newb_native);

    const data_nativeName = document.createTextNode(data[0].nativeName);
    newp_native.appendChild(data_nativeName);

    newp_native.appendChild(data_nativeName);
    newDivContentLeft.appendChild(newp_native);


    // create p and b tag - population
    const newp_population = document.createElement('p');

    const newb_population = document.createElement('b');
    const data_population_bold = document.createTextNode("Population: ");
    newb_population.appendChild(data_population_bold);
    newp_population.appendChild(newb_population);

    const data_population = document.createTextNode(thousandSeparator(data[0].population));
    newb_population.appendChild(data_population);

    newp_population.appendChild(data_population);
    newDivContentLeft.appendChild(newp_population);

    
    // create p and b tag - region
    const newp_region = document.createElement('p');

    const newb_region = document.createElement('b');
    const data_region_bold = document.createTextNode("Region: ");
    newb_region.appendChild(data_region_bold);
    newp_region.appendChild(newb_region);

    const data_region = document.createTextNode(data[0].region);
    newb_region.appendChild(data_region);

    newp_region.appendChild(data_region);
    newDivContentLeft.appendChild(newp_region);



    // create p and b tag - sub region
    const newp_subRegion = document.createElement('p');

    const newb_subRegion = document.createElement('b');
    const data_subRegion_bold = document.createTextNode("Sub Region: ");
    newb_subRegion.appendChild(data_subRegion_bold);
    newp_subRegion.appendChild(newb_subRegion);

    const data_subRegion = document.createTextNode(data[0].subregion);
    newb_subRegion.appendChild(data_subRegion);

    newp_subRegion.appendChild(data_subRegion);
    newDivContentLeft.appendChild(newp_subRegion);



    // create p and b tag - capital
    const newp_capital = document.createElement('p');

    const newb_capital = document.createElement('b');
    const data_capital_bold = document.createTextNode("Capital: ");
    newb_capital.appendChild(data_capital_bold);
    newp_capital.appendChild(newb_capital);

    const data_capital = document.createTextNode(data[0].capital);
    newb_capital.appendChild(data_capital);

    newp_capital.appendChild(data_capital);
    newDivContentLeft.appendChild(newp_capital);


    // append left content to newDivContent
    document.querySelector('.targetCountry-content-left-right').appendChild(newDivContentLeft);



    // CONTENT RIGHT
    // create new div for country content right
    const newDivContentRight = document.createElement('div');
    newDivContentRight.className = "targetCountry-content-right";

    // create p and b tag - top level domain
    const newp_domain = document.createElement('p');

    const newb_domain = document.createElement('b');
    const data_domain_bold = document.createTextNode("Domain: ");
    newb_domain.appendChild(data_domain_bold);
    newp_domain.appendChild(newb_domain);

    const data_domain = document.createTextNode(data[0].topLevelDomain);
    newb_domain.appendChild(data_domain);

    newp_domain.appendChild(data_domain);
    newDivContentRight.appendChild(newp_domain);


    // create p and b tag - currencies
    const newp_currency = document.createElement('p');

    const newb_currency = document.createElement('b');
    const data_currency_bold = document.createTextNode("Currencies: ");
    newb_currency.appendChild(data_currency_bold);
    newp_currency.appendChild(newb_currency);

    const data_currency = document.createTextNode(data[0].currencies[0].name);
    newb_currency.appendChild(data_currency);

    newp_currency.appendChild(data_currency);
    newDivContentRight.appendChild(newp_currency);


    // create p and b tag - languages
    const newp_languages = document.createElement('p');

    const newb_languages = document.createElement('b');
    const data_languages_bold = document.createTextNode("Languages: ");
    newb_languages.appendChild(data_languages_bold);
    newp_languages.appendChild(newb_languages);

    if (data[0].languages.length > 1){

        // create array for lanuages
        let langArray = [];

        //  populate array with country's languages
        for (var i=0; i < data[0].languages.length; i++){
            langArray.push(" " + data[0].languages[i].name);
        }

        // console.log(langArray);
        const data_languages = document.createTextNode(langArray);
        newp_languages.appendChild(data_languages);
        newDivContentRight.appendChild(newp_languages);

    }
    else{
            const data_languages = document.createTextNode("Languages: " + data[0].languages[0].name);
            newp_languages.appendChild(data_languages);
            newDivContentRight.appendChild(newp_languages);
    }


    // append right content to newDivContent
    document.querySelector('.targetCountry-content-left-right').appendChild(newDivContentRight);




    // NEW DIV TAG - BORDER COUNTRIES
    const newPBorders = document.createElement('p');

    const newBBorders = document.createElement('b');
    const borders_bold = document.createTextNode("Border Countries: ");

    newBBorders.appendChild(borders_bold);
    newPBorders.appendChild(newBBorders);

    document.querySelector('.targetCountry-content-borders').appendChild(newPBorders);

    if (data[0].borders.length > 0){

        // create array to store border countries in code
        let bordersArrayCode = [];
        for (var i=0; i < data[0].borders.length; i++){
            bordersArrayCode.push(data[0].borders[i]);
        }

        // console.log(bordersArrayCode);

        // create array to store border countries in text 
        let bordersArrayText = [];

        for (var i=0; i < bordersArrayCode.length; i++){

            // fetch api to get country text
            // request data from json data where alpha3Code = code in bordersArrayCode
            const api_url_countryCode = 'https://restcountries.eu/rest/v2/alpha/' + bordersArrayCode[i];
            const response = await fetch(api_url_countryCode);
            const data = await response.json();

            // add country name in text into text array
            bordersArrayText.push(data.name);
        }

        // console.log(bordersArrayText);

        // for each item in bordersArrayText, create li and append to ul
        for (var i=0; i < bordersArrayText.length; i++){
            // console.log(bordersArrayText[i]);
            let newP = document.createElement('p');
            let newPcontent = document.createTextNode(bordersArrayText[i]);
            newP.appendChild(newPcontent);
            document.querySelector('.targetCountry-content-borders').appendChild(newP);
        }
        // console.log(newUL);
    }
    else{
        const noBorders = document.createTextNode('No Borders');
        document.querySelector('.targetCountry-content-borders').appendChild(noBorders);
    }


    // ADD EVENT LISTENER FOR EACH BORDER COUNTRY - get data and anavigate to next page
    const borderCountries = document.querySelectorAll('.targetCountry-content-borders p:not(:first-of-type)');
    borderCountries.forEach(function(target){
        target.addEventListener('click', function(){
            targetCountry(target.innerHTML);
        })
    });
    
}


//  DARK / LIGHT MODE
const modes = document.querySelector('.modes');
const modes_text = document.querySelector('.modes p');
modes.addEventListener('click', function(){

    // change innerHTML
    if (modes_text.innerHTML === "Dark Mode"){
        modes_text.innerHTML = "Light Mode"
    }else{
        modes_text.innerHTML = "Dark Mode"
    }
    
    // change background to dark
    document.querySelector('body').classList.toggle('body-dark');
    document.querySelector('.header').classList.toggle('element-dark');
    document.querySelector('.search').classList.toggle('element-dark');
    document.querySelector('.search input').classList.toggle('element-dark');
    document.querySelector('.filter select').classList.toggle('element-dark');
    document.querySelector('.back a').classList.toggle('element-dark');
    document.querySelector('.targetCountry-content-borders').classList.toggle('element-dark-borders');
    document.querySelector('.conditions').classList.toggle('element-darker');

    
    const countries = document.querySelectorAll('.countries ul li');
    for (var i=0; i < countries.length; i++){
        countries[i].classList.toggle('element-dark');
    }

})

// back button - invoke displayData(), checking of state is done in displayData function
back_btn.addEventListener('click', function(){

    // show search bar and filter - conditions div
    conditions.classList.remove('hide');
    // show all countries
    document.querySelector('.countries').classList.remove('hide');

    // hide the back button
    back_btn.classList.add('hide');

    // hide target country
    document.querySelector('.targetCountry').classList.add('hide');

    // clear the children elements
    document.querySelector('.targetCountry-flag').innerHTML = '';
    document.querySelector('.targetCountry-name').innerHTML = '';
    document.querySelector('.targetCountry-content-left-right').innerHTML = '';
    document.querySelector('.targetCountry-content-borders').innerHTML = '';
});


// home button
async function home(){
    // clear all countries
    // show search bar and filter - conditions div
    conditions.classList.remove('hide');
    // show all countries
    document.querySelector('.countries').classList.remove('hide');

    // hide the back button
    back_btn.classList.add('hide');

    // hide target country
    document.querySelector('.targetCountry').classList.add('hide');

    // clear the children elements
    document.querySelector('.targetCountry-flag').innerHTML = '';
    document.querySelector('.targetCountry-name').innerHTML = '';
    document.querySelector('.targetCountry-content-left-right').innerHTML = '';
    document.querySelector('.targetCountry-content-borders').innerHTML = '';
    document.querySelector('.countries ul').innerHTML = '';

    // clear input
    searchBar.value = '';

    // reset filter to default
    document.getElementById("regions").value = '';

    allData.then(function (data){
        displayData(data);
    });
}


