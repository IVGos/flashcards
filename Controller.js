/* eslint-disable no-restricted-syntax */
const View = require('./View.js');
const { Person, getQuestion, SaveData } = require('./Model.js');

async function Controller() {
  let username = await View.showStart();

  while (/\d/.test(username) || /\s/.test(username)) {
       View.badName()
      username = await View.showStart()
  }

  View.checkName(username);
  const user = new Person(username);
  const theme = await View.chooseTheme();

  const questions = await getQuestion(theme);

  const x = []
  for (const question of questions) {
    x.push(await View.showQuestion(question.key));
  }

  x.forEach((el, i) => {
    if (
      el.toLowerCase().replace(/ /g, '') ===
      questions[i].value.toLowerCase().replace(/ /g, '')
    ) {
      user.addScore(true);
    }
  });

  await SaveData(user);
  View.showResult(user);
  //  const newLocal = showResult(user);
  // const continueGame = await Person.newGame()
  //  if (continueGame) {

  //  }
}

// - создание пользователя (createPerson) ()
// - запуск функции отображения тем для выбора (передает тему)
// - запуск функции отображения вопросов по выбранной теме
//  - если ответ верен, добавляем очки и проходим к след. вопросу (пред. шаг, след.объект), если нет, то пишем неверно и проходим к след вопросу. Если вопросов больше нет, то:
// - вызов финального окна со статистикой

module.exports = Controller;
