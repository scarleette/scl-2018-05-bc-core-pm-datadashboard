/* const form = document.getElementById('search-form');
const searchStudent = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchedForStudent;

form.addEventListener('submit', (element) => {
  element.preventDefault();
  datosTabla.innerHTML = '';
  searchedForStudent = searchStudent.value;
  tabla(dataUsers);
}); */

let datosTabla = document.getElementById('tablaContenido');
function tabla(dataUsers) {
  datosTabla.innerHTML = '';
  
  for (let valor of dataUsers) {
    datosTabla.innerHTML += `
      <tr>
        <th scope="row">1</th>
        <td>${valor.name}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr> `;
  }
}

// Función para pintar el progreso en el html como texto
renderProgress = dataProgress => {
  const map = new Map(Object.entries(dataProgress));  
  console.log(map);      
};

let cajaLista = document.getElementById('locality-dropdown');// me dirigo al elemento seleccionado
cajaLista.length = 0;// limpio cualquier opcion en el elemento

let defaultOption = document.createElement('option');// anexo la opcion determinada
defaultOption.text = 'Escoge el cohort';

cajaLista.add(defaultOption);// .add agrega un nuevo elemento con un valor especificado al final de un objeto
cajaLista.selectedIndex = 0;

window.renderCohorts = dataCohorts => { // Función para pintar Cohorts en el html DOM
  let optionCohort;
  for (let i = 0; i < dataCohorts.length; i++) {
    optionCohort = document.createElement('option');
    optionCohort.text = dataCohorts[i].id;
    cajaLista.add(optionCohort);
  }
};