let users = [];
let progress = {};
let cohorts = [];

fetch('https://natichan.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/users.json') // llamando a la data 
  .then(response => response.json()) // primera promesa, esperando llamada para dar ok
  .then(dataUsers => {
    users = dataUsers;
    tabla(dataUsers);  
  }
  ).then(  
    fetch('https://natichan.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/progress.json')
      .then(responseTwo => responseTwo.json()
      ).then( 
        (dataProgress) => {
          progress = dataProgress;
          renderProgress(dataProgress)          
        }
      ).then(
        fetch('https://natichan.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts.json')
          .then(responseThree => responseThree.json())
          .then((dataCohorts) => {
            cohorts = dataCohorts;
            renderCohorts(dataCohorts);
          }
          ).catch( 
            (error) => {
              console.log('Petición falló');
            }
          )
      ) 
  );
  );

// ##### Argumentos

// * `options`: An object with the following keys:
//   - `cohort`: Objeto cohort (de la lista de cohorts)
//   - `cohortData`: Objeto con dos propiedades:
//     + `users`: Arreglo de usuarios miembros del cohort.
//     + `progress`: Objeto con data de progreso de cada usuario en el contexto de
//       un cohort en particular.
//   - `orderBy`: String con criterio de ordenado (ver `sortUsers`).
//   - `orderDirection`: String con dirección de ordenado (ver `sortUsers`).
//   - `search`: String de búsqueda (ver `filterUsers`)

// ##### Valor de retorno

// Nuevo arreglo de usuarios _ordenado_ y _filtrado_ con la propiedad `stats`
// añadida (ver `computeUsersStats`).
processCohortData = (options) =>{
  return; 
};

computeUsersStats = (users, progress, courses) => {
  return; 
};

sortUsers = (users, orderBy, orderDirection) => {
  return; 
};

filterUsers = (users, search) =>{
  return; 
};
