const commando = require('discord.js-commando');

require('dotenv-flow').config();

const config = {
    token: process.env.TOKEN,
    owner: process.env.OWNER,
}
const bot = new commando.Client({
    commandPrefix: '!',
    owner: config.owner,
});

bot.once('ready', () => console.log('Logged in as ' + bot.user.tag));

bot.login(config.token).catch(console.error);