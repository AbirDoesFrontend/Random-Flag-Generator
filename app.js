/* API FUNCTION */

function allCountries(){
 fetch("https://restcountries.com/v3.1/all")
 .then(res => res.json())
 .then(data => displayCountry(data))
}

allCountries();


function displayCountry(countries){
 console.log(countries);
 let countryCard = document.getElementById("countryCard");
 for(let country of countries){
  countryCard.innerHTML += `
  <div class="col">
     <div class="card">
       <img src="${country.flags.png}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${country.name.official}</h5>
         <p class="card-text">Capital : ${country.capital}</p>
         <p class="card-text">Region : <span>${country.region}</span></p>
         <p class="card-text">Timezone : ${country.timezones}</p>
       </div>
     </div>
   </div>
  `
 }
}

