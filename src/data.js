//showArrTrain y Boat son para crear un nuevo arrays solo con los elementos de tren y bote
const showArrTrain = (data) => {
  let newdatat = [];
  for (let i = 0; i < data.length; i++) {
    newdatat.push({
      'Year': data[i].Year,
      'accidentstrain': data[i]['Total_Injured_Persons_Train_Accidents_Rail_Roads']
    })
  }
  return newdatat;
}
window.showArrTrain = showArrTrain;

const showArrBoat = (data) => {
  let newdatab = [];
  for (let i = 0; i < data.length; i++) {
    newdatab.push({
      'Year': data[i].Year,
      'accidentsboat': data[i]['Total_Injured_Persons_Recreational_Boating']
    })
  }
  return newdatab;
}
window.showArrBoat = showArrBoat;

const filterData = (data, condition) => {
  let filteredArr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].Year === condition) {
      filteredArr.push({
        'Year': data[i].Year,
        'Trains': data[i].Total_Injured_Persons_Train_Accidents_Rail_Roads,
        'Boats': data[i].Total_Injured_Persons_Recreational_Boating
      })
    }
  }
  return filteredArr;
}
window.filterData = filterData;

const sortData = (data, sortBy, sortOrder) => {
  const orderedArr = data.sort=(a,b)=>{
    if(a[sortBy]> b[sortBy]){
      return 1;
    }else if (a[sortBy] <b [sortBy]) {
      return -1;
    } else if (a[sortBy] === b[sortBy]) {
      return 0;
    }
  };
  if(sortOrder == "A"){
    return orderedArr;
  } else if(sortOrder=="D"){
    return orderedArr.reverse();
  }
}
window.sortData=sortData;

const computeStats = (data) => {
  let maximoBoats = 0;
  for (let i = 0; i < data.length; i++) {
    if (maximoBoats < data[i].Total_Injured_Persons_Recreational_Boating) {
      maximoBoats = data[i].Total_Injured_Persons_Recreational_Boating;
    }
  }
  return [maximoBoats];
}
window.computeStats = computeStats;

