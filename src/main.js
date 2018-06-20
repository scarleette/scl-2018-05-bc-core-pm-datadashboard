const btn = document.querySelectorAll('button')[0];
const container = document.getElementById('root');

const btnTwo = document.querySelectorAll('button')[1];
const containerTwo = document.getElementById('rootTwo');

const btnThree = document.querySelectorAll('custom-select');
const containerThree = document.getElementById('rootThree');

// Función para pintar usuarios en el html como texto
const renderUsers = dataUsers => {
  // escucho el evento click 
  btn.addEventListener('click', () => {
    // recorro la data de usuarios
    const showUsers = dataUsers.forEach(element => {
      // retorno la data con el objeto nombre en el container en html 
      return container.innerHTML += `<p>${element.name}</p>`;
    });
    return showUsers;
  });
};

// Función para pintar el progreso en el html como texto
const renderProgress = dataProgress => {
  btnTwo.addEventListener('click', () => {
    Object.entries(dataProgress).forEach(([key, value]) => {
    // otra forma con const map = new Map(Object.entries(dataProgress));
    // en vez de showprogress podemos usar  
      return containerTwo.innerHTML += `<p>${key}: ${value}</p>`;
    });
  }); 
};

// Función para pintar Cohorts en el html como texto
const renderCohorts = dataCohorts => {
  btnThree.addEventListener('click', () => {
    const showCohorts = dataCohorts.forEach(elements => {
      return containerThree.innerHTML += `<option>${showCohorts}</option>`;
    });
    
  })
};