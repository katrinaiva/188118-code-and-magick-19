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
var FIREBALL_WRAP = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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
var wizardCoat = setup.querySelector('.wizard-coat');
var wizardEyes = setup.querySelector('.wizard-eyes');
var setupFireballWrap = setup.querySelector('.setup-fireball-wrap');
var inputCoat = setup.querySelector('[name = coat-color]');
var inputEyes = setup.querySelector('[name = eyes-color]');
var inputFireball = setup.querySelector('[name = fireball-color]');

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

setupOpen.addEventListener('click', function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', function (evt) {
    if (evt.key === ESC_KEY) {
      setup.classList.add('hidden');
    }
  });
});

setupClose.addEventListener('click', function () {
  setup.classList.add('hidden');
});

setupOpenIcon.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    setup.classList.remove('hidden');
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    setup.classList.add('hidden');
  }
});
 
wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomItem(COAT_COLORS);
  inputCoat.value = getRandomItem(COAT_COLORS);
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomItem(EYES_COLORS);
  inputEyes.value = getRandomItem(EYES_COLORS);
});

setupFireballWrap.addEventListener('click', function () {
  setupFireballWrap.style.backgroundColor = getRandomItem(FIREBALL_WRAP);
  inputFireball.value = getRandomItem(FIREBALL_WRAP);
});
