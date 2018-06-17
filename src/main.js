//  USANDO FETCH!
let cohortsContainer;
function descargarCohorts() {
  const loadingPage = document.getElementById('loading');// creo un div en html
  loadingPage.style = 'display: block;';
  // fetch me entrega una respuesta, un valor que esta en el futuro==> es una promesa
  fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json').then( // then cuando recibo la respuesta, catch cuando carga
    (response) =>{ 
      if (response.ok) { // si la respuesta esta okay
        return response.json(); // este metodo responde con una promesa, es una promesa
      } // puedo anidar promesas
    }
  ).then( // cuando cumplo la promesa 
    // para hacer multiples llamadas, por ejemplo users, progress, courses, en la url va donde esta ubicada cada una
    (responseJson) =>{
      const studentsReceptor = document.getElementById('usersContainer');
      for (let index = 0; index < responseJson.length; index++) {
        const students = document.createElement('div');
        studentsReceptor.appendChild(students);      
      } 
    }
  ).then(
    (responseJson) =>{
      return fetch(responseJson.urldentrodelJson);
    }
  ).catch( // cuando la promesa falla
    (error) => {
      console.log('Petición fallo');
    }
  ); 
}