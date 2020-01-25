'use strict';

var WIDTH_STAT = 420;
var HEIGHT_STAT = 270;
var BAR_WIDTH = 40;
var STAT_X = 100;
var STAT_Y = 10;
var GAP = 10;
var FONT_GAP = 10;
var BAR_GAP = 50;

var playerName = 'Вы';
var playerBarColor = 'rgba(255, 0, 0, 1)';

var screenStat = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, WIDTH_STAT, HEIGHT_STAT);
};

window.renderStatistics = function (ctx, names, times) {
  screenStat(ctx, STAT_X + GAP, 2 * GAP, 'rgba( 0, 0, 0, 0.7 )');
  screenStat(ctx, STAT_X, GAP, '#fff');

  var getMaxScore = function () {
    var maxScore = 0;

    for (var i = 0; i <= times.length - 1; i++) {
      if (maxScore <= times[i]) {
        maxScore = times[i];
      }
    }

    return maxScore;
  };

  var maxScore = getMaxScore();

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', STAT_X + 3 * GAP, GAP * 4);
  ctx.fillText('Список результатов:', STAT_X + 3 * GAP, GAP * 6);

  var downTextY = STAT_Y + HEIGHT_STAT - 2 * GAP;

  for (var i = 0; i <= names.length - 1; i++) {
    var downTextX = STAT_X + 3 * GAP + (BAR_WIDTH + BAR_GAP) * i;
    var barHeight = Math.round(times[i] * 150 / maxScore);
    var barY = downTextY - FONT_GAP - GAP / 2 - barHeight;
    var scoreTextY = barY - FONT_GAP;

    ctx.fillStyle = 'black';
    ctx.fillText(names[i], downTextX, downTextY);
    ctx.fillText(Math.round(times[i]), downTextX, scoreTextY);

    var getRandomSaturate = function () {
      return Math.floor(Math.random() * 100);
    };

    if (names[i] === playerName) {
      ctx.fillStyle = playerBarColor;
    } else {
      ctx.fillStyle = 'hsl(240, ' + getRandomSaturate() + '%, 50%)';
    }

    ctx.fillRect(downTextX, barY, BAR_WIDTH, barHeight);
  }
};

