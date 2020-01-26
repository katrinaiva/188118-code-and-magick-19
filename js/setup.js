'use strict';


var getRandomItem = function (RandomItem) {
  return Math.floor(Math.random() * RandomItem.length);
};

var getRandomName = function () {
  var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлию', 'Люпита', 'Вашингтон'];
  var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Торольницкая', 'Ниогнго', 'Ирвинг'];

  for (var i = 0; i <= names.length - 1; i++) {
    var nameWizard = names[getRandomItem(names)];
    var surname = surnames[getRandomItem(surnames)];
  }

  return nameWizard + ' ' + surname;
};

var getRandomCoatColor = function () {
  var coatColors = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
  return coatColors[getRandomItem(coatColors)];
};

var getRandomEyesColor = function () {
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  return eyesColors[getRandomItem(eyesColors)];
};

var getWizardItem = function () {
  var wizardItem = {
    name: getRandomName(),
    coatColor: getRandomCoatColor(),
    eyesColor: getRandomEyesColor(),
  };
  return wizardItem;
};

var dialogSetup = document.querySelector('.setup');

dialogSetup.classList.remove('hidden');
var wizards = [];
for(var i = 0; i < 4; i++) {
  wizards.push(getWizardItem());
}
console.log(wizards);
