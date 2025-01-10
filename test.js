const { input, confirm, select } = require('@inquirer/prompts');
(async function main() {
const name = await input({ message: 'Введи имя:' });
const color = await select({
message: 'Выбери цвет:',
choices: [
{ name: '🔴', value: 'красный' },
{ name: '🟢', value: 'зелёный' },
{ name: '🔵', value: 'синий' },
],
});
const isCorrect = await confirm({
message: `${name} выбрал ${color} цвет. Верно?`,
});
if (!isCorrect) return main();
})();