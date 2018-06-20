// contenedor del data
fetch('https://natichan.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/users.json')
  .then(response => response.json())
  .then(dataUsers => renderUsers(dataUsers)
  ).then(  
    fetch('https://natichan.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/progress.json')
      .then(responseTwo => responseTwo.json()
      ).then( 
        (dataProgress) =>renderProgress(dataProgress)          
      ).then(
        fetch('https://natichan.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts.json')
          .then(responseThree => responseThree.json())
          .then( 
            (dataCohorts) => renderCohorts(dataCohorts)
          ).catch( 
            (error) => {
              console.log('Petición falló');
            }
          )
      ) 
  );

computeUsersStats = (users, progress, courses) => {
  return; 
};

sortUsers = (users, orderBy, orderDirection) => {
  return; 
};

filterUsers = (users, search) =>{
  return; 
};

processCohortData = (options) =>{
  return; 
};


