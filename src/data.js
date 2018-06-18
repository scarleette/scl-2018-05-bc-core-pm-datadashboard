//  USANDO FETCH!
let dataContainer = {};
function callingCohorts() {
  // fetch me entrega una respuesta, un valor que esta en el futuro==> es una promesa
  fetch('https://natichan.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/users.json')
    .then( // then cuando recibo la respuesta, catch cuando carga
      (response) =>{ 
        return response.json();
      }
    ).then( // cuando cumplo la promesa 
      (usersElement) =>{
        // el contenedor de datos con los usuarios (users) y 
        dataContainer.users = usersElement;
        console.log(dataContainer.users);
      }
    ).then(  
      fetch('https://natichan.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/progress.json')
        .then( // then cuando recibo la respuesta, catch cuando carga
          (responseTwo) =>{ 
            return responseTwo.json();
          }
        ).then( // cuando cumplo la promesa 
          (progressElement) =>{
            dataContainer.progress = progressElement;
            console.log(dataContainer.progress);   
          }
        ).catch( // cuando la promesa falla
          (error) => {
            console.log('Petición falló');
          }
        ).then(
          fetch('https://natichan.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/progress.json')
            .then( // then cuando recibo la respuesta, catch cuando carga
              (responseThree) =>{ 
                return responseThree.json();
              }
            ).then( // cuando cumplo la promesa 
              (cohortsElement) =>{
                dataContainer.cohorts = cohortsElement;
                console.log(dataContainer.cohorts);
              }
            ).catch( // cuando la promesa falla
              (error) => {
                console.log('Petición falló');
              }
            )
        ) 
    ); 
}


/* users: Arreglo de objetos.
progress: Objeto de progreso en bruto. Contiene una 
llave para cada usuario (uid) con un objeto que contiene el progreso del usuario para cada curso.
courses: Arreglo de strings con los ids de los cursos del cohort en cuestión. 
Esta data se puede extraer de la propiedad coursesIndex de los objetos que representan los cohorts.*/

// queremos obtener todos los datos, users, progress y courses
// queremos recorrer el arreglo o array de users calculando los indicadores de progreso de cada una.
// la función debe retornar un nuevo arreglo de usuarios, los objetos de usuario deben llevar la propiedad stats(estadísticas calculadas).
const computeUsersStats = (users, progress, courses) => {
  return; // un nuevo arreglo de usuarios, cada usuario tendrá la propiedad stats(estadísticas calculadas)
};

// El return es otro arreglo de objetos con la propiedad stats
// stats debe ser un objeto
/* stats tiene que tener otras propiedades asociadas:
percent: Número entero entre 0 y 100 que indica el porcentaje de completitud general del usuario con respecto a todos los cursos asignados a su cohort.
exercises: Objeto con tres propiedades:
    total: Número total de ejercicios autocorregidos presentes en cursos del cohort.
    completed: Número de ejercicios autocorregidos completados por el usuario.
    percent: Porcentaje de ejercicios autocorregidos completados.
reads: Objeto con tres propiedades:
    total: Número total de lecturas presentes en cursos del cohort.
    completed: Número de lecturas completadas por el usuario.
    percent: Porcentaje de lecturas completadas.
quizzes: Objeto con cinco propiedades:
    total: Número total de quizzes presentes en cursos del cohort.
    completed: Número de quizzes completadas por el usuario.
    percent: Porcentaje de quizzes completadas.
    scoreSum: Suma de todas las puntuaciones (score) de los quizzes completados.
    scoreAvg: Promedio de puntuaciones en quizzes completados.*/


// ordenar la lista de usuarios de la función anterior
/* 1. orderBy (ordernar por) 
            -nombre 
            -porcentaje completitud
            -porcentaje de ejercicios autocorregidos completados
            - porcentaje de quizzes completados
            - puntuación promedio en quizzes completados
            - porcentaje de lecturas completadas */
/* 2. orderDirection ascendente o descendente*/ 

const sortUsers = (users, orderBy, orderDirection) => {
  return; // arreglo de usuarios ordenado
};
// función para filtrar estudiantes con un botón o input de search
// obtener users de computeUsersStats()
// crear un string de búsqueda, para escoger por estudiante
const filterUsers = (users, search) =>{
  return; // nuevo arreglo con los que cumplan la condición de filtrado(string search nombre(name) del usuario)
};
// función para seleccionar al cohort
// debe también dejar cambiar al usuario los criterios de ordenado y filtrado en la interfaz
// invoca internamente a las demás funciones
const processCohortData = (options) =>{
  return; // Nuevo arreglo de usuarios ordenado y filtrado con la propiedad stats añadida (ver computeUsersStats)
};


/* options: objeto con las siguientes llaves:
    cohort: Objeto cohort (de la lista de cohorts)
    cohortData: Objeto con dos propiedades:
        users: Arreglo de usuarios miembros del cohort.
        progress: Objeto con data de progreso de cada usuario en el contexto de un cohort en particular.
    orderBy: String con criterio de ordenado (ver sortUsers).
    orderDirection: String con dirección de ordenado (ver sortUsers).
    search: String de búsqueda (ver filterUsers)*/

