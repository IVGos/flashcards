// const View = require ('./View.js');


async function Controller() {
    let username = await View.showStart();
    while (username.search(/\d/)) {
        username = 
        await View.badName()
        username = await View.showStart()
    }
    console.log('CHECK OK');
    View.checkName(username)

}

Controller()

module.exports = Controller;