// const controller = require('controller');
// const view = require('view');
const fs = require('fs').promises;

class Person {
  constructor(playerName) {
    this.playerName = playerName;
    this.score = 0;
  }

  addScore(bool) {
    bool ? this.score += 10 : (this.score = this.score);
  }
}

// const obj = { playerName: 'Илья', score: 10 };
async function SaveData(obj) {
  const newData = `слабенький игрок: ${obj.playerName}\nунылый счет: ${obj.score}\n\n`;
  fs.appendFile('database.txt', newData);
}

// SaveData(obj);

async function getObjectQ(name) {
  let x = await fs.readFile(`./topics/${name}_flashcard_data.txt`, 'utf-8');
  x = await x.split('\n').filter((el) => el !== '');
  const result = [];
  for (let i = 0; i < x.length; i += 2) {
    result.push({ key: x[i], value: x[i + 1] });
  }
  return result;
}

async function getQuestion(strAnimal) {
  switch (strAnimal) {
    case 'nighthawk':
      return getObjectQ('nighthawk');

    case 'otter':
      return getObjectQ('otter');

    case 'raccoon':
      return getObjectQ('raccoon');

    default:
      throw new Error('неверный выбор');
  }
}

// getQuestion('nighthawk').then(console.log);

// module.exports = Person;
module.exports = { SaveData, getQuestion, Person };
