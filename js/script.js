//
// 🍕 Fabian Barquero's Proyect pt-2 JS2 🍕
//

function countriesInfo(countriesData) {
  const countryList = document.getElementById('countryList');
  countryList.innerHTML = '';

  for (let i = 0; i < countriesData.length; i++) {
    // Se cran los 'li' paera cada pais
    const listItem = document.createElement('li');
    countryList.appendChild(listItem);

    // Countries Info
    const countryData = `
    <div id="${countriesData[i].name}-title">
      <h1>${countriesData[i].name}</h1>
    </div>
    <div id="${countriesData[i].name}-modal" class="modalStyles">
      <img src="${countriesData[i].flag}" alt="${countriesData[i].name}">
      <p><b>Capital:</b>${countriesData[i].capital}</p>
      <p><b>Region:</b>${countriesData[i].region}</p>
      <p><b>Subregion:</b>${countriesData[i].subregion}</p>
      <p><b>Population:</b>${countriesData[i].population}</p>
      <p><b>Area:</b>${countriesData[i].area}</p>
      <div id="${countriesData[i].name}language">
      <!--Language content-->
      </div>
      <div id="${countriesData[i].name}currencies">
      <!--Currencies content-->
      </div>
    </div>
    `;
    listItem.innerHTML = countryData;

    // Se ingresan los datos del idioma en un 'for', ya que hay paises con varios idiomas
    const language = '';
    for (let j = 0; j < countriesData[i].languages.lenght; j++) {
      // Se agrega el contenido HTML del idioma
      const languageContent = `
      <p><b>Language:</b> ${countriesData[i].languages}</p>
      `;

      // Se concatena la informacion en un mismo array
      language.concat(languageContent);
    }

    // Se llama al 'id' del <div> de languages
    const languageDiv = document.getElementById(`${countriesData[i].name}language`);
    languageDiv.innerHTML = language;
  }
}

const form = document.getElementById('form');
const search = document.getElementById('search');

// Search
search.addEventListener('input', (event) => {
  event.preventDefault();
  const searchCountry = form.elements[0].value;
  countriesInfo(searchCountry);
});

// Fetch
fetch('https://restcountries.eu/rest/v2/all')
  .then((response) => response.json())
  .then((data) => {
    countriesInfo(data);
    form.addEventListener('input', (event) => {
      event.preventDefault();
    });
  });
