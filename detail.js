let params = new URLSearchParams(document.location.search);
let name = params.get("id");
console.log(name)
const country = document.getElementById("card");
const BASE_URL = 'https://restcountries.com/v2/name/{name}?fullText=true'

fetch(`https://restcountries.com/v2/name/${name}?fullText=true`)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        country.innerHTML +=
            `
    <div class="count" style="display: flex;align-items:center;justify-content:center;gap:20px ; margin-top:80px"> 
    <div class="country-img" >
    <img src= ${data[0].flag}  style="height:500px" >
</div>
<div class="country-details" style="margin-top:100px" >
 <h5 class="countryName">${data[0].name}</h5>
    <p><strong>population:</strong>${data[0].population}</p>
    <p class="regionName"><strong>Region:</strong>${data[0].region}</p>
    <p><strong>Capital</strong>${data[0].capital}</p>
</div>   </div>
`
    })