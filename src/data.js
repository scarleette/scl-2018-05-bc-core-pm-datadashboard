let users = [];
let progress = {};
let cohorts = [];

fetch('https://natichan.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/users.json') // llamando a la data 
  .then(response => response.json()) // primera promesa, esperando llamada para dar ok
  .then(dataUsers => {
    users = dataUsers;
    tabla(dataUsers);
  } // promesa para cuando se cumplio la llamada, el retorno es una variable que está en el main.
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
          .then((dataCohorts) => renderCohorts(dataCohorts)
          ).catch( 
            (error) => {
              console.log('Petición falló');
            }
          )
      ) 
  );