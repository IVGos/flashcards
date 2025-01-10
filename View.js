const { input, confirm, select } = require('@inquirer/prompts')



class View {

    static async  showStart() {
        console.log("Привет Эльбрусовец!");
        const name  = await input({ message: 'Введи свое имя:' })
        
        return name
    }

    static async badName(){
        console.log("Введите имя пользователя без цифр");
        
    }

    static async checkName(checkedName){
        console.log(`${checkedName}, начнем восходждение!`);
    }

    static async chooseTheme(){

        const theme = await select({
            message: 'Выбери тему вопросов:',
            choices: [
            { name: 'Ночные ястребы', value: 'nighthawk' },
            { name: 'Выдры кайфуши', value: 'otter' },
            { name: 'Енот полоскун', value: 'raccoon' },
            ], 
            });

            return theme
    }

    static async showQuestion(stringQuest){
            const question  = await input({ message: stringQuest })

            return question
    }

    static async showResult(player){
        console.log(`Поздравляю ${player.name}! Ты набрал ${player.score} очков `)
    }

    static async newGame(){
        const newGame = await select({
            message: 'Хочешь продолжить игру?',
            choices: [
            { name: 'Да', value: true },
            { name: 'Нет', value: false },
            ], 
            });

            return newGame
    }
}

//  View.showQuestion("Что является основным источником пищи для ночных ястребов?").then(console.log);
//  View.showResult({name:"Митя", score:50})

// showStart()

//  View.choiseTheme()
module.exports = View