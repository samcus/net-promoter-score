'use strict';
const Promise = require('bluebird');

class NPS {

  // Public Methods

  constructor(inputScores){
    return new Promise((resolve, reject) => {
      data = {
       "detractors": null,
       "passives": null,
       "promoters": null,
       "detractorsPercentage": null,
       "passivesPercentage": null,
       "promotersPercentage": null,
       "summary": null,
       "score": "loading"
     };
      validateInputScores(inputScores, function(){

        calculatePercentages(inputScores);
        resolve(data);
      }, function(error){
        reject(error);

      });
    });
  }

}


// Private Properties

var data = {
  "detractors": null,
  "passives": null,
  "promoters": null,
  "detractorsPercentage": null,
  "passivesPercentage": null,
  "promotersPercentage": null,
  "summary": null,
  "score": "loading"
};


// Private Methods

// Cycle Through All Input Scores
function validateInputScores(inputScores, callback, error){
  var lengthTotal = inputScores.length;
  inputScores.forEach(function(score, index){
    validateInputScore(score, function(eMessage){
      return error(eMessage);
    });
    if((parseInt(index + 1)) == lengthTotal){
      return callback();
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
}

// Validate Input NPS
function validateInputScore(inputScore, error){
  if(typeof(inputScore) != "number"){
    //throw "Score must be a number";
    return error("Score must be a number");
  } if(inputScore < 0 || inputScore > 10){
    //throw "Score is out of NPS range";
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
