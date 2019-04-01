//  showArrTrain y Boat son para crear un nuevo arrays solo con los elementos de tren y bote
const showArrTrain = (data) => {
  let newdatat = [];
  for (let i = 0; i < data.length; i++) {
    newdatat.push({
      'Year': data[i].Year,
      'accidentstrain': data[i]['Total_Injured_Persons_Train_Accidents_Rail_Roads']
    });
  }
  return newdatat;
};
window.showArrTrain = showArrTrain;

const showArrBoat = (data) => {
  let newdatab = [];
  for (let i = 0; i < data.length; i++) {
    newdatab.push({
      'Year': data[i].Year,
      'accidentsboat': data[i]['Total_Injured_Persons_Recreational_Boating']
    });
  }
  return newdatab;
};
window.showArrBoat = showArrBoat;

const filterData = (data, condition) => {
  let filteredArr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].Year === condition) {
      filteredArr.push({
        'Year': data[i].Year,
        'Trains': data[i].Total_Injured_Persons_Train_Accidents_Rail_Roads,
        'Boats': data[i].Total_Injured_Persons_Recreational_Boating
      });
    }
  }
  return filteredArr;
};
window.filterData = filterData;

const sortData = (data, sortBy, sortOrder) => {
  const arrordered = data.sort((avar, bvar) => {
    if (avar[sortBy] > bvar[sortBy]) {
      return 1;
    } else if (avar[sortBy] < bvar[sortBy]) {
      return -1;
    } else if (avar[sortBy] === bvar[sortBy]) {
      return 0;
    }
  });
  if (sortOrder === 'A') {
    return arrordered;
  } else if (sortOrder === 'D') {
    return (arrordered.reverse());
  }
};
window.sortData = sortData;


//  HALLANDO EL MÁXIMO Y/O MÍNIMO DEL NÚMERO DE ACCIDENTES EN TRAINS
//  Cálculo del máximo de boat

const computeStats = (data, statsBy) => {
  let maximoBoats = 0;
  for (let i = 0; i < data.length; i++) {
    if (maximoBoats < data[i][statsBy]) {
      maximoBoats = data[i][statsBy];
    }
  }
  return [maximoBoats];
};
window.computeStats = computeStats; // 4612

//  Suma de personas accidentadas por Trains en EEUU
const computeSumaTrains = (INJURIES, sumaBy) => {
  let sumaTrains = 0;
  for (let i = 0; i < INJURIES.length; i++) {
    sumaTrains += INJURIES[i][sumaBy];
  }
  return sumaTrains;
};
window.computeSumaTrains = computeSumaTrains; // 10585