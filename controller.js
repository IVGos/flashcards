const View = require ('./View.js');
const Person = require ('./Model.js')

async function Controller() {
    
    let username = await View.showStart();

    while (username.search(/\d/)) {
         View.badName()
        username = await View.showStart()
    }

    View.checkName(username)
    const user = new Person(username)
    const theme = await View.chooseTheme()

    const questions = await getQuestion(theme)
    const x = await Promise.all(questions.map(async (elem) => await View.Showquestion(elem.key)))
    x.forEach((el, i) => {    
        if (el.toLowerCase().replace(/ /g, '') === questions[i].value.toLowerCase().replace(/ /g, '')) {
            user.addScore(true)
        }
       });
   
     Person.saveData(user).then(()=> showResult(user))
    //  const newLocal = showResult(user);
    const continueGame = await Person.newGame()
     if (continueGame) {
        
     }



}


// - создание пользователя (createPerson) ()
// - запуск функции отображения тем для выбора (передает тему)
// - запуск функции отображения вопросов по выбранной теме
//  - если ответ верен, добавляем очки и проходим к след. вопросу (пред. шаг, след.объект), если нет, то пишем неверно и проходим к след вопросу. Если вопросов больше нет, то:
// - вызов финального окна со статистикой



Controller()

module.exports = Controller;