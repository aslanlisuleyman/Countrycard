const dropDown=document.querySelector('.dropdownMenu');
const dropOptions=document.querySelector('.drop-options');
const toggle=document.querySelector('.toggle');
const icon=document.querySelector('.bx');
const countries=document.querySelector('.countries');
const search=document.querySelector('.search');
const regions= document.querySelectorAll('.regions');

toggle.addEventListener('click',()=>{
    document.body.classList.toggle('dark-mode');
    toggle.classList.toggle('dark-mode');
    search.style.backgroundColor='white';
    dropOptions.style.color = 'black';
    
const dropdo = document.querySelector('.dropdown');
const controls = document.querySelector('.controls');
dropdo.style.backgroundColor = 'white';
dropdo.style.color = 'black';
controls.style.backgroundColor = 'white';
controls.style.color = 'black';
})

dropDown.addEventListener('click',()=>{
    dropOptions.classList.toggle('show-options')
})

async function getCountries(){
    const URL = await fetch('https://restcountries.com/v2/all');
    const res = await URL.json();
    console.log(res);
    res.forEach(api =>{
        showCountry(api);
    })
}
getCountries();

function showCountry(data){
    console.log(data)
    const country=document.createElement('div');
    country.classList.add('country');
    country.innerHTML = 
    ` <div class="country-img">
    <img src= ${data.flag} alt="">
</div>
<div class="country-details">
 <a href="detail.html?id=${data.name}"> <h5 class="countryName">${data.name}</h5></a>
    <p><strong>population:</strong>${data.population}</p>
    <p class="regionName"><strong>Region:</strong>${data.region}</p>
    <p><strong>Capital</strong>${data.capital}</p>
</div>`
countries.appendChild(country)
}

search.addEventListener('input', () => {
    const searchText = search.value.toLowerCase(); 

    const countryElements = document.querySelectorAll('.country');
    countryElements.forEach((country) => {
        const countryName = country.querySelector('.countryName').textContent.toLowerCase();

        if (countryName.includes(searchText)) {
            country.style.display = 'block'; 
        } else {
            country.style.display = 'none'; 
        }
    });
});

regions.forEach((region) => {
    region.addEventListener('click', () => {
        const regionName = region.textContent;
        const filteredCountries = Array.from(countries.getElementsByClassName('country'));
        filteredCountries.forEach((country) => {
            const regionElement = country.querySelector('.regionName');
            if (regionElement.textContent.includes(regionName)) {
                country.style.display = 'block';
            } else {
                country.style.display = 'none';
            }
        });
    });
});