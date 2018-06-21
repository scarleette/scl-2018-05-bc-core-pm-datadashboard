let cajaLista = document.getElementById('locality-dropdown');// me dirigo al elemento seleccionado
cajaLista.length = 0;// limpio cualquier opcion en el elemento

let defaultOption = document.createElement('option');// anexo la opcion determinada
defaultOption.text = 'Escoge el cohort';

cajaLista.add(defaultOption);// .add agrega un nuevo elemento con un valor especificado al final de un objeto
cajaLista.selectedIndex = 0;

const renderCohorts = dataCohorts => { // Función para pintar Cohorts en el html DOM
  let optionCohort;
  for (let i = 0; i < dataCohorts.length; i++) {
    optionCohort = document.createElement('option');
    optionCohort.text = dataCohorts[i].id;
    cajaLista.add(optionCohort);
  }
};

let cajaParaBuscar = document.getElementById('buscadorDeAlumnas');// me dirigo al elemento seleccionado
cajaParaBuscar.length = 0;// limpio cualquier opcion en el elemento

let nuevaOpcion = document.createElement('option');// anexo la opcion determinada
nuevaOpcion.text = 'Escoge a una alumna';

cajaParaBuscar.add(nuevaOpcion);// .add agrega un nuevo elemento con un valor especificado al final de un objeto
cajaParaBuscar.selectedIndex = 0;

const listadoDeAlumnas = dataUsers => { // Función para pintar Cohorts en el html DOM
  let optionUsers;
  for (let i = 0; i < dataUsers.length; i++) {
    optionUsers = document.createElement('option');
    optionUsers.text = dataUsers[i].name;
    cajaParaBuscar.add(optionUsers);
  }
};


let datosTabla = document.getElementById('tablaContenido');
function tabla(dataUsers) {
  datosTabla.innerHTML = '';
  
  for (let valor of dataUsers) {
    datosTabla.innerHTML += `
      <tr>
        <th scope="row"></th>
        <td>${valor.name}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>`;
  }
};

