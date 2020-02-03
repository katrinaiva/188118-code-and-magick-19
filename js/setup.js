'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлию', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Торольницкая', 'Ниогнго', 'Ирвинг'];
var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

var getRandomItem = function (items) {
  return items[getRandomInt(0, items.length - 1)];
};

var getWizardItem = function () {
  return {
    name: getRandomItem(NAMES) + ' ' + getRandomItem(SURNAMES),
    coatColor: getRandomItem(COAT_COLORS),
    eyesColor: getRandomItem(EYES_COLORS),
  };
};

var wizards = [];

for (var j = 0; j < 4; j++) {
  wizards.push(getWizardItem());
}

var similarListElement = document.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardFragment = document.createDocumentFragment();

for (var i = 0; i < 4; i++) {
  var wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  wizardFragment.appendChild(wizardElement);
}

similarListElement.appendChild(wizardFragment);

document.querySelector('.setup-similar').classList.remove('hidden');

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupOpenIcon = document.querySelector('.setup-open-icon');

setupOpen.addEventListener('click', function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      setup.classList.add('hidden');
    }
  });
});

setupClose.addEventListener('click', function () {
  setup.classList.add('hidden');
});

setupOpenIcon.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    setup.classList.remove('hidden');
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    setup.classList.add('hidden');
  }
});


