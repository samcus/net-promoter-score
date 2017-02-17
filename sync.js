'use strict';
//const Promise = require('bluebird');

class NPS {

  // Public Methods

  constructor(inputScores){
  return buildData(inputScores,this);
  }

}


// Private Properties

var data = {
  "detractors": 0,
  "passives": 0,
  "promoters": 0,
  "detractorsPercentage": 0,
  "passivesPercentage": 0,
  "promotersPercentage": 0,
  "summary": null,
  "score": null
};


// Private Methods
function buildData(inputScores,that){
  cleanData();
  validateInputScores(inputScores);
  //that.data = data;
  return data;
}

function cleanData(){
  data = {
    "detractors": 0,
    "passives": 0,
    "promoters": 0,
    "detractorsPercentage": 0,
    "passivesPercentage": 0,
    "promotersPercentage": 0,
    "summary": null,
    "score": null
  };
}

// Cycle Through All Input Scores
function validateInputScores(inputScores, callback, error){
  var lengthTotal = inputScores.length;
  inputScores.forEach(function(score, index){
    validateInputScore(score, function(eMessage){
      return error(eMessage);
    });
    if((parseInt(index + 1)) == lengthTotal){
      //return callback();
      //return data;
      calculatePercentages(inputScores);
    }
  });
}

// Calculate Percentages of Each
function calculatePercentages(inputScores){
  var lengthTotal = inputScores.length;
  data.detractorsPercentage = data.detractors/lengthTotal;
  data.passivesPercentage = data.passives/lengthTotal;
  data.promotersPercentage = data.promoters/lengthTotal;
  calculateNPS();
}

// Calculate the Conformed NPS
function calculateNPS(){
  var rawNPS = data.promotersPercentage - data.detractorsPercentage;
  data.score = Math.round(rawNPS * 100);
  determineSummary(data.score);
}

// Determine Summary
function determineSummary(score){
  if(score === -100){
    data.summary = "broken";
  } if(score >= -99 && score <= -1){
    data.summary = "bad";
  } if(score === 0){
    data.summary = "neutral";
  } if(score >= 1 && score <= 50){
    data.summary = "good";
  } if(score >= 51 && score <= 70){
    data.summary = "excellent";
  } if(score >= 71 && score <= 99){
    data.summary = "world class";
  } if(score === 100){
    data.summary = "perfect";
  }
  return data;
}

// Validate Input NPS
function validateInputScore(inputScore, error){
  if(typeof(inputScore) != "number"){
    throw new TypeError("Score must be a number");
    return error("Score must be a number");
  } if(inputScore < 0 || inputScore > 10){
    throw new RangeError("Score is out of NPS range");
    return error("Score is out of NPS range");
  } else{
    classifyInputScore(inputScore);
  }
}

// Classify Input NPS
function classifyInputScore(inputScore){
  if(inputScore <= 6){
    data.detractors += 1;
    return "detractor";
  } if(inputScore == 7 || inputScore == 8){
    data.passives += 1;
    return "passive";
  } if(inputScore >= 9){
    data.promoters += 1;
    return "promoter";
  }
}

module.exports = NPS;
