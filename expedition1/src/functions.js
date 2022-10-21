const fs = require('fs');
const path = require('path');

const fileName = 'crew.txt';
const filePath = path.resolve(__dirname, fileName);
const strFromFile = fs.readFileSync(filePath, 'utf-8');
const arrNames = strFromFile.split('\n');

const fileName2 = 'equipment.txt';
const filePaht2 = path.resolve(__dirname, fileName2);
const strFromFile2 = fs.readFileSync(filePaht2, 'utf-8');
const arrNames2 = strFromFile2.split('\n');

const fileName3 = 'rockets.txt';
const filePaht3 = path.resolve(__dirname, fileName3);
const strFromFile3 = fs.readFileSync(filePaht3, 'utf-8');
const arrNames3 = strFromFile3.split('\n');

function getRightCaptain() {
  return arrNames.filter((person) => person.includes('Капитан'))
    .sort((person1, person2) => +person1.slice(-2) - +person2.slice(-2)).at(-1);
}

function getRightDoc() {
  return arrNames.filter((person) => person.includes('ж, Врач'))
    .sort((person1, person2) => +person1.slice(-2) - +person2.slice(-2)).at(-1);
}

function getAllEngineer() {
  return arrNames.filter((person) => person.includes('Бортмеханик'));
}

function getAllRover() {
  return arrNames2.filter((equip) => equip.includes('марсоход'));
}

function getRightRovers() {
  return arrNames2.filter((equip) => equip.includes('марсоход') && +equip.slice(-2) > 3);
}

function getRightRocket() {
  const rocket = arrNames3.slice(1, 4).map((el) => el.split(', '))
    .sort((a, b) => b[2] - a[2]);
  return rocket[0].map((el, i) => {
    if (i === rocket[0].length - 1) {
      return +el;
    }
    return el;
  });
}

module.exports = {
  getRightCaptain,
  getAllEngineer,
  getRightDoc,
  getAllRover,
  getRightRovers,
  getRightRocket,
};
