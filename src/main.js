const homeButton = document.getElementById('home_menu_btn');
const aboutButton = document.getElementById('about_menu_btn');
const typeButton = document.getElementById('tipo_menu_btn');
const yearButton = document.getElementById('ano_menu_btn');
const homeScreen = document.getElementById('home_screen');
const statisticScreen = document.getElementById('statistic_screen');
const typeScreen = document.getElementById('type_accident_screen');
const yearScreen = document.getElementById('year_accident_screen');
const trainScreen = document.getElementById('train_screen');
const trainBtn = document.getElementById('train');
const boatScreen = document.getElementById('boat_screen');
const boatBtn = document.getElementById('boat');
const seeDataBtn = document.getElementById('see_data');
const sortBtnTrain = document.getElementById('sort_por_ano');
const sortBtnBoat = document.getElementById('sort_por_ano_boat');

statisticScreen.style.display = 'none';
typeScreen.style.display = 'none';
yearScreen.style.display = 'none';
boatScreen.style.display = 'none';
trainScreen.style.display = 'none';

homeButton.addEventListener('click', () => {
  homeScreen.style.display = 'block';
  statisticScreen.style.display = 'none';
  typeScreen.style.display = 'none';
  boatScreen.style.display = 'none';
  yearScreen.style.display = 'none';
  trainScreen.style.display = 'none';
});

aboutButton.addEventListener('click', () => {
  homeScreen.style.display = 'none';
  typeScreen.style.display = 'none';
  yearScreen.style.display = 'none';
  boatScreen.style.display = 'none';
  trainScreen.style.display = 'none';
  statisticScreen.style.display = 'block';
});

typeButton.addEventListener('click', () => {
  homeScreen.style.display = 'none';
  yearScreen.style.display = 'none';
  statisticScreen.style.display = 'none';
  boatScreen.style.display = 'none';
  trainScreen.style.display = 'none';
  typeScreen.style.display = 'block';
});

yearButton.addEventListener('click', () => {
  homeScreen.style.display = 'none';
  typeScreen.style.display = 'none';
  statisticScreen.style.display = 'none';
  boatScreen.style.display = 'none';
  trainScreen.style.display = 'none';
  yearScreen.style.display = 'block';
});

trainBtn.addEventListener('click', () => {
  homeScreen.style.display = 'none';
  typeScreen.style.display = 'none';
  statisticScreen.style.display = 'none';
  yearScreen.style.display = 'none';
  boatScreen.style.display = 'none';
  trainScreen.style.display = 'block';
  pintarTrain(showArrTrain(INJURIES));
});

// pintando data
const containerTrain = document.getElementById('data_train');
const pintarTrain = (data) => {
  let string = '';
  for (let i = 0; i < data.length; i++) {
    string += ` 
        <div class="row display_inline_block">
          <div class="column">
            <div class="boxes_design_type display_inline_block">
            <p>Year: ${data[i].Year}</p>
            <p>#: ${data[i].accidentstrain}</p>
            </div>
          </div>
        </div>`;
  }
  containerTrain.innerHTML = string;
};

boatBtn.addEventListener('click', () => {
  homeScreen.style.display = 'none';
  typeScreen.style.display = 'none';
  statisticScreen.style.display = 'none';
  yearScreen.style.display = 'none';
  trainScreen.style.display = 'none';
  boatScreen.style.display = 'block';
  pintarBoat(showArrBoat(INJURIES));
});

const containerBoat = document.getElementById('data_boats');
const pintarBoat = (data) => {
  let string = '';
  for (let i = 0; i < data.length; i++) {
    string += ` 
        <div class="row display_inline_block">
          <div class="column">
            <div class="boxes_design_type display_inline_block">
            <p>Year: ${data[i].Year}</p>
            <p>#: ${data[i].accidentsboat}</p>
            </div>
          </div>
        </div>`;
  }
  containerBoat.innerHTML = string;
};

sortBtnTrain.addEventListener('click', () => {
  pintarTrain((sortData(showArrTrain(INJURIES), 'Year', 'D')));
});

sortBtnBoat.addEventListener('click', () => {
  pintarBoat((sortData(showArrBoat(INJURIES), 'accidentsboat', 'D')));
});

const yearData = document.getElementById('year_data');
const pintarYear = (data) => {
  let string = '';
  for (let i = 0; i < data.length; i++) {
    string += `
          <div class="center_items">
            <div class="box_type_year display_inline space text_align_center ">
              <p>Trains</p>
              </br>
              <p>Year: ${data[i].Year}</p>
              <p>#: ${data[i].Boats}</p>
            </div>
            <div class="box_type_year display_inline text_align_center ">
              <p>Boats</p>
              </br>
              <p>Year: ${data[i].Year}</p>
              <p>#: ${data[i].Trains}</p>
            </div>
          </div>`;
  }
  yearData.innerHTML = string;
};

seeDataBtn.addEventListener('click', () => {
  const option = document.getElementById('years').value;
  pintarYear(filterData(INJURIES, option));
});

// pintando máximo boating
const maxbtn = document.getElementById('max');
maxbtn.addEventListener('click', () => {
  pintarMax(computeStats(INJURIES, 'Total_Injured_Persons_Recreational_Boating'));
});
const stats = document.getElementById('stats');
const pintarMax = (maximo) => {
  let string = '';
  string += ` 
    <div class="box_stats center_content ">
      <div>
        <p>Injured People:</p>
        </br>
        <p>#:${maximo}</p>
      </div>
    </div>`;
  stats.innerHTML = string;
};

// pintando máximo Trains
const maxbtnTrains = document.getElementById('max_trains');
maxbtnTrains.addEventListener('click', () => {
  pintarMax(computeStats(INJURIES, 'Total_Injured_Persons_Train_Accidents_Rail_Roads'));
});

// pintando suma total Trains
const sumabtnTrains = document.getElementById('suma_trains');
sumabtnTrains.addEventListener('click', () => {
  pintarMax(computeSumaTrains(INJURIES, 'Total_Injured_Persons_Train_Accidents_Rail_Roads'));
});

// pintando suma total Boating
const sumabtnBoat = document.getElementById('suma_boat');
sumabtnBoat.addEventListener('click', () => {
  pintarMax(computeSumaTrains(INJURIES, 'Total_Injured_Persons_Recreational_Boating'));
});