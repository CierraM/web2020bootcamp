//jshint esversion:6

const fs = require('fs');
var superheroes = require('superheroes');
var mySuperhereName = superheroes.random();
console.log(mySuperhereName);

const supervillains = require('supervillains');
var mysupervillainname = supervillains.random();
console.log(mysupervillainname);