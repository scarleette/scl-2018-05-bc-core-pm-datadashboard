const btn = document.querySelectorAll('button')[0];
const container = document.getElementById('root');

const btnTwo = document.querySelectorAll('button')[1];
const containerTwo = document.getElementById('rootTwo');

const btnThree = document.querySelectorAll('button')[2];
const containerThree = document.getElementById('rootThree');

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

const renderUsers = usersElement => {
  btn.addEventListener('click', () => {
    const render = usersElement.forEach(element => {
      return container.innerHTML += `<p>${element.name}</p>`;
    });
    return render;
  });
};

const renderProgress = dataProgress => {
  btnTwo.addEventListener('click', () => {
    Object.entries(dataProgress).forEach(([key, value]) => {
      // otra forma con const map = new Map(Object.entries(dataProgress));
      // en vez de showprogress podemos usar  
      return containerTwo.innerHTML += `<p>${key}: ${value}</p>`;
    });
  }); 
};
const renderCohorts = dataCohorts => {
  btnThree.addEventListener('click', () => {
    const showCohorts = dataCohorts.forEach(elements => {
      return containerThree.innerHTML += `<p>${elements.id}</p>`;
    });
    return showCohorts;
  });
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

processCohortData = (options) =>{
  return; 
};


