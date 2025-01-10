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

    static async choiseTheme(){

        const theme = await select({
            message: 'Выбери тему вопросов:',
            choices: [
            { name: 'Ночные ястребы', value: 'nighthawk_flashcard_data.txt' },
            { name: 'Выдры кайфуши', value: 'otter_flashcard_data.txt' },
            { name: 'Енот полоскун', value: 'raccoon_flashcard_data.txt' },
            ], 
            });
            
    }

    // static async showQuestion(string){
        
    // }



}
 View.choiseTheme()

// showStart()

//  View.choiseTheme()
module.exports = View