window.onload = () => {
  dataJson();
}; dataJson = () => {
  fetch('https://natichan.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/users.json') // llamando a la data 
    .then(response => response.json()) 
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
            renderProgress(dataProgress);          
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

processCohortData = (options) =>{
  return; 
};

computeUsersStats = (users, progress, courses) => {
};

sortUsers = (users, orderBy, orderDirection) => {
  return; 
};

filterUsers = (users, search) =>{
  return; 
};
