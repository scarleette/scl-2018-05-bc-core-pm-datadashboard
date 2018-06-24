window.onload = () => {
  dataJson();
}; dataJson = () => {
  fetch('https://natichan.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/users.json') // llamando a la data 
    .then(response => response.json()) 
    .then(dataUsers => {
      users = dataUsers;
      tabla(users);
    }
    ).then(  
      fetch('https://natichan.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/progress.json')
        .then(responseTwo => responseTwo.json()
        ).then( 
          (dataProgress) => {
            progress = dataProgress;
            // renderProgress(dataProgress);          
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
};

computeUsersStats = (users, progress, courses) => {
};

sortUsers = (users, orderBy, orderDirection) => {
  return; 
};

window.filterUsers = (users, search) => { // filtrar usuarios
  return users.filter(users => {
    return users.name.toUpperCase().indexOf(search.toUpperCase()) > -1; 
  });
};
// console.log(JSON.stringify(window.filterUsers(series, 'friends')));, probado en ejercicio de series, aún no funciona acá
  
processCohortData = (options) =>{
  return; 
};