### Net Promoter Score - Samuel Custer

# Installation

```bash
npm install net-promoter-score --save
```

# Usage

```js
'use strict';
const NPS = require('net-promoter-score');

// Create from Scores
var firstScores = new NPS([9,9,10,6,8,9,9,10,6,8,9,9,10,6,8,9,9,10,6,8,9,9,10,6,8,9,9,10,6,8,9,9,10,6,8,9,9,10,6,8,9,9,10,6,8]);
var secondScores = new NPS([1,9,10]);
var thirdScores = new NPS([1,5,5,6,7,3,9,10,10]);

// JSON Object
console.log(firstScores);
console.log(secondScores);
console.log(thirdScores);

// Object Details
console.log(thirdScores.detractors);
console.log(thirdScores.passives);
console.log(thirdScores.promoters);
console.log(thirdScores.detractorsPercentage);
console.log(thirdScores.passivesPercentage);
console.log(thirdScores.promotersPercentage);
console.log(thirdScores.summary);
console.log(thirdScores.score);
```
