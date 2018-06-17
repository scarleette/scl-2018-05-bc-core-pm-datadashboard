//  USANDO FETCH!
let cohortsContainer = {};
function descargarCohorts() {
  const loadingPage = document.getElementById('loading');// creo un div en html
  loadingPage.style = 'display: block;';
  // fetch me entrega una respuesta, un valor que esta en el futuro==> es una promesa
  let url = ('https://natichan.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/users.json')
  fetch(url).then( // then cuando recibo la respuesta, catch cuando carga
    (response) =>{ 
      if (response.ok) { // si la respuesta esta okay
        return response.json(); // este metodo responde con una promesa, es una promesa
      } 
    }
  ).then( // cuando cumplo la promesa 
    // para hacer multiples llamadas, por ejemplo users, progress, courses, en la url va donde esta ubicada cada una
    (responseJson) =>{
      console.log(responseJson.users);   
    }   
  ).then(
    (responseJson) =>{
      return fetch(responseJson.urldentrodelJson);
    }
  ).catch( // cuando la promesa falla
    (error) => {
      console.log('Petición falló');
    }
  ); 
}