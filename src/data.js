let users = [];
let progress = {};
let cohorts = [];

fetch('https://natichan.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/users.json') // llamando a la data 
  .then(response => response.json()) // primera promesa, esperando llamada para dar ok
  .then(dataUsers => {
    users = dataUsers;
  }
  ).then(  
    fetch('https://natichan.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/progress.json')
      .then(responseTwo => responseTwo.json()
      ).then( 
        (dataProgress) => {
          progress = dataProgress;
          // renderProgress(dataProgress);      
          const dataUsersProcessed = computeUsersStats(users, progress);
          tabla(dataUsersProcessed);
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


function computeUsersStats(dataAlumnas, dataProgress ) {
  for (let i = 0; i < dataAlumnas.length; ++i) {
    const idUser = dataAlumnas[i].id;
    if (dataProgress[idUser].intro !== undefined) {
      const progressUser = dataProgress[idUser];   
      const exercices = devuelveLosEjercicios(progressUser).exercices;
      const reads = devuelveLasLecturas(progressUser).reads;
      const quizzes = devuelveInformacionDeQuizzes(progressUser).quizzes;

      dataAlumnas[i] = {
        ...dataAlumnas[i],
        stats: {
        percent: progressUser.intro.percent,
        exercices: exercices,
        reads: reads,
        quizzes: quizzes
      }
      }
    }
  }
  return dataAlumnas;
}

function devuelveLosEjercicios(progresoDeUsuario) {
  const exercises = progresoDeUsuario.intro.units['02-variables-and-data-types'].parts['06-exercises'].exercises;
  const totalExercises = Object.keys(exercises).length;
  const exercise1 = exercises['01-coin-convert'].completed;
  const exercise2 = exercises['02-restaurant-bill'].completed;
  let completedExercises;
  if (exercise1 !== undefined && exercise2 !== undefined) {
      completedExercises = exercise1 + exercise2;
  } else {
      completedExercises = 0;
  }
  const percentExercises = (completedExercises * 100) / totalExercises;
  const resultadoDeEjercicios = {
      exercices: {
          total: totalExercises,
          completed: completedExercises,
          percent: percentExercises
      }
  };
  return resultadoDeEjercicios;
};

function devuelveLasLecturas(progresoDeUsuario) {
  // guardara el total de lecturas por usuario
  let totalReads = 0;
  // guardara el total de lecturas completadas 
  let completedRead = 0;
  // guaradara el porcentaje de entre lo leido y el total de lecturas 
  let porcentajeDeLecturasCompletadas = 0;
  // contendra el objeto reads 
  const resultadoDeLecturas = {
      reads: {
          total:0,
          completed:0,
          percent:0,
      }
  };
  // variable que contiene un objeto con todas las unidades por cada usuario
  let unidades = progresoDeUsuario.intro.units;
  //  console.log(unidades);
  // arreglo que contiene el nombre de las llaves dentro de units , para cada usuario
  let keysDeunidades = Object.keys(unidades);
  // console.log(keysDeunidades);
  // recorrido sobre el arreglo que contiene el nombre de las llaves de units
  keysDeunidades.forEach((subllaves)=>{
      // variable que contiene el objeto dentro de cada llave obtenida en keys units
      let subLlavesDeUnidades = unidades[subllaves].parts;
      // console.log(subLlavesDeUnidades);
      // variable que contiene un arreglo con el nombre de las llaves dentro de partes 
      let keysDePartes = Object.keys(subLlavesDeUnidades);
      // console.log(keysDePartes);
      // foreach para recorrer el nuevo arreglo 
       keysDePartes.forEach((llaveDePartes) => {
           //variable que guardara el contenido de la llave type por cada usuario
          let contenidoDePartes = subLlavesDeUnidades[llaveDePartes].type;
          // console.log(contenidoDePartes);
          // condicion para type debe ser igual a read de ser asi cuardalas en la variable totalreads;
          if (contenidoDePartes === 'read'){
              totalReads++;
          let lecturasCompletadas = subLlavesDeUnidades[llaveDePartes].completed;
          if (lecturasCompletadas === 1){
              completedRead++;
              }
          }
          porcentajeDeLecturasCompletadas = parseInt((completedRead * 100) / totalReads);
      })  
  })
  resultadoDeLecturas.reads.total = totalReads;
  resultadoDeLecturas.reads.completed = completedRead;
  resultadoDeLecturas.reads.percent = porcentajeDeLecturasCompletadas;
  // console.log(resultadoDeLecturas);
  return resultadoDeLecturas;
};

function devuelveInformacionDeQuizzes(progresoDeUsuario){
  //decalro variables que contendran la informacion dentro del objeto
  let totalDeQuizzes = 0;
  let completedDeQuizzes = 0;
  let percentDeQuizzes = 0;
  let scoreSum = 0;
  let scoreAvg = 0;
  let resultadoDeQuizzes = {
      quizzes: {
          total: 0,
          completed: 0,
          percent: 0,
          scoreSum: 0,
          scoreAvg: 0
      }       
  };

  let unidades2 = progresoDeUsuario.intro.units;
  // console.log(unidades2);
  let llevesDeUnidades2 = Object.keys(unidades2);
  // console.log(llevesDeUnidades2);
  llevesDeUnidades2.forEach((objetoConLaves) => {
      let objetoDeUnidades2 = unidades2[objetoConLaves].parts;
      // console.log(objetoDeUnidades2);
      llavesDeObjetoDeUnidades2 = Object.keys(objetoDeUnidades2);
      // console.log(llavesDeObjetoDeUnidades2);      
      llavesDeObjetoDeUnidades2.forEach((nombreDelaLlave) => {
          let objetoDentroDeParts = objetoDeUnidades2[nombreDelaLlave].type;
          // console.log(objetoDentroDeParts);
          if (objetoDentroDeParts === 'quiz'){
              totalDeQuizzes++;
              let quizCompleted = objetoDeUnidades2[nombreDelaLlave].completed;
              if (quizCompleted === 1){
                  completedDeQuizzes++;
                  let totalScore = objetoDeUnidades2[nombreDelaLlave].score;
                  //console.log(totalScore);
                  scoreSum += totalScore;
              }
          }
          percentDeQuizzes = parseInt(completedDeQuizzes * 100 / totalDeQuizzes);
          scoreAvg = parseInt(scoreSum / totalDeQuizzes);
      })
  })
 resultadoDeQuizzes.quizzes.total = totalDeQuizzes;
 resultadoDeQuizzes.quizzes.completed = completedDeQuizzes;
 resultadoDeQuizzes.quizzes.percent = percentDeQuizzes;
 resultadoDeQuizzes.quizzes.scoreSum = scoreSum;
 resultadoDeQuizzes.quizzes.scoreAvg = scoreAvg;
 
 return resultadoDeQuizzes;
};

