const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");

let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
                 "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
                 "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
                 "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
                 "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
                 "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];

function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();

function updateName(selectedLi) {
    searchInp.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));






const scrollHeader = () =>{
    const header = document.getElementById('header')
    const Nav = document.getElementById('Nav')
    const BarraAnuncio = document.getElementById('BarraAnuncio')
    const Slogo = document.getElementById('Slogo')
    const Logo = document.getElementById('Logo')
    // When the scroll is greater than 50 viewport height, add the bg-header class to the header tag
    

      this.scrollY >= 50 ? Nav.classList.add('NavS') : Nav.classList.remove('NavS');

      this.scrollY >= 50 ? BarraAnuncio.classList.add('Hide') : BarraAnuncio.classList.remove('Hide'); 


      this.scrollY >= 50 ? Logo.classList.add('Hide') : Logo.classList.remove('Hide');

      this.scrollY >= 50 ? Slogo.classList.remove('Hide') : Slogo.classList.add('Hide');
                   
                       
}
window.addEventListener('scroll', scrollHeader)