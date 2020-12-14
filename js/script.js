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
    <div id="${countriesData[i].name}-content" class="contentStyles">
      <img src="${countriesData[i].flag}" alt="${countriesData[i].name} class="countryImg">
      <div class="content">
        <p><b>Capital:</b>${countriesData[i].capital}</p>
        <p><b>Region:</b>${countriesData[i].region}</p>
        <p><b>Subregion:</b>${countriesData[i].subregion}</p>
        <p><b>Population:</b>${countriesData[i].population}</p>
        <p><b>Area:</b>${countriesData[i].area}</p>
        <div id="${countriesData[i].name}currencies">
          <!--Languages content-->
          <p>${countriesData[i].languages.name}</p>
        </div>
        <div id="${countriesData[i].name}currencies">
          <!--Currencies content-->
          <p>${countriesData[i].currencies.name}</p>
        </div>
        <div id="button">
          <button>close</button>
        </div>
      </div>
    </div>
    `;
    listItem.innerHTML = countryData;

    // Evento para mostrar y ocultar el contenido de paises
    const hideContent = document.getElementById(`${countriesData[i].name}-content`);
    hideContent.style.display = 'none'; // El contenido por default esta oculto
    const countryTitle = document.getElementById(`${countriesData[i].name}-title`);
    countryTitle.addEventListener('click', () => {
      hideContent.style.display = 'block'; // Al dar click al titulo, el contenido se muestra

      // Evento del boton de cerrar
      // Al hacer click, se oculta la informacion del país
      const buttonContent = document.getElementById('button');
      buttonContent.addEventListener('click', () => {
        hideContent.style.display = 'none';
      });
    });
  }
}

const form = document.getElementById('form');
const search = document.getElementById('search');

// Search
search.addEventListener('input', (event) => {
  event.preventDefault();
  const searching = form.elements[0].value;
  countriesInfo(searching);
  const searchCountries = countriesInfo.filter(searchCountry => searchCountry.name);

  // El condicional evita que la pagina quede en blanco
  if (!searchCountries) {
    countriesInfo(searchCountries);
  } else {
    countriesInfo(searchCountries);
  }
});

// Se coloca el fetch al final para que la pagina se cargue con el contenido
// Fetch
fetch('https://restcountries.eu/rest/v2/all')
  .then((response) => response.json())
  .then((data) => {
    countriesInfo(data);
  });
