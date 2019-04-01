global.window = global;
require('../src/data');
require('../src/data/injuries/injuries');
const input = INJURIES;
const output = [
  {Year: '1960-01-04', accidentstrain: null},
  {Year: '1965-01-04', accidentstrain: null},
  {Year: '1970-01-04', accidentstrain: null},
  {Year: '1975-01-04', accidentstrain: null},
  {Year: '1980-01-04', accidentstrain: 665},
  {Year: '1985-01-04', accidentstrain: 476},
  {Year: '1990-01-04', accidentstrain: 451},
  {Year: '1991-01-04', accidentstrain: 326},
  {Year: '1992-01-04', accidentstrain: 171},
  {Year: '1993-01-04', accidentstrain: 308},
  {Year: '1994-01-04', accidentstrain: 262},
  {Year: '1995-01-04', accidentstrain: 294},
  {Year: '1996-01-04', accidentstrain: 281},
  {Year: '1997-01-04', accidentstrain: 183},
  {Year: '1998-01-04', accidentstrain: 129},
  {Year: '1999-01-04', accidentstrain: 130},
  {Year: '2000-01-04', accidentstrain: 275},
  {Year: '2001-01-04', accidentstrain: 310},
  {Year: '2002-01-04', accidentstrain: 1884},
  {Year: '2003-01-04', accidentstrain: 232},
  {Year: '2004-01-04', accidentstrain: 346},
  {Year: '2005-01-04', accidentstrain: 787},
  {Year: '2006-01-04', accidentstrain: 220},
  {Year: '2007-01-04', accidentstrain: 309},
  {Year: '2008-01-04', accidentstrain: 321},
  {Year: '2009-01-04', accidentstrain: 127},
  {Year: '2010-01-04', accidentstrain: 110},
  {Year: '2011-01-04', accidentstrain: 217},
  {Year: '2012-01-04', accidentstrain: 462},
  {Year: '2013-01-04', accidentstrain: 328},
  {Year: '2014-01-04', accidentstrain: 139},
  {Year: '2015-01-04', accidentstrain: 558},
  {Year: '2016-01-04', accidentstrain: 284}
];

const output2 = [
  {Year: '1960-01-04', accidentsboat: 929},
  {Year: '1965-01-04', accidentsboat: 927},
  {Year: '1970-01-04', accidentsboat: 780},
  {Year: '1975-01-04', accidentsboat: 2136},
  {Year: '1980-01-04', accidentsboat: 2650},
  {Year: '1985-01-04', accidentsboat: 2757},
  {Year: '1990-01-04', accidentsboat: 3822},
  {Year: '1991-01-04', accidentsboat: 3967},
  {Year: '1992-01-04', accidentsboat: 3683},
  {Year: '1993-01-04', accidentsboat: 3559},
  {Year: '1994-01-04', accidentsboat: 4084},
  {Year: '1995-01-04', accidentsboat: 4141},
  {Year: '1996-01-04', accidentsboat: 4442},
  {Year: '1997-01-04', accidentsboat: 4555},
  {Year: '1998-01-04', accidentsboat: 4612},
  {Year: '1999-01-04', accidentsboat: 4315},
  {Year: '2000-01-04', accidentsboat: 4355},
  {Year: '2001-01-04', accidentsboat: 4274},
  {Year: '2002-01-04', accidentsboat: 4062},
  {Year: '2003-01-04', accidentsboat: 3888},
  {Year: '2004-01-04', accidentsboat: 3363},
  {Year: '2005-01-04', accidentsboat: 3451},
  {Year: '2006-01-04', accidentsboat: 3474},
  {Year: '2007-01-04', accidentsboat: 3673},
  {Year: '2008-01-04', accidentsboat: 3331},
  {Year: '2009-01-04', accidentsboat: 3358},
  {Year: '2010-01-04', accidentsboat: 3153},
  {Year: '2011-01-04', accidentsboat: 3081},
  {Year: '2012-01-04', accidentsboat: 3000},
  {Year: '2013-01-04', accidentsboat: 2620},
  {Year: '2014-01-04', accidentsboat: 2678},
  {Year: '2015-01-04', accidentsboat: 2679},
  {Year: '2016-01-04', accidentsboat: null}
];

const outputFilter = [{Year: '1960-01-04', Trains: null, Boats: 929}];
const condition1 = '1960-01-04';

