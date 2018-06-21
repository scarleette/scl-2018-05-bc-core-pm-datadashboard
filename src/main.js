// Función para pintar el progreso en el html como texto
const renderProgress = dataProgress => {
  btnTwo.addEventListener('click', () => {
    // Object.entries(dataProgress).forEach(([key, value]) => {
    const map = new Map(Object.entries(dataProgress));
    // en vez de showprogress podemos usar  
    return containerTwo.innerHTML += `<p>${key}: ${value}</p>`;
  }); 
};

let cajaLista = document.getElementById('locality-dropdown');// me dirigo al elemento seleccionado
cajaLista.length = 0;// limpio cualquier opcion en el elemento

let defaultOption = document.createElement('option');// anexo la opcion determinada
defaultOption.text = 'Escoge el cohort';

cajaLista.add(defaultOption);// .add agrega un nuevo elemento con un valor especificado al final de un objeto
cajaLista.selectedIndex = 0;

seleccionarCohort = () => {
  document.getElementById('locality-dropdown').selectedIndex = '0';
};

const renderCohorts = dataCohorts => { // Función para pintar Cohorts en el html DOM
  let optionCohort;
  for (let i = 0; i < dataCohorts.length; i++) {
    optionCohort = document.createElement('option');
    optionCohort.text = dataCohorts[i].id;
    cajaLista.add(optionCohort);
  }
};


