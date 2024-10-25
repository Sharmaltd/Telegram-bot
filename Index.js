const { Telegraf } = require('telegraf');

const bot = new Telegraf('7926887761:AAEN8jIxnyMPd5i3Gfb4BjbGkpqXDcXbNAI');

bot.start((ctx) => ctx.reply('Welcome! I am your bot.'));
bot.help((ctx) => ctx.reply('Help!'));
bot.on('text', (ctx) => ctx.reply('You said: ' + ctx.message.text));

bot.launch();