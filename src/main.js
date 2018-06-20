const btn = document.querySelectorAll('button')[0];
const container = document.getElementById('root');

const btnTwo = document.querySelectorAll('button')[1];
const containerTwo = document.getElementById('rootTwo');

const btnThree = document.querySelectorAll('button')[2];
const containerThree = document.getElementById('rootThree');


const renderUsers = dataUsers => {
  btn.addEventListener('click', () => {
    const showUsers = dataUsers.forEach(element => {
      return container.innerHTML += `<p>${element.name}</p>`;
    });
    return showUsers;
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