const sortBy = 'Year';
const sortOrder = 'D';
const outputsort = [
  {Year: '2016-01-04', accidentstrain: 284},
  {Year: '2015-01-04', accidentstrain: 558},
  {Year: '2014-01-04', accidentstrain: 139},
  {Year: '2013-01-04', accidentstrain: 328},
  {Year: '2012-01-04', accidentstrain: 462},
  {Year: '2011-01-04', accidentstrain: 217},
  {Year: '2010-01-04', accidentstrain: 110},
  {Year: '2009-01-04', accidentstrain: 127},
  {Year: '2008-01-04', accidentstrain: 321},
  {Year: '2007-01-04', accidentstrain: 309},
  {Year: '2006-01-04', accidentstrain: 220},
  {Year: '2005-01-04', accidentstrain: 787},
  {Year: '2004-01-04', accidentstrain: 346},
  {Year: '2003-01-04', accidentstrain: 232},
  {Year: '2002-01-04', accidentstrain: 1884},
  {Year: '2001-01-04', accidentstrain: 310},
  {Year: '2000-01-04', accidentstrain: 275},
  {Year: '1999-01-04', accidentstrain: 130},
  {Year: '1998-01-04', accidentstrain: 129},
  {Year: '1997-01-04', accidentstrain: 183},
  {Year: '1996-01-04', accidentstrain: 281},
  {Year: '1995-01-04', accidentstrain: 294},
  {Year: '1994-01-04', accidentstrain: 262},
  {Year: '1993-01-04', accidentstrain: 308},
  {Year: '1992-01-04', accidentstrain: 171},
  {Year: '1991-01-04', accidentstrain: 326},
  {Year: '1990-01-04', accidentstrain: 451},
  {Year: '1985-01-04', accidentstrain: 476},
  {Year: '1980-01-04', accidentstrain: 665},
  {Year: '1975-01-04', accidentstrain: null},
  {Year: '1970-01-04', accidentstrain: null},
  {Year: '1965-01-04', accidentstrain: null},
  {Year: '1960-01-04', accidentstrain: null}
];

const statsBy = ['Total_Injured_Persons_Train_Accidents_Rail_Roads'];
const outputComputestats = [1884];

const sumaBy = ['Total_Injured_Persons_Recreational_Boating'];
const outputComputesuma = 105799;

const sortByIgual = 'accidentstrain';
const sortOrderIgual = 'D';
const inputigual = [
  {Year: '1960-01-04', accidentstrain: null},
  {Year: '1965-01-04', accidentstrain: null}];
const outputigual = [
  {Year: '1965-01-04', accidentstrain: null},
  {Year: '1960-01-04', accidentstrain: null}
];

const sortByIgual2 = 'Year';
const sortOrderIgual2 = 'A';
const inputigual2 = [
  {Year: '1960-01-04', accidentstrain: null},
  {Year: '1965-01-04', accidentstrain: null}];
const outputigual2 = [
  {Year: '1960-01-04', accidentstrain: null},
  {Year: '1965-01-04', accidentstrain: null}
];


describe('showArrTrain', () => {
  it('debería ser una función', () => {
    expect(typeof showArrTrain).toBe('function');
  });  
  it('debería retornar un array de objetos de year y tren', () => {
    expect(showArrTrain(input)).toEqual(output);
  });
});

describe('showArrBoat', () => {
  it('debería ser una función', () => {
    expect(typeof showArrBoat).toBe('function');
  });  
  it('debería retornar un array de objetos de year y bote', () => {
    expect(showArrBoat(input)).toEqual(output2);
  });
});

describe('filterData', () => {
  it('debería ser una función', () => {
    expect(typeof filterData).toBe('function');
  });
  it('deberia retornar un array de objetos segun la condición', () => {
    expect(filterData(input, condition1)).toEqual(outputFilter);
  });
});

describe('sortData', () => {
  it('debería ser una función', () => {
    expect(typeof sortData).toBe('function');
  }); 
  it('debería retornar un array de objetos ordenados por año', () => {
    expect(sortData(showArrTrain(input), sortBy, sortOrder)).toEqual(outputsort);
  }); 
  it('debería retornar un array de objetos ordenados si son iguales descendente', () => {
    expect(sortData(inputigual, sortByIgual, sortOrderIgual)).toEqual(outputigual);
  }); 
  it('debería retornar un array de objetos ordenados si son iguales ascendentes', () => {
    expect(sortData(inputigual2, sortByIgual2, sortOrderIgual2)).toEqual(outputigual2);
  });
});

describe('computeStats', () => {
  it('debería ser una función', () => {
    expect(typeof computeStats).toBe('function');
  });  
  it('debria retornar un array con un number', () => {
    expect(computeStats(input, statsBy)).toEqual(outputComputestats);
  });
});

describe('computeSumaTrains', () => {
  it('debería ser una función', () => {
    expect(typeof computeSumaTrains).toBe('function');
  }); 
  it('deberia retornar un array con un number', () => {
    expect(computeSumaTrains(input, sumaBy)).toEqual(outputComputesuma);
  }); 
});