const token = '831065060:AAEWvXCJMqbDttC1jVQB5gR145579dRQ3tQ';

const Telegraf = require('telegraf');

const weather=require('./weather/');
const film = require('./movie/');
const tv = require('./tv/');
const theatre = require('./theatre/');

const bot = new Telegraf(token);
bot.start((ctx) => ctx.reply(`Hello there! Here is some functional commands that you can use:\n\n1.Type /film or /tv and get brief description of the random film (tv-show) from IMDB\n2.Type /film (name of the film) and get brief description of this film (ex:/film Fury)\n\n3.Type /weather and get brief description of this weather in Kyiv\n4.Type /weather (name of the city) and get brief description of this weather in this city (ex:/weather Stockholm)`));

bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('ahhah NICE 👍👍👍'));
bot.hears('hi', (ctx) => ctx.reply(`Hello ${ctx.message.chat.first_name} ${ctx.message.chat.last_name}`));
bot.hears('/weather', async (ctx) => ctx.reply(await weather()));
bot.hears(/\/weather (.+)/, async (ctx) => ctx.reply(await weather(`${ctx.match[1]}`)));
bot.hears('/film', async (ctx) => ctx.reply(await film.getRandom()));
bot.hears(/\/film (.+)/, async (ctx) => ctx.reply(`${await film(`${ctx.match[1]}`)}`));
bot.hears('/tv', async (ctx) => ctx.reply(await tv.getRandom()));
bot.hears('/theatre', async (ctx) => ctx.reply(await theatre.getAll()));

bot.launch